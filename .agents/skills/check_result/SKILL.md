---
name: check_result
description: Validate and audit the generated 0.result.md file after running process_accounting. Use this whenever the user wants to check, validate, audit, verify, or review results — even if they say "kiểm tra kết quả", "check result", "validate output", "audit data", "review accounting", or "is the result correct?". This is the quality assurance gate after every accounting run.
---

# Instructions for check_result

This skill performs a comprehensive audit of the `0.result.md` file produced by `process_accounting`. Run this immediately after every processing run to catch errors before the data goes to the accountant.

## Input Requirements

- `src/clients/<MST>/<Quarter>/0.result.md` (or `0.result_N.md`) — the file to validate
- `src/clients/<MST>/<Quarter>/1.danh_sach_hoa_don.md` — invoice source data
- `src/clients/<MST>/<Quarter>/2.sao_ke.md` — bank statement source data
- `src/clients/<MST>/docs/2.danh_muc_tai_khoan.md` — chart of accounts
- `src/clients/<MST>/docs/3.danh_muc_doi_tuong.md` — vendor/customer directory
- `src/clients/<MST>/<Quarter>/0.danh_muc_doi_tuong.md` — newly detected MSTs (if exists)
- `src/clients/<MST>/<Quarter>/last_quarter_data/` — prior quarter data for continuity checks

## Validation Steps

### Phase 1: Structure Validation

Parse the Markdown table from `0.result.md` and verify:

1. **Column Count & Order**: Must have exactly 14 columns in this order:
   `STT | MÃ CHỨNG TỪ | NGÀY GHI SỔ | SỐ CHỨNG TỪ | BỘ PHẬN | HỢP ĐỒNG | MÃ SẢN PHẨM CÔNG TRÌNH | MÃ ĐỐI TƯỢNG | DIỄN GIẢI | TÀI KHOẢN (NỢ/CÓ) | MÃ TIỀN TỆ | TỶ GIÁ | NGUYÊN TỆ | THÀNH TIỀN`

2. **No Empty Rows**: No completely blank rows should exist between data rows.

### Phase 2: Field-Level Validation (every row, every cell)

For each data row, check:

| # | Check | Rule | Severity |
|:---:|:---|:---|:---:|
| 2.1 | `MÃ CHỨNG TỪ` | Must be one of: `PK`, `BN`, `BC`, `PC` | ❌ ERROR |
| 2.2 | `NGÀY GHI SỔ` | Must match `DD/MM/YYYY` format. Must fall within the quarter's date range. | ❌ ERROR |
| 2.3 | `SỐ CHỨNG TỪ` | Must be a positive integer. No duplicates across all rows. Must be sequential (no gaps > 1 unless justified). | ❌ ERROR |
| 2.4 | `MÃ ĐỐI TƯỢNG` | Must exist in either `docs/3.danh_muc_doi_tuong.md` OR `0.danh_muc_doi_tuong.md` (build a combined lookup set). | ❌ ERROR |
| 2.5 | `DIỄN GIẢI` | Must NOT be empty. Must NOT contain `\n` or `<br>` (should already be collapsed). Must be ≤ 200 characters. | ⚠️ WARN |
| 2.6 | `TÀI KHOẢN (NỢ/CÓ)` | Must match pattern `XXXX / XXXX` (account codes separated by ` / `). Both debit and credit account codes must exist in `docs/2.danh_muc_tai_khoan.md`. | ❌ ERROR |
| 2.7 | `MÃ TIỀN TỆ` | Must be `VND` for all rows. | ⚠️ WARN |
| 2.8 | `TỶ GIÁ` | Must be `1` for all rows (since currency is VND). | ⚠️ WARN |
| 2.9 | `NGUYÊN TỆ` | Must be a positive number. Must equal `THÀNH TIỀN` (since VND, tỷ giá = 1). | ❌ ERROR |
| 2.10 | `THÀNH TIỀN` | Must be a positive number (> 0). | ❌ ERROR |

### Phase 3: Accounting Logic Validation

3.1 **Invoice Coverage (Mua vào → PK)**: 
   - For every "Mua vào" invoice in `1.danh_sach_hoa_don.md`, there must be a corresponding `PK` row in the result where:
     - `MÃ ĐỐI TƯỢNG` matches the invoice's `Mã số thuế`
     - `THÀNH TIỀN` matches the invoice's `Sau thuế` (total after tax)
     - `NGÀY GHI SỔ` matches the invoice's `Thời gian lập`
   - Report: count of matched vs unmatched invoices.

