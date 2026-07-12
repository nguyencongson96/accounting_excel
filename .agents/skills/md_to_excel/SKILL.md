---
name: md_to_excel
description: Convert any Markdown table (.md) to Excel (.xlsx) format. Works with accounting result files, data tables, reports, or any structured Markdown table. Use this whenever the user wants to convert, export, or generate an Excel file from a markdown table — even if they say "chuyển sang excel", "export to excel", "tạo file excel", "save as xlsx", "generate xlsx", "convert table to excel", or "làm excel từ markdown". This is the reverse of the excel_to_md skill. Handles both specialized accounting templates (0.result.md) and arbitrary MD tables like bank statements, invoices, or any pipe-delimited data.
---

# Skill: Markdown Table to Excel Conversion

This skill converts any Markdown table (pipe-delimited) into an Excel `.xlsx` file. It supports two modes:

- **Mode 1 (General)**: Convert ANY Markdown table to Excel — just pass the file and the skill auto-detects column structure, data types, and formatting.
- **Mode 2 (Specialized)**: Convert `0.result.md` accounting files using the dedicated script with exact column mapping for EZSOFT/3TSoft import.

## Mode 1: General Conversion (Any MD Table → Excel)

Use this when you have any Markdown file containing pipe-delimited tables — bank statements, invoices, reports, data exports, etc.

### Approach: Write a targeted Node.js script

For each conversion task, write a small Node.js script that:

1. **Reads the MD file** with `fs.readFileSync()`
2. **Finds tables** by scanning for pipe-delimited rows
3. **Parses headers** from the first `|---|` separated row after a header
4. **Detects column types** — try parsing each cell as number first, then date (DD/MM/YYYY), then fall back to text
5. **Writes to Excel** using the `xlsx` library

Here is a reusable template script. Save it to `scripts/` and adapt the table detection and column mapping as needed:

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

### How to use the template

1. Save the template as `scripts/md_to_excel_generic.js`
2. Run: `node scripts/md_to_excel_generic.js <input.md> [output.xlsx]`
3. The script will:
   - Find ALL tables in the file (each becomes a separate sheet)
   - Auto-detect numbers, dates (`DD/MM/YYYY`), and text
   - Set appropriate column widths
   - Preserve `&nbsp;` as empty cells

### Customizing the template for specific files

If the auto-detection doesn't produce the right output (e.g., dates in a different format, or columns that need special handling), modify the template:

- **Custom column mapping**: Replace `headers` array to reorder/rename columns
- **Custom date format**: Change the regex in `autoDetect()` to match your date format
- **Column splitting**: Add logic to split a column (e.g., `/`-separated values) into two
- **Column filtering**: Skip unwanted columns by filtering the `headers` and `rows` arrays
- **Multi-table selection**: Modify table detection to only pick the Nth table

## Mode 2: Specialized Accounting Result Conversion

For converting `0.result.md` (accounting output) → Excel import file, use the dedicated script:

```bash
node scripts/md_to_excel_result.js "src/clients/<MST>/<Quarter>/0.result.md"
```

This script handles the exact EZSOFT/3TSoft template with:
- 14-column accounting table parsing (skips STT, splits TÀI KHOẢN NỢ/CÓ)
- Date → Excel serial number conversion (`dd/mm/yyyy`)
- Number formatting (`#,##0`)
- Proper column widths for accounting data
- Table boundary detection (stops at `## Tổng kết` heading)

### Batch conversion (all customers, one quarter)

```bash
for f in src/clients/*/2026.Q1/0.result.md; do
  node scripts/md_to_excel_result.js "$f"
done
```

## Common Conversion Patterns

### Pattern 1: Simple data table
```bash
node scripts/md_to_excel_generic.js "src/clients/<MST>/<Quarter>/1.danh_sach_hoa_don.md"
```
Converts any invoice/bank statement MD to Excel. Each table becomes one sheet.

### Pattern 2: Excel with specific column types
If a column contains numbers with leading zeros (like account codes `0110`), modify `autoDetect()` to preserve them as text:
```javascript
function autoDetect(val, colIndex) {
    if (colIndex === 3) return val; // Column 3: keep as text
    // ... rest of auto-detect
}
```

### Pattern 3: Handling large tables
For files with many rows (>10,000), process in chunks to avoid memory issues:
```javascript
const CHUNK_SIZE = 5000;
for (let start = 0; start < rows.length; start += CHUNK_SIZE) {
    const chunk = rows.slice(start, start + CHUNK_SIZE);
    // Append to worksheet
}
```

### Pattern 4: Converting multiple related files
To batch-convert all MD files in a directory:
```bash
for f in src/clients/*/2026.Q1/*.md; do
  if [[ "$f" != *"0.result"* ]]; then  # skip result files
    node scripts/md_to_excel_generic.js "$f"
  fi
done
```

## Key Techniques

### Finding tables in Markdown
A Markdown table is defined by:
1. A header row: `| Col1 | Col2 | Col3 |`
2. A separator row: `| --- | --- | --- |`
3. Data rows: `| val1 | val2 | val3 |`

The general script finds ALL such tables in a file. If a file has multiple tables (e.g., a bank statement with multiple account sheets), each becomes a separate Excel sheet.

### Auto-detecting cell types
- **Numbers**: If `parseFloat()` succeeds and the string representation matches, treat as number
- **Dates (DD/MM/YYYY)**: Convert to Excel serial date number
- **Text**: Everything else stays as-is
- **Empty/&nbsp;**: Return empty string

### Handling date formats in Excel
Excel stores dates as serial numbers. The formula is:
```
serial = (jsDate - new Date(1899, 11, 30)) / (24 * 60 * 60 * 1000)
```
Apply format `dd/mm/yyyy` by setting `cell.z = 'dd/mm/yyyy'`.

### Preserving special characters
- Pipe `|` inside code blocks (backtick-escaped) is handled correctly
- Line breaks within cells should be converted to `<br>` or spaces before export
- Leading/trailing whitespace in headers and values is preserved

## File Locations

| File | Purpose |
|:---|:---|
| `scripts/md_to_excel_result.js` | Specialized: `0.result.md` → Excel (EZSOFT template) |
| `scripts/md_to_excel_generic.js` | General: any MD table → Excel (create from template above) |

## Related Skills

- **`excel_to_md`**: Reverse conversion (Excel → Markdown). Use to bring raw accounting data into the system.
- **`check_result`**: Validates `0.result.md` before converting to Excel.
- **`process_accounting`**: Generates the `0.result.md` that this skill converts.
