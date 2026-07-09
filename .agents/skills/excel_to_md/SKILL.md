---
name: excel-to-md
description: Extracts and transforms Excel files (.xls, .xlsx) to nicely formatted Markdown tables without data loss. Use this skill whenever the user mentions converting Excel files, needs to read spreadsheet data as markdown, or has .xls/.xlsx files that need to be processed — even if they say "convert file", "chuyển đổi excel", "read this spreadsheet", or mention any file with .xlsx extension. This skill handles date formatting, merged cells, and preserves all data integrity with auto-verification.
---

# Skill: Excel to Markdown Transformation

This skill provides a highly robust way to convert `.xls` or `.xlsx` files into correctly formatted `.md` (Markdown) tables.

## Problem it solves
When using standard `sheet_to_json` to parse Excel:
1. If headers are mixed or pushed down, parsing `data[0]` as the column reference causes data truncation (e.g., losing all columns if row 1 only has 1 cell).
2. Sparse arrays and empty cells break the structure of Markdown tables if not properly filled with `&nbsp;`.
3. Dates are often parsed as raw Excel numbers (e.g., 46027) instead of human-readable formats.

## How to Use

A pre-written Node.js script is provided in `scripts/excel_to_md.js`.

### Mode 1: Directory to Directory
Converts an entire directory (or single file) of Excel files into Markdown files, preserving folder structure.

**Command:**
```bash
node .agents/skills/excel_to_md/scripts/excel_to_md.js --directory <inputDir_or_File> <outputDir>
```

### Mode 2: Split Sheets into Customer Folders
Reads a master Excel file where each Sheet is a Customer Tax Code (MST), and writes `0.result.md` into `src/<MST>/test/<folderName>`.

**Command:**
```bash
node .agents/skills/excel_to_md/scripts/excel_to_md.js --split-sheets <inputFile> <srcDir> <folderName>
```
*Example:* `node .agents/skills/excel_to_md/scripts/excel_to_md.js "Nhập liệu HKD 2026.Q1.xlsx" "src" "2026.Q1"`

## Key Logic Inside
- Computes `maxCols` based on the maximum length of any row in the entire sheet to ensure no columns are skipped.
- Uses `raw: false, dateNF: 'dd/mm/yyyy'` so numbers formatted as dates are exported nicely (e.g., '01/05/2026').
- Uses `&nbsp;` to fill any empty cells.
- Escapes `|` and `\n` to `<br>` to maintain Markdown table integrity.
- **Auto-Integrity Verification (Compare):** Immediately after writing the Markdown file, the script re-reads the `.md` file, parses the Markdown tables, and does a strict 1:1 cell comparison with the in-memory Excel data. If there is *any* mismatch in row counts or cell values, it logs an `[ERROR]` with exact discrepancy details. If fully matched, it logs `[OK]`.
