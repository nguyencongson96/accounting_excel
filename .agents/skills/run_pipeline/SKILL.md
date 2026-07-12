---
name: run_pipeline
description: Run the full automated pipeline (verify → convert excel to md → process accounting) for a specific customer and quarter. Use this whenever the user wants to "run", "execute", "process", or "do" accounting for a customer — even if they say "chạy pipeline", "xử lý dữ liệu", "run accounting for MST X", or "process Q1". This is the one-click end-to-end automation entry point.
---

# Instructions for run_pipeline

This is the Master Orchestration Skill. When triggered to run the pipeline for a specific customer (MST) and Quarter, you MUST autonomously execute the full workflow in order without needing the user to prompt for each step.

## Step 1: Verify Data
Execute the logic from `verify_data` skill:
- Scan `src/clients/<MST>/<Quarter>/` and `docs/` for mandatory files.
- **Decision tree:**
  - ✅ All `.md` files present → Go to Step 3 directly.
  - ⚠️ Some `.md` files missing but `.xls`/`.xlsx` files exist → Proceed to Step 2.
  - ❌ Files completely missing (no `.md` AND no Excel) → STOP and alert: *"Thiếu dữ liệu hoàn toàn cho MST <MST> kỳ <Quarter>. Vui lòng cung cấp file dữ liệu đầu vào."*

## Step 2: Convert Excel to MD
Only execute if unconverted Excel files were found in Step 1:
- Run the `excel_to_md` skill's script: `node .agents/skills/excel_to_md/scripts/excel_to_md.js --directory "src/clients/<MST>/<Quarter>" "src/clients/<MST>/<Quarter>"`
- This converts ALL `.xls`/`.xlsx` files in the quarter folder to `.md` in-place.
- Also check `src/clients/<MST>/docs/` for any Excel files that need conversion.
- After conversion, re-verify that expected `.md` files now exist. If still missing, stop and tell user which files couldn't be generated.

## Step 3: Process Accounting
Execute the logic from `process_accounting` skill:
- Read ALL 4 docs files (`0.quy_trinh_tao_result.md`, `1.template_output.md`, `2.danh_muc_tai_khoan.md`, `3.danh_muc_doi_tuong.md`).
- Process all input data from the quarter folder and `last_quarter_data/`.
- Generate `0.result.md` (or `0.result_N.md` if result already exists).
- Generate `0.danh_muc_doi_tuong.md` if any new MSTs are detected.
- Display a summary preview to the user with:
  - Total rows generated
  - Number of PK (Phiếu Kế Toán), BN (Báo Nợ), BC (Báo Có), PC (Phiếu Chi) entries
  - Total debit/credit amounts
  - Number of new MSTs detected (if any)
  - First 10 rows as a Markdown table

## Step 4: Validate Results (Automatic)
After generating the result, **automatically** execute the `check_result` skill — do NOT ask the user for permission. This is a mandatory step in the pipeline.

Execute the full `check_result` logic to perform a comprehensive audit of `0.result.md` (or `0.result_N.md`) including:
- Structure validation (columns, format)
- Field-level checks (valid codes, date formats, amount consistency)
- Cross-reference with source invoices and bank statements
- Số chứng từ continuity check
- Debit/credit balance verification
- New MST detection audit

Present the full check_result report to the user. If any ❌ **ERRORS** are found, stop and inform the user: *"Phát hiện lỗi trong file kết quả. Vui lòng kiểm tra lại dữ liệu đầu vào hoặc quy trình xử lý."* Do NOT proceed until the user confirms they've addressed the errors.

If only ⚠️ **WARNINGS** are found, proceed but flag them to the user.

## Pipeline Completion
After Step 4 (check_result) completes, summarize what was done:
- ✅ Files converted: X Excel files → Y Markdown files
- ✅ Files processed: Z invoices, W bank transactions
- ✅ Output: `0.result[_N].md` with R rows
- ✅ New MSTs: S new vendors/customers written to `0.danh_muc_doi_tuong.md`
- ✅ Validate: check_result passed (X errors, Y warnings)
- ✅ **All steps completed successfully.**
