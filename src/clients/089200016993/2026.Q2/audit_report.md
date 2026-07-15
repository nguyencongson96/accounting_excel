# Kết quả Kiểm tra 0.result.md

**Khách hàng:** 089200016993
**Kỳ:** 2026.Q2
**File kiểm tra:** [0.result.md](file:///D:/DEVELOPER/3.accounting_excel/src/clients/089200016993/2026.Q2/0.result.md)
**Thời gian:** 2026-07-15T15:39:23.937Z

## Tổng quan
| Chỉ tiêu | Giá trị |
|:---|:---|
| Tổng số dòng | 269 |
| PK (Phiếu kế toán) | 167 |
| BN (Báo nợ) | 21 |
| BC (Báo có) | 44 |
| PC (Phiếu chi) | 37 |

## Phase 1: Structure
- Column count: ✅ (14 columns)
- Column order: ✅
- No empty rows: ✅

## Phase 2: Field Validation
| # | Check | Status | Details |
|:---:|:---|:---:|:---|
| 2.1 | Mã chứng từ | ✅ | All valid |
| 2.2 | Ngày ghi sổ | ✅ | All valid |
| 2.3 | Số chứng từ | ✅ | All continuous |
| 2.4 | Mã đối tượng | ✅ | All present in registry |
| 2.5 | Diễn giải | ✅ | All valid |
| 2.6 | Tài khoản Nợ/Có | ✅ | All present in chart |
| 2.7 | Mã tiền tệ | ✅ | All valid |
| 2.8 | Tỷ giá | ✅ | All valid |
| 2.9 | Nguyên tệ | ✅ | All valid |
| 2.10 | Thành tiền | ✅ | All valid |

**Error count:** 0 | **Warning count:** 0

## Phase 3: Accounting Logic
| # | Check | Status | Details |
|:---:|:---|:---:|:---|
| 3.1 | Invoice coverage (Mua vào) | ✅ | 40/40 matched. None |
| 3.2 | Invoice coverage (Bán ra) | ⚠️ | All matched |
| 3.3 | Bank statement coverage | ✅ | 65/65 matched. None |
| 3.4 | Debit/Credit balance | ✅ | Balanced |
| 3.5 | Số chứng từ continuity | ✅ | Starts at 236 (max prior=235) |
| 3.7 | Bank statement running balance | ✅ | 64/64 running balances verified.  |

## Phase 4: New MST Detection
| # | Check | Status | Details |
|:---:|:---|:---:|:---|
| 4.1 | MST coverage | ✅ | All new MSTs listed in 0.danh_muc_doi_tuong.md |
| 4.2 | Orphan MSTs | ✅ | None |

## Tổng kết
- ❌ Errors: **0**
- ⚠️ Warnings: **0**
- ✅ Passed: **20**

**Kết luận:** PASS
