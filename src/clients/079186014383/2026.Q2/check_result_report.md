
# Kết quả Kiểm tra 0.result.md

**Khách hàng:** 079186014383
**Kỳ:** 2026.Q2
**File kiểm tra:** 0.result.md
**Thời gian:** 2026-07-15T15:45:45.273Z

## Tổng quan
| Chỉ tiêu | Giá trị |
|:---|:---|
| Tổng số dòng | 48 |
| PK (Phiếu kế toán) | 30 |
| BN (Báo nợ) | 0 |
| BC (Báo có) | 10 |
| PC (Phiếu chi) | 7 |
| Tổng Nợ | 0 |
| Tổng Có | 0 |

## Phase 1: Structure ✅/❌
- Column count: ✅ (14 columns)
- Column order: ✅
- No empty rows: ✅

## Phase 2: Field Validation
| # | Check | Status | Details |
|:---:|:---|:---:|:---|
| 2.1 | Mã chứng từ | ✅ | All valid |
| 2.2 | Ngày ghi sổ | ✅ | All valid |
| 2.3 | Số chứng từ | ✅ | All sequential from 1 to 47 |
| 2.4 | Mã đối tượng | ✅ | All exist |
| 2.5 | Diễn giải | ✅ | All valid |
| 2.6 | Tài khoản (Nợ/Có) | ✅ | All valid |
| 2.7 | Mã tiền tệ | ✅ | VND |
| 2.8 | Tỷ giá | ✅ | 1 |
| 2.9 | Nguyên tệ | ✅ | Equals Thành tiền |
| 2.10| Thành tiền | ✅ | > 0 |

## Phase 3: Accounting Logic
| # | Check | Status | Details |
|:---:|:---|:---:|:---|
| 3.1 | Invoice coverage (Mua vào) | ✅ | 7/7 matched |
| 3.2 | Invoice coverage (Bán ra) | ✅ | 10/10 matched |
| 3.3 | Bank statement coverage | ✅ | 10/10 matched |
| 3.4 | Debit/Credit balance | ✅ | Balanced |
| 3.5 | Số chứng từ continuity | ✅ | Starts at 1 (max prior=0) |
| 3.6 | Special patterns | ✅ | All patterns valid |
| 3.7 | Bank statement running balance | ℹ️ | Skipped — no balance column found in bank statement |

## Phase 4: New MST Detection
| # | Check | Status | Details |
|:---:|:---|:---:|:---|
| 4.1 | MST coverage | ✅ | All 5 new MSTs correctly added |
| 4.2 | Orphan MSTs | ✅ | None |

## Tổng kết
- ❌ Errors: 0
- ⚠️ Warnings: 0
- ✅ Passed: 20

**Kết luận:** PASS
