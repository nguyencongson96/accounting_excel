---
name: md_to_excel
description: Convert any Markdown table (.md) to Excel (.xlsx) format. Works with accounting result files, data tables, reports, or any structured Markdown table. Use this whenever the user wants to convert, export, or generate an Excel file from a markdown table — even if they say "chuyển sang excel", "export to excel", "tạo file excel", "save as xlsx", "generate xlsx", "convert table to excel", or "làm excel từ markdown". This is the reverse of the excel_to_md skill. Handles both specialized accounting templates (0.result.md) and arbitrary MD tables like bank statements, invoices, or any pipe-delimited data.
---

# Skill: Markdown Table to Excel Conversion

This skill converts any Markdown table (pipe-delimited) into an Excel `.xlsx` file. It supports two modes:

- **Mode 1 (General)**: Convert ANY Markdown table to Excel — just pass the file and the skill auto-detects column structure, data types, and formatting.
- **Mode 2 (Specialized)**: Convert `0.result.md` accounting files with the exact customer-confirmed column mapping for EZSOFT/3TSoft import, creating temporary conversion code only when needed.

## Mode 1: General Conversion (Any MD Table → Excel)

Use this when you have any Markdown file containing pipe-delimited tables — bank statements, invoices, reports, data exports, etc.

### Approach: Write a targeted Node.js script

For each conversion task, write a small Node.js script that:

1. **Reads the MD file** with `fs.readFileSync()`
2. **Finds tables** by scanning for pipe-delimited rows
3. **Parses headers** from the first `|---|` separated row after a header
4. **Detects column types** — try parsing each cell as number first, then date (DD/MM/YYYY), then fall back to text
5. **Writes to Excel** using the `xlsx` library

Here is a reusable template script. Create it as a temporary file in a permitted location and adapt the table detection and column mapping as needed:

```javascript
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const mdFile = process.argv[2];
const outputFile = process.argv[3] || mdFile.replace(/\.md$/, '.xlsx');

if (!mdFile || !fs.existsSync(mdFile)) {
    console.error('Usage: node script.js <input.md> [output.xlsx]');
    process.exit(1);
}

// 1. Read file
const content = fs.readFileSync(mdFile, 'utf-8');
const lines = content.split('\n');

// 2. Find ALL markdown tables in the file
const tables = findTables(lines);

if (tables.length === 0) {
    console.error('No markdown tables found in file.');
    process.exit(1);
}

console.log(`Found ${tables.length} table(s) in file.`);

// 3. Create workbook with one sheet per table
const wb = XLSX.utils.book_new();

tables.forEach((table, idx) => {
    const { headers, rows, startLine } = table;
    console.log(`Table ${idx + 1}: ${headers.length} columns, ${rows.length} data rows`);

    // Auto-detect column types and format cells
    const wsData = [headers, ...rows];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Auto-size columns
    const colWidths = headers.map((h, ci) => {
        const maxLen = Math.max(
            String(h).length,
            ...rows.map(r => String(r[ci] || '').length)
        );
        return { wch: Math.min(Math.max(maxLen + 2, 10), 60) };
    });
    ws['!cols'] = colWidths;

    const sheetName = `Sheet${idx + 1}`;
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
});

// 4. Write file
XLSX.writeFile(wb, outputFile);
console.log(`✅ Excel file written: ${outputFile}`);

// -- Helper: Find all MD tables in text --
function findTables(lines) {
    const tables = [];
    let i = 0;
    while (i < lines.length) {
        const line = lines[i].trim();
        // Detect table header row (starts with | and contains at least one more |)
        if (line.startsWith('|') && (line.match(/\|/g) || []).length >= 2) {
            const headerRow = i;
            // Next line should be separator (|:---|)
            if (i + 1 < lines.length && lines[i + 1].includes('|:---')) {
                const separatorRow = i + 1;
                const dataStart = i + 2;
                let dataEnd = dataStart;
                while (dataEnd < lines.length) {
                    const dl = lines[dataEnd].trim();
                    if (!dl.startsWith('|') || dl.startsWith('|:---')) break;
                    if (dl.startsWith('## ') && dataEnd > dataStart) break;
                    dataEnd++;
                }
                const headers = parseRow(lines[headerRow]);
                const rows = [];
                for (let r = dataStart; r < dataEnd; r++) {
                    const cells = parseRow(lines[r]);
                    if (cells.length > 0) rows.push(cells);
                }
                if (rows.length > 0) {
                    tables.push({ headers, rows, startLine: headerRow });
                }
                i = dataEnd;
                continue;
            }
        }
        i++;
    }
    return tables;
}

// -- Helper: Parse pipe-delimited row --
function parseRow(line) {
    let trimmed = line.replace(/^\|/, '').replace(/\|$/, '');
    const cells = [];
    let current = '';
    let inCode = false;
    for (let i = 0; i < trimmed.length; i++) {
        if (trimmed[i] === '`') { inCode = !inCode; continue; }
        if (trimmed[i] === '|' && !inCode) {
            cells.push(autoDetect(current.trim()));
            current = '';
        } else {
            current += trimmed[i];
        }
    }
    cells.push(autoDetect(current.trim()));
    return cells;
}

