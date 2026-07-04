const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const args = process.argv.slice(2);
const mode = args[0];

function verifyIntegrity(excelData, maxCols, mdFilePath, sheetName) {
    const mdContent = fs.readFileSync(mdFilePath, 'utf-8');
    const mdLines = mdContent.split('\n');
    let mdTable = [];
    let inSheet = false;

    // Extract table for the specific sheet
    for (let line of mdLines) {
        if (line.trim().startsWith('## Sheet:')) {
            const currentSheet = line.replace('## Sheet:', '').trim();
            if (currentSheet === sheetName) {
                inSheet = true;
                continue;
            } else if (inSheet) {
                // We reached the next sheet
                break;
            }
        }

        if (inSheet && line.trim().startsWith('|')) {
            if (line.includes('---')) continue; // Skip separator
            const cells = line.split('|').slice(1, -1).map(c => c.trim());
            mdTable.push(cells);
        }
    }

    // Filter excel data same way we write it
    const filteredExcel = [];
    for (let i = 0; i < excelData.length; i++) {
        const row = excelData[i] || [];
        const rowData = [];
        for (let c = 0; c < maxCols; c++) {
            let cell = row[c];
            let val = (cell !== undefined && cell !== null) ? String(cell) : '';
            val = val.replace(/\|/g, '\\|').replace(/\n/g, '<br>');
            if (val.trim() === '') val = '&nbsp;';
            rowData.push(val);
        }
        
        // Skip completely empty data rows
        if (i > 0 && !rowData.some(v => v !== '&nbsp;')) continue;
        filteredExcel.push(rowData);
    }

    // Compare
    let diffFound = false;
    let diffLog = [];
    if (mdTable.length !== filteredExcel.length) {
        diffLog.push(`ROW COUNT MISMATCH: Excel has ${filteredExcel.length} rows, MD has ${mdTable.length} rows.`);
        diffFound = true;
    } else {
        for (let r = 0; r < filteredExcel.length; r++) {
            for (let c = 0; c < maxCols; c++) {
                if (mdTable[r][c] !== filteredExcel[r][c]) {
                    diffLog.push(`CELL MISMATCH (Row ${r+1}, Col ${c+1}): Excel='${filteredExcel[r][c]}', MD='${mdTable[r][c]}'`);
                    diffFound = true;
                }
            }
        }
    }

    if (diffFound) {
        console.error(`\x1b[31m[ERROR]\x1b[0m Integrity Check FAILED for Sheet '${sheetName}' in ${mdFilePath}`);
        diffLog.slice(0, 5).forEach(log => console.error('  -> ' + log));
        if (diffLog.length > 5) console.error(`  -> ... and ${diffLog.length - 5} more differences.`);
    } else {
        console.log(`\x1b[32m[OK]\x1b[0m Integrity Check PASSED for Sheet '${sheetName}'`);
    }
}