3.2 **Invoice Coverage (Bán ra → PK)**:
   - For every "Bán ra" invoice, there must be:
     - A revenue entry: `131 / 5118` with `THÀNH TIỀN` = `Trước thuế`
     - If `Giảm trước thuế` > 0: an adjustment entry `333821 / 131` with `THÀNH TIỀN` = `Giảm trước thuế`
   - Report matched vs unmatched.

3.3 **Bank Statement Coverage**:
   - For every transaction in `2.sao_ke.md`:
     - Positive amounts (tiền vào) → should have a `BC` row
     - Negative amounts (tiền ra) → should have a `BN` row
   - The `THÀNH TIỀN` should match `|Số tiền|` from the bank statement.
   - Report: count of matched vs unmatched bank transactions.

3.4 **Debit/Credit Balance**:
   - For each row, the debit side (first account code) and credit side (second account code) represent opposite sides.
   - Sum all amounts grouped by debit account vs credit account — they should balance within the quarter.

3.5 **SỐ CHỨNG TỪ Continuity**:
   - Read `last_quarter_data/1.bang_ke_chung_tu.md` (or scan all `.md` files in `last_quarter_data/`).
   - Find the maximum `SỐ CHỨNG TỪ` from prior periods.
   - The first `SỐ CHỨNG TỪ` in the current result must be `MAX_PRIOR + 1`.
   - All subsequent numbers must increment by exactly 1.

3.6 **Special Pattern Checks**:
   - **Insurance payments**: If `MÃ ĐỐI TƯỢNG` = `0000000003`, the amount should be a multiple of `690,300`.
   - **Internal transfers**: If `DIỄN GIẢI` contains "Rút tiền" or "nộp tiền", `MÃ ĐỐI TƯỢNG` should be the company's own MST.
   - **TikTok revenue**: If `MÃ ĐỐI TƯỢNG` = `0000000001`, should use `131 / 5118` or `333821 / 131` for adjustments.
   - **Refund entries**: If `DIỄN GIẢI` contains "chuyển nhầm" or "hoàn", should have matching BC+BN pair with `0000000002`.

3.7 **Bank Statement Running Balance Validation**:
   - **Purpose**: Verify that the running balance (số dư) column in `2.sao_ke.md` is mathematically consistent — every transaction's stated balance must equal the previous balance plus the current transaction's net amount. This catches missing transactions, incorrect amounts, or data entry errors in the source bank statement.
   
   - **Step 1 — Detect balance column**: Parse the header row of `2.sao_ke.md`. Search each column header (case-insensitive, ignoring `<br>` HTML tags) for the keywords `số dư` or `balance`. This handles ALL known variants:
     - `Số dư`, `Số dư (VND)`, `Số dư (Balance)`
     - `Số dư cuối`, `Số dư cuối (VND)`, `Số dư cuối/Running balance`
     - `Số dư sau giao dịch (VND)`, `Số dư sau GD (VND)`, `Số dư sau (VND)`
     - `Số dư hiện tại (VND)`
     - `Số dư/Balance`
   
   - **Step 2 — Detect amount column(s)**: Determine how the transaction amount is represented:
     - **Case A — Separate Debit/Credit columns**: If column headers contain `nợ`/`debit` (debit) and `có`/`credit` (credit), the net amount = `credit_value - debit_value`. Empty cells are treated as 0.
     - **Case B — Single signed amount column**: If no separate debit/credit columns exist, look for a column with `số tiền`, `tiền`, `giao dịch`, or `amount` in its header. The amount may already be signed (negative = outflow/debit, positive = inflow/credit).
   
   - **Step 3 — Parse numeric values**:
     - Remove thousands separators (commas and/or dots depending on format — Vietnamese format uses `.` as thousands separator and `,` as decimal, but many files use comma as thousands separator).
     - Convert cleaned strings to numbers.
     - Handle empty/blank cells as `0`.
   
   - **Step 4 — Verify running balance**:
     - Skip row 1 (no prior balance to compare against).
     - For each row `i` from 2 to N:
       ```
       expected_balance[i] = stated_balance[i-1] + net_amount[i]
       ```
       Where:
       - `stated_balance[i]` = the balance column value at row i
       - `stated_balance[i-1]` = the balance column value at row i-1
       - `net_amount[i]` = 
         - In debit/credit format: `credit[i] - debit[i]`
         - In single signed amount format: `amount[i]` (already signed)
     - Allow a tolerance of ±1 VND for rounding differences.
     - **Important:** The balance flows continuously even if the `STT` column resets mid-quarter. Always use the previous row's stated balance, NOT the previous STT's row.
   
   - **Step 5 — Report findings**:
     - If **no balance column** is detected: `ℹ️ Skipped — no balance column found in bank statement`
     - If balance column **exists and all consistent**: `✅ All N-1 running balances verified (N rows checked)`
     - If **discrepancies found**: list each discrepancy with:
       - Row number
       - Transaction date/description (for context)
       - Stated balance
       - Expected balance
       - Difference
       - Transaction amount

