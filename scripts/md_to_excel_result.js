const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const mdFile = process.argv[2];
if (!mdFile || !fs.existsSync(mdFile)) {
    console.error('Usage: node scripts/md_to_excel_result.js <input.md> [output.xlsx]');
    process.exit(1);
}

const outputFile = process.argv[3] || mdFile.replace(/\.md$/, '.xlsx');

// 1. Read file
const content = fs.readFileSync(mdFile, 'utf-8');
const lines = content.split('\n');

// 2. Find the accounting table (starts with | MÃ CHỨNG TỪ | NGÀY GHI SỔ |)
let tableStart = -1;
let tableEnd = -1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('| MÃ CHỨNG TỪ |') && line.includes('NGÀY GHI SỔ')) {
        tableStart = i;
        // Header is at i, separator at i+1, data starts at i+2
        break;
    }
}

if (tableStart === -1) {
    console.error('No accounting table found in file.');
    process.exit(1);
}

// Find end of table
const dataStart = tableStart + 2;
tableEnd = dataStart;
while (tableEnd < lines.length) {
    const dl = lines[tableEnd].trim();
    if (!dl.startsWith('|') || dl.startsWith('## ')) break;
    tableEnd++;
}

// 3. Parse headers (first row after separator is the data header row)
const headerLine = lines[tableStart];
const headers = parseRow(headerLine);
console.log('Headers:', headers);

// 4. Parse data rows
const rows = [];
for (let r = dataStart; r < tableEnd; r++) {
    const cells = parseRow(lines[r]);
    if (cells.length > 0 && cells.some(c => c !== '' && c !== null && c !== undefined)) {
        rows.push(cells);
    }
}

console.log(`Found ${rows.length} data rows, ${headers.length} columns`);

// 5. Create workbook
const wb = XLSX.utils.book_new();

// Map headers to a cleaner format - keep original headers
const wsData = [headers, ...rows];
const ws = XLSX.utils.aoa_to_sheet(wsData);

// Auto-size columns with min 10, max 60 width
const colWidths = headers.map((h, ci) => {
    const maxLen = Math.max(
        String(h || '').length,
        ...rows.map(r => String(r[ci] || '').length)
    );
    return { wch: Math.min(Math.max(maxLen + 2, 12), 60) };
});
ws['!cols'] = colWidths;

const sheetName = 'Kết quả kế toán';
XLSX.utils.book_append_sheet(wb, ws, sheetName);

// 6. Write file
XLSX.writeFile(wb, outputFile);
console.log(`✅ Excel file written: ${outputFile}`);

// -- Helper: Parse pipe-delimited row --
function parseRow(line) {
    // Remove leading/trailing pipes, then split
    let trimmed = line.replace(/^\|/, '').replace(/\|$/, '');
    const cells = [];
    let current = '';
    let inCode = false;
    for (let i = 0; i < trimmed.length; i++) {
        if (trimmed[i] === '`') { inCode = !inCode; continue; }
        if (trimmed[i] === '|' && !inCode) {
            cells.push(convertValue(current.trim()));
            current = '';
        } else {
            current += trimmed[i];
        }
    }
    cells.push(convertValue(current.trim()));
    return cells;
}

// -- Helper: Convert value to appropriate type --
function convertValue(val) {
    if (!val || val === '&nbsp;' || val === '') return '';
    
    // Try number (remove commas)
    const clean = val.replace(/,/g, '');
    const num = parseFloat(clean);
    if (!isNaN(num) && clean.trim() !== '' && !isNaN(Number(clean))) {
        // Only convert if the entire string is a number
        if (String(num) === clean || /^\d+(\.\d+)?$/.test(clean)) {
            return num;
        }
    }
    
    // Try date DD/MM/YYYY
    const dm = val.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (dm) {
        const d = new Date(parseInt(dm[3]), parseInt(dm[2]) - 1, parseInt(dm[1]));
        const excelSerial = Math.round((d.getTime() - new Date(1899, 11, 30).getTime()) / (24 * 60 * 60 * 1000));
        return excelSerial;
    }
    
    return val;
}