// -- Helper: Auto-detect cell type (number, date, or text) --
function autoDetect(val) {
    if (!val || val === '&nbsp;' || val === '') return '';
    // Try number (remove commas)
    const num = parseFloat(val.replace(/,/g, ''));
    if (!isNaN(num) && val.replace(/,/g, '').trim() === String(num)) return num;
    // Try date DD/MM/YYYY
    const dm = val.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (dm) {
        const d = new Date(parseInt(dm[3]), parseInt(dm[2]) - 1, parseInt(dm[1]));
        const excelSerial = (d.getTime() - new Date(1899, 11, 30).getTime()) / (24 * 60 * 60 * 1000);
        return Math.round(excelSerial);
    }
    return val;
}
```

### Sử dụng mẫu chuyển đổi

Mẫu trên là mã tham khảo, không phải file đã cài sẵn. Khi cần, tạo file tạm từ mẫu, điều chỉnh theo bảng nguồn, chạy file vừa tạo và dọn sau khi kiểm tra đầu ra; không gọi một đường dẫn tiện ích giả định tồn tại.

## Xuất kết quả hạch toán

- Đọc template của đúng khách hàng và file kết quả đã kiểm tra; mặc định ở <Quarter>/result/0.result.md, chấp nhận legacy khi đã xác định đúng bộ. Không tự đổi cấu trúc theo ví dụ chung.
- Giữ số cột, thứ tự, trường bắt buộc, tài khoản Nợ/Có tách riêng và kiểu dữ liệu đúng mẫu import đã xác nhận. Không thêm STT, tách/gộp tài khoản hoặc đổi mã chứng từ chỉ vì mẫu tham khảo. Chưa rõ mapping thì báo giới hạn trước khi gọi là sẵn sàng import.
- MST, mã đối tượng/vật tư, số tài khoản và mã có số 0 đầu phải giữ text. Ngày và tiền là kiểu dữ liệu Excel phù hợp; không tự chuyển mã số thành tiền, không đổi dấu hoặc làm tròn ngoài nguồn. Nội dung có dấu |, dòng mới và khoảng trắng cần xử lý đúng cấu trúc Markdown.
- Kiểm tra bảng không mất dòng/cột, số chứng từ, tài khoản, đối tượng, nguyên văn diễn giải, ngày và tổng tiền so với Markdown trước khi bàn giao. Nếu nguồn sai hoặc không rõ kiểu, báo rõ và không tự sửa nghiệp vụ để chuyển đổi chạy được.
- Chỉ ghi file đầu ra đúng phạm vi yêu cầu. Bản kết quả Excel nằm cùng bộ trong result/; không sửa Markdown nguồn hoặc workbook hóa đơn/sao kê. Với hàng loạt, chọn đúng nguồn đã xác minh và loại file xuất khỏi đầu vào để tránh xử lý lặp.

## Skill liên quan

- excel-to-md: chuyển đổi ngược Excel sang Markdown.
- check_result: kiểm tra kết quả hạch toán trước xuất.
- process_accounting: lập các dòng bút toán theo chứng từ và quy trình riêng.