if (mode === '--directory') {
    const inputPath = args[1];
    const outputDir = args[2];
    if (!inputPath || !outputDir) {
        console.error('Usage: node excel_to_md.js --directory <inputDir|inputFile> <outputDir>');
        process.exit(1);
    }
    
    function processFile(filePath, relativePath) {
        const ext = path.extname(filePath).toLowerCase();
        if (ext !== '.xls' && ext !== '.xlsx') return;

        console.log(`\nProcessing ${filePath}...`);
        const workbook = xlsx.readFile(filePath);
        
        let content = '';
        content += `# File: ${path.basename(filePath)}\n\n`;

        const sheetsData = {};

        workbook.SheetNames.forEach(sheetName => {
            if (sheetName.toLowerCase() === 'summary') return;
            
            const sheet = workbook.Sheets[sheetName];
            const data = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false, dateNF: 'dd/mm/yyyy' });
            if (data.length === 0) return;

            let maxCols = 0;
            data.forEach(r => maxCols = Math.max(maxCols, r.length));
            if (maxCols === 0) return;

            sheetsData[sheetName] = { data, maxCols };
            content += `## Sheet: ${sheetName}\n\n`;

            for (let i = 0; i < data.length; i++) {
                const row = data[i] || [];
                const rowData = [];
                for (let c = 0; c < maxCols; c++) {
                    let cell = row[c];
                    let val = (cell !== undefined && cell !== null) ? String(cell) : '';
                    val = val.replace(/\|/g, '\\|').replace(/\n/g, '<br>');
                    if (val.trim() === '') val = '&nbsp;';
                    rowData.push(val);
                }
                
                if (i > 0 && !rowData.some(v => v !== '&nbsp;')) continue;

                content += '| ' + rowData.join(' | ') + ' |\n';
                if (i === 0) {
                    const sep = [];
                    for (let c = 0; c < maxCols; c++) sep.push('---');
                    content += '| ' + sep.join(' | ') + ' |\n';
                }
            }
            content += '\n';
        });

        const parsedPath = path.parse(relativePath);
        let outName = parsedPath.name;
        
        // Auto map names to standard rule names
        const lowerName = outName.toLowerCase();
        if (lowerName.includes('danh sách hóa đơn')) outName = '1.danh_sach_hoa_don';
        else if (lowerName.includes('sao kê')) outName = '2.sao_ke';
        else if (lowerName.includes('bảng cân đối số phát sinh')) outName = '0.bang_can_doi_phat_sinh';
        else if (lowerName.includes('bảng kê chứng từ')) outName = '1.bang_ke_chung_tu';
        else if (lowerName.includes('sổ tổng hợp phải thu')) outName = '2.so_tong_hop_phai_thu_khach_hang';

        const targetFilePath = path.join(outputDir, parsedPath.dir, outName + '.md');
        fs.mkdirSync(path.dirname(targetFilePath), { recursive: true });
        fs.writeFileSync(targetFilePath, content, 'utf-8');
        console.log(`Created ${targetFilePath}`);

        // Verify all sheets
        for (const [sheetName, payload] of Object.entries(sheetsData)) {
            verifyIntegrity(payload.data, payload.maxCols, targetFilePath, sheetName);
        }
    }

    function walkDir(dir, baseDir) {
        if (!fs.existsSync(dir)) return;
        fs.readdirSync(dir).forEach(f => {
            const fullPath = path.join(dir, f);
            if (fs.statSync(fullPath).isDirectory()) {
                walkDir(fullPath, baseDir);
            } else {
                const relativePath = path.relative(baseDir, fullPath);
                processFile(fullPath, relativePath);
            }
        });
    }

    if (fs.statSync(inputPath).isDirectory()) {
        walkDir(inputPath, inputPath);
    } else {
        processFile(inputPath, path.basename(inputPath));
    }
} 
else if (mode === '--split-sheets') {
    const inputFile = args[1];
    const srcDir = args[2] || path.join(__dirname, '..', '..', '..', 'src');
    const folderName = args[3];
    if (!inputFile || !srcDir || !folderName) {
        console.error('Usage: node excel_to_md.js --split-sheets <inputFile> <srcDir> <folderName>');
        process.exit(1);
    }
    
    console.log(`\nProcessing ${inputFile} in split-sheets mode...`);
    const workbook = xlsx.readFile(inputFile);

    workbook.SheetNames.forEach(sheetName => {
        if (sheetName.toLowerCase() === 'summary') return;
        
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false, dateNF: 'dd/mm/yyyy' });
        if (data.length === 0) return;

        let maxCols = 0;
        data.forEach(r => maxCols = Math.max(maxCols, r.length));
        if (maxCols === 0) return;

        let mdContent = `# File: ${path.basename(inputFile)}\n\n## Sheet: ${sheetName}\n\n`;
        for (let i = 0; i < data.length; i++) {
            const row = data[i] || [];
            const rowData = [];
            for (let c = 0; c < maxCols; c++) {
                let cell = row[c];
                let val = (cell !== undefined && cell !== null) ? String(cell) : '';
                val = val.replace(/\|/g, '\\|').replace(/\n/g, '<br>');
                if (val.trim() === '') val = '&nbsp;';
                rowData.push(val);
            }
            
            if (i > 0 && !rowData.some(v => v !== '&nbsp;')) continue;

            mdContent += '| ' + rowData.join(' | ') + ' |\n';
            if (i === 0) {
                const sep = [];
                for (let c = 0; c < maxCols; c++) sep.push('---');
                mdContent += '| ' + sep.join(' | ') + ' |\n';
            }
        }

        const mst = String(sheetName).trim();
        const outDir = path.join(srcDir, mst, 'test', folderName);
        fs.mkdirSync(outDir, { recursive: true });
        
        const outFilePath = path.join(outDir, '0.result.md');
        fs.writeFileSync(outFilePath, mdContent, 'utf-8');
        console.log(`Created ${outFilePath}`);

        // Verify
        verifyIntegrity(data, maxCols, outFilePath, sheetName);
    });
} else {
    console.error('Unknown mode. Use --directory or --split-sheets.');
}
