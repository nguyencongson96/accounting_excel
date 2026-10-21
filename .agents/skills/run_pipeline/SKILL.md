---
name: run_pipeline
description: Run the full accounting pipeline (verify → convert excel to md → reason through each accounting entry → validate) for a specific customer and quarter. Use this whenever the user wants to "run", "execute", "process", or "do" accounting for a customer — even if they say "chạy pipeline", "xử lý dữ liệu", "run accounting for MST X", or "process Q1". The agent determines each entry from customer-specific data and rules, without an accounting generation script.
---

# Instructions for run_pipeline

This is the Master Orchestration Skill. When triggered to run the pipeline for a specific customer (MST) and Quarter, you MUST autonomously execute the full workflow in order without needing the user to prompt for each step.

## Execution Method: Agent Reasoning for Accounting

- Phần hạch toán do Agent đọc dữ liệu và xác định từng bút toán theo quy trình riêng của khách hàng. Không chạy `scripts/process_accounting.js`, `scripts/process.py` hoặc script hạch toán khác, kể cả chế độ dry-run, để sinh hay quyết định bút toán.
- Không viết script thay thế để tự phân loại nghiệp vụ, chọn tài khoản/đối tượng, ghép hóa đơn với thanh toán hoặc sinh bút toán định kỳ. Một script dùng chung không bao quát được các đặc thù của từng khách hàng.
- Có thể dùng công cụ/script cho thao tác cơ học: chuyển đổi Excel, đọc dữ liệu, tính tổng, kiểm tra định dạng, ghi các dòng đã được Agent quyết định và xuất Excel. Các công cụ này không được tự quyết định nghiệp vụ kế toán.
- Không lấy đầu ra script hạch toán rồi sửa một số dòng để thay cho việc xem xét từng nghiệp vụ. Kết quả lịch sử chỉ là tài liệu tham khảo, cần đối chiếu chứng từ trước khi áp dụng.

## Result Directory

- Create `src/clients/<MST>/<Quarter>/result/` for all generated result artifacts: `0.result.md`, `0.check_result.md`, new-counterparty lists, debt reconciliation, source references, payment allocation tables, result-specific supplements and exported result workbooks. Keep source invoices, bank statements, converted source Markdown and `last_quarter_data/` in their source locations.
- Keep only the latest result and companion reports under canonical filenames without version suffixes in `result/`. On reruns or corrections, overwrite the existing generated artifacts; do not create numbered versions. This rule takes precedence over version-preservation instructions in `process_accounting` and `check_result`.
- If legacy result artifacts exist in the quarter root or as numbered versions, identify the latest coherent result/report set, save it under canonical filenames in `result/`, and update companion and tracking links. Verify the retained files before deleting superseded generated artifacts. Never delete or overwrite source data, customer docs, or prior-period inputs. Do not use recursive cleanup; remove only identified superseded result artifacts within the target customer/quarter.
- When following `process_accounting` or `check_result`, use this output directory even if their examples place outputs in the quarter root. Validate the exact file just generated in `result/`.
- Resolve source references from the report location: quarter sources use `../`, customer docs use `../../docs/`, and prior-quarter sources use `../../<PriorQuarter>/`. Companion files in `result/` use their filenames directly. Preserve source line numbers.

## Step 1: Verify Data
Execute the logic from `verify_data` skill:
- Scan `src/clients/<MST>/<Quarter>/` and `docs/` for mandatory files.
- Treat `result/` as generated output, not input data; its files do not satisfy missing-source checks.
- **Decision tree:**
  - ✅ All `.md` files present → Go to Step 3 directly.
  - ⚠️ Some `.md` files missing but `.xls`/`.xlsx` files exist → Proceed to Step 2.
  - ❌ Files completely missing (no `.md` AND no Excel) → STOP and alert: *"Thiếu dữ liệu hoàn toàn cho MST <MST> kỳ <Quarter>. Vui lòng cung cấp file dữ liệu đầu vào."*