### Phase 4: New MST Detection Check

4.1 If `0.danh_muc_doi_tuong.md` exists in the quarter folder:
   - Verify EVERY `MÃ ĐỐI TƯỢNG` in `0.result.md` that is NOT in `docs/3.danh_muc_doi_tuong.md` IS listed in `0.danh_muc_doi_tuong.md`.
   - Verify no MST listed in `0.danh_muc_doi_tuong.md` is orphaned (not used in any result row).
   
4.2 If `0.danh_muc_doi_tuong.md` does NOT exist:
   - List all MSTs in `0.result.md` that are missing from `docs/3.danh_muc_doi_tuong.md`.
   - Flag as ⚠️ WARN: "These MSTs are not in the directory — 0.danh_muc_doi_tuong.md should have been generated."

## Output Report Format

Present results in a structured Markdown report:

```markdown
# Kết quả Kiểm tra 0.result.md

**Khách hàng:** <MST>
**Kỳ:** <Quarter>
**File kiểm tra:** <filename>
**Thời gian:** <timestamp>

## Tổng quan
| Chỉ tiêu | Giá trị |
|:---|:---|
| Tổng số dòng | X |
| PK (Phiếu kế toán) | X |
| BN (Báo nợ) | X |
| BC (Báo có) | X |
| PC (Phiếu chi) | X |
| Tổng Nợ | X |
| Tổng Có | X |

## Phase 1: Structure ✅/❌
- Column count: ✅ (14 columns)
- Column order: ✅
- No empty rows: ✅

## Phase 2: Field Validation
| # | Check | Status | Details |
|:---:|:---|:---:|:---|
| 2.1 | Mã chứng từ | ✅ | All valid |
| 2.2 | Ngày ghi sổ | ❌ | Row 15: invalid date "32/05/2026" |
| ... | ... | ... | ... |

**Error count:** X | **Warning count:** Y

## Phase 3: Accounting Logic
| # | Check | Status | Details |
|:---:|:---|:---:|:---|
| 3.1 | Invoice coverage (Mua vào) | ✅ | 27/27 matched |
| 3.2 | Invoice coverage (Bán ra) | ✅ | 3/3 matched |
| 3.3 | Bank statement coverage | ⚠️ | 2 unmatched: row 34, 35 |
| 3.4 | Debit/Credit balance | ✅ | Balanced |
| 3.5 | Số chứng từ continuity | ✅ | Starts at 252 (max prior=251) |
| 3.6 | Special patterns | ✅ | All patterns valid |
| 3.7 | Bank statement running balance | ✅ | 33/33 running balances verified (34 rows checked) |

## Phase 4: New MST Detection
| # | Check | Status | Details |
|:---:|:---|:---:|:---|
| 4.1 | MST coverage | ⚠️ | 1 MST in result not in directory: 0318100126 |
| 4.2 | Orphan MSTs | ✅ | None |

## Tổng kết
- ❌ Errors: X (must fix before import)
- ⚠️ Warnings: Y (review recommended)
- ✅ Passed: Z

**Kết luận:** <PASS / FAIL WITH ERRORS / PASS WITH WARNINGS>
```

## Important Rules

- **Never modify** the `0.result.md` file — this skill is read-only validation.
- If errors are found, tell the user exactly which rows and what's wrong so they can fix the source data or the processing logic.
- Distinguish clearly between ❌ ERROR (data will fail import) and ⚠️ WARN (should review but may still import).
- For any cross-reference check, if source data files are missing, skip that check and note it as "⚠️ Skipped — source file missing".

## Bank Statement Running Balance — Practical Notes

### Why this check matters
A running balance inconsistency in the bank statement means either:
1. A transaction is missing from the statement (the bank didn't record it)
2. An amount was entered incorrectly
3. The balance column itself has a data entry error

Any of these would cause the accounting entries generated from that statement to be wrong. Catching this early avoids cascading errors.

### How to read the results
- If the check is `ℹ️ Skipped`, it simply means the bank statement doesn't have a balance column — no action needed.
- If `❌` discrepancies are found, examine the specific rows flagged. A small, consistent rounding difference (1-2 VND) across many rows is normal (bank rounding). A large spike at one row suggests a real error.
- If ALL balances are `✅` consistent, you can trust that the bank statement is internally complete and no transactions were dropped.
