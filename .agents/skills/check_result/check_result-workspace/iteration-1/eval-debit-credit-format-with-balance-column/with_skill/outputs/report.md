# Kết quả Kiểm tra 0.result.md

**Khách hàng:** 033198001673
**Kỳ:** 2026.Q2
**Thời gian:** 14/07/2026

## Check 3.7 — Bank Statement Running Balance Validation

**Format detected:** ✅ Case A — Separate Debit (`Số tiền ghi nợ (VNĐ)`) and Credit (`Số tiền ghi có (VNĐ)`) columns
**Balance column:** ✅ `Số dư sau giao dịch (VNĐ)`
**Formula:** `expected_balance[i] = stated_balance[i-1] + (credit[i] - debit[i])`
**Rows parsed:** 20

| Row | Date | Description | Debit | Credit | Net | Stated Balance | Expected Balance | Diff | Status |
|:---:|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | 6/11/26 | MD THANH TOAN BOOKING QUIN | 7,700,000 | 0 | -7,700,000 | 7,700,000 | — (first) | — | ⏭️ |
| 2 | 6/12/26 | CPDT BULSAN GROUP | 0 | 6,600,000 | +6,600,000 | 14,300,000 | 14,300,000 | 0 | ✅ |
| 3 | 6/12/26 | Maygroup TT theo HD | 0 | 7,700,000 | +7,700,000 | 22,000,000 | 22,000,000 | 0 | ✅ |
| 4 | 6/13/26 | Gui tiet kiem Phat Loc | 20,000,000 | 0 | -20,000,000 | 2,000,000 | 2,000,000 | 0 | ✅ |
| 5 | 6/25/26 | LSI TT phi QC | 0 | 7,700,000 | +7,700,000 | 9,700,000 | 9,700,000 | 0 | ✅ |
| 6 | 6/26/26 | MO MOI TIEN GUI | 9,000,000 | 0 | -9,000,000 | 700,000 | 700,000 | 0 | ✅ |
| **7** | **6/29/26** | **HO KD SKINCARE** | **0** | **328,000** | **+328,000** | **372,000** | **1,028,000** | **-656,000** | **❌** |
| 8 | 6/30/26 | VQROLAMB | 60,000 | 0 | -60,000 | 312,000 | 312,000 | 0 | ✅ |
| 9 | 6/30/26 | Toskani thanh toan | 0 | 7,150,000 | +7,150,000 | 7,462,000 | 7,462,000 | 0 | ✅ |
| 10 | 6/30/26 | Tra lai so du | 0 | 114 | +114 | 7,462,114 | 7,462,114 | 0 | ✅ |
| 11 | 7/1/26 | MIZUHADA 1ST PAY | 0 | 7,490,000 | +7,490,000 | 14,952,114 | 14,952,114 | 0 | ✅ |
| 12 | 7/1/26 | MO MOI TIEN GUI | 14,000,000 | 0 | -14,000,000 | 952,114 | 952,114 | 0 | ✅ |
| **13** | **7/1/26** | **DO THI QUYEN** | **0** | **950,000** | **+950,000** | **2,114** | **1,902,114** | **-1,900,000** | **❌** |
| **14** | **7/1/26** | **RUT GOC TUNG PHAN** | **7,500,000** | **0** | **-7,500,000** | **7,502,114** | **-7,497,886** | **+15,000,000** | **❌** |
| **15** | **7/1/26** | **MIZUHADA/SCVN** | **0** | **7,490,000** | **+7,490,000** | **12,114** | **14,992,114** | **-14,980,000** | **❌** |
| 16 | 7/1/26 | HANA HP JSC | 0 | 14,080,000 | +14,080,000 | 14,092,114 | 14,092,114 | 0 | ✅ |
| 17 | 7/1/26 | BEAUFIRST GLOBAL | 0 | 7,040,000 | +7,040,000 | 21,132,114 | 21,132,114 | 0 | ✅ |
| 18 | 7/3/26 | BRAINAD CO.,LTD | 0 | 6,600,000 | +6,600,000 | 27,732,114 | 27,732,114 | 0 | ✅ |
| 19 | 7/3/26 | TIN VIET INVESTMENT | 0 | 7,700,000 | +7,700,000 | 35,432,114 | 35,432,114 | 0 | ✅ |
| 20 | 7/4/26 | MO MOI TIEN GUI | 35,000,000 | 0 | -35,000,000 | 432,114 | 432,114 | 0 | ✅ |

**Kết quả:** ❌ 4 discrepancies found — 15/19 balances verified
- Row 7: -656,000 VND — possible missing transaction
- Rows 13-15: Cascading errors starting from row 13
- Root cause: Row 14 "RUT GOC TUNG PHAN" (withdrawal of term deposit) is listed as debit but should be credit (money coming INTO the account)