## Step 2: Convert Excel to MD
Only execute if unconverted Excel files were found in Step 1:
- Run the `excel_to_md` skill's script on unconverted source workbooks, saving Markdown beside each source. The directory command `node .agents/skills/excel_to_md/scripts/excel_to_md.js --directory "src/clients/<MST>/<Quarter>" "src/clients/<MST>/<Quarter>"` may be used only when it cannot include generated workbooks in `result/`; otherwise convert individual source files or source subdirectories.
- Exclude `result/` from conversion and source discovery so exported result workbooks cannot become accounting inputs or overwrite generated Markdown.
- Also check `src/clients/<MST>/docs/` for any Excel files that need conversion.
- After conversion, re-verify that expected `.md` files now exist. If still missing, stop and tell user which files couldn't be generated.

## Step 3: Process Accounting
Read and follow the `process_accounting` skill directly; do not invoke an accounting generation script:
- Read ALL 4 docs files (`0.quy_trinh_tao_result.md`, `1.template_output.md`, `2.danh_muc_tai_khoan.md`, `3.danh_muc_doi_tuong.md`).
- Read all source data and prior-period data, in batches if necessary, until every source transaction has been reviewed.
- Before matching payments, follow `process_accounting/references/cong_no_dau_ky.md`: establish opening debts by counterparty at the correct cutoff, reconcile them with historical journals and control balances, and include unpaid opening debts in receipt/payment review. Save the current `0.doi_chieu_cong_no.md` alongside the result; missing opening debt evidence is unresolved, not zero.
- Reconstruct the individual unpaid invoices making up each counterparty's opening balance, including prior adjustments and partial settlements. Match receipts to those invoices using payment references and remaining amounts; a counterparty total is not a single invoice. Report invoice allocation separately from counterparty-level settlement, and keep ambiguous allocations unresolved.
- For each transaction, determine its business nature, accounting period, debit/credit accounts, entity, amount and payment relationship from source evidence and customer-specific rules. Follow the per-entry review procedure in `process_accounting`.
- **Cash receipts from customers (PT, debit 1111/credit 131):** Create this entry only when clear, reliable documentation confirms that cash was actually received and supports the amount and date. An invoice, receivable balance, expected payment, or absence of a bank deposit is not proof of a cash receipt. Without clear evidence, do not create PT 1111/131 or reduce receivables; flag the payment as unresolved and identify the evidence needed. If the source shows a bank payment, account for the actual bank transaction and do not add a PT entry.
- For every result row derived from an outbound (Bán ra) invoice, preserve the invoice's original description verbatim in `DIỄN GIẢI` when it is at most 200 characters. Change it only if it exceeds 200 characters; then make the smallest edit needed to fit the limit while retaining the transaction meaning and distinguishing details, without adding unsupported wording. This rule takes precedence over any customer-specific instruction to rewrite that description; separate adjustment entries still follow their source evidence and customer-specific rules.
- **Replacement invoices:** Apply the `process_accounting` rule for replaced invoices. When source evidence confirms an original invoice was replaced, do not book the original invoice; assess and book the replacement only once under the customer's rules, avoiding duplicate recognition. If the replacement relationship or status is unclear, leave the related invoice transaction unresolved and identify the missing evidence instead of guessing. If the original was booked in a prior period, follow the customer's documented correction/reversal procedure and supporting evidence.
- Track the source reference and payment allocation for each entry so validation can identify omissions, duplicate recognition and incorrect settlements. Flag unresolved transactions explicitly instead of guessing.
- Generate `result/0.result.md`, overwriting the existing result when present.
- Generate or overwrite the current `result/0.danh_muc_doi_tuong.md` if any new MSTs are detected. Save all supporting reports and result-specific supplements in `result/` as well.
- Display a summary preview to the user with:
  - Total rows generated
  - Number of PK (Phiếu Kế Toán), BN (Báo Nợ), BC (Báo Có), PC (Phiếu Chi) entries
  - Number of PT (Phiếu Thu) entries, if applicable
  - Total debit/credit amounts
  - Number of new MSTs detected (if any)
  - First 10 rows as a Markdown table

## Step 4: Validate Results (Automatic)
After generating the result, **automatically** execute the `check_result` skill — do NOT ask the user for permission. This is a mandatory step in the pipeline.

Execute the full `check_result` logic to perform a comprehensive audit of `result/0.result.md`, saving or overwriting the current `result/0.check_result.md` report, including:
- Structure validation (columns, format)
- Field-level checks (valid codes, date formats, amount consistency)
- Cross-reference with source invoices and bank statements
- Số chứng từ continuity check
- Debit/credit balance verification
- New MST detection audit
- Opening debt reconciliation by counterparty, allocation of receipts/payments to prior/current-period debt, and closing debt roll-forward. Verify the current result and debt-reconciliation reports together.

Present the full check_result report to the user. If any ❌ **ERRORS** are found, record the failed validation in tracking using Step 5 before stopping and informing the user: *"Phát hiện lỗi trong file kết quả. Vui lòng kiểm tra lại dữ liệu đầu vào hoặc quy trình xử lý."* Do NOT proceed with accounting completion until the user confirms they've addressed the errors.

If only ⚠️ **WARNINGS** are found, proceed but flag them to the user.

## Step 5: Update Quarter Tracking (Automatic)

- After validation, automatically update `docs/tracking/<Quarter>.md` without asking the user to prompt or approve this step. If processing stops earlier, record the available evidence and reason for stopping before reporting to the user.
- Read the tracking file and its status conventions first. Find the customer by exact MST; update only that customer's row and notes, preserving other customers and any user-confirmed backup information. If the tracking file or customer row is missing, create the file or add the row using the existing tracking format and verified customer information; do not invent facts about other customers.
- Check the actual quarter folder, invoice sources, bank sources, `last_quarter_data/` and current result. Detect the nonempty canonical `result/0.result.md` after consolidating any legacy artifacts. Link to the retained/current result and matching check report using paths relative to `docs/tracking/` (for example, `../../src/clients/<MST>/<Quarter>/result/0.result.md`).
- Follow the tracking file's definition of `Hoàn tất`. If it means a nonempty result exists, record that status while stating validation errors, warnings or unfinished reconciliation separately in the customer's notes. Do not represent unresolved work as a fully passed pipeline. If no nonempty result exists, use `Chưa có kết quả` and note the stopping reason; if processing stops before a replacement is ready, retain the existing result and report the failed attempt in tracking; do not create a separate numbered version.
- Add or update the customer's result note with the current result, row count, debit/credit totals, validation outcome and material outstanding issues from the matching report. Replace stale notes for that customer rather than appending duplicates.
- Update the last-updated date and recompute overview counts from all table rows according to the tracking conventions, including completion, pending results, input availability, prior-period data and confirmed backups. Verify the counts agree with the table and the result/report links resolve.

## Pipeline Completion
After Step 5 (tracking update) completes, summarize what was done:
- ✅ Files converted: X Excel files → Y Markdown files
- ✅ Files processed: Z invoices, W bank transactions
- Accounting method: Agent reviewed and determined each entry from customer-specific rules and source evidence.
- ✅ Output: `result/0.result.md` with R rows
- ✅ New MSTs: S new vendors/customers written to `result/0.danh_muc_doi_tuong.md`
- ✅ Validate: check_result passed (X errors, Y warnings)
- Tracking: `docs/tracking/<Quarter>.md` updated with the customer's status, result/report links and outstanding issues. State the actual validation outcome rather than reporting a pass when errors remain.
- Report completion only if validation has passed and no transaction remains unresolved; otherwise state the outstanding issues and which source transactions they affect.
