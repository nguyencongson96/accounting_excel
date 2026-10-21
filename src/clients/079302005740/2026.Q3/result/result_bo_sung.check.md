# Kiểm tra result_bo_sung.md

Khách hàng 079302005740 — 2026.Q3. [File bổ sung](result_bo_sung.md), đi kèm [kết quả gốc](0.result.md).

| Chỉ tiêu | Kết quả |
| --- | --- |
| Phiếu chi | 13 dòng PC cho 13 hóa đơn của 10 nhà cung cấp |
| Số chứng từ | 123–135, nối tiếp kết quả gốc 001–122 |
| Ngày ghi sổ | 30/09/2026 — tạm chọn ngày cuối quý do người dùng chưa chỉ định ngày chi |
| Định khoản | Nợ 331/Có 1111 |
| Tổng Nợ / tổng Có | 33.107.308 đồng mỗi bên |
| Kiểm tra | 0 lỗi cấu trúc/tài khoản/số tiền/chi trùng hoặc vượt công nợ |

Người dùng yêu cầu bổ sung PC chi trả công nợ 331. Đây là căn cứ chỉ định lập bổ sung; ngày 30/09 là ngày quy ước cho bản bổ sung, chưa được chứng từ chi thực tế xác nhận. Không tự tạo phiếu thu hoặc sinh thêm chi phí. Techcombank dư Nợ 22.802 sau hóa đơn âm, không lập PC cho đối tượng này.

| Đối tượng | Dư Có trước bổ sung | PC thanh toán | Dư Nợ sau bổ sung | Dư Có sau bổ sung |
| --- | ---: | ---: | ---: | ---: |
| 0100230800 | 0 | 0 | 22.802 | 0 |
| 0318595126 | 2.555.280 | 2.555.280 | 0 | 0 |
| 0314240161 | 932.000 | 932.000 | 0 | 0 |
| 0302712571 | 1.761.120 | 1.761.120 | 0 | 0 |
| 0313355963 | 1.170.288 | 1.170.288 | 0 | 0 |
| 0302286281-010 | 6.819.000 | 6.819.000 | 0 | 0 |
| 0307787891 | 1.600.000 | 1.600.000 | 0 | 0 |
| 0316729247 | 260.820 | 260.820 | 0 | 0 |
| 0109998900 | 6.480.000 | 6.480.000 | 0 | 0 |
| 0313168515-004 | 2.028.800 | 2.028.800 | 0 | 0 |
| 0304384823 | 9.500.000 | 9.500.000 | 0 | 0 |

Đối chiếu từng PC với bút toán gốc và hóa đơn:

| PC | Hóa đơn nguồn | Chứng từ PK gốc | Số tiền |
| --- | --- | --- | ---: |
| 123 | [STT 3, HĐ 7916](../1.danh_sach_hoa_don.md#L9) | 003 | 2.555.280 |
| 124 | [STT 7, HĐ 39397](../1.danh_sach_hoa_don.md#L13) | 007 | 932.000 |
| 125 | [STT 8, HĐ 60705](../1.danh_sach_hoa_don.md#L14) | 008 | 99.000 |
| 126 | [STT 9, HĐ 61744](../1.danh_sach_hoa_don.md#L15) | 011 | 1.662.120 |
| 127 | [STT 10, HĐ 316](../1.danh_sach_hoa_don.md#L16) | 012 | 1.170.288 |
| 128 | [STT 12, HĐ 22252](../1.danh_sach_hoa_don.md#L18) | 013 | 6.819.000 |
| 129 | [STT 13, HĐ 19493](../1.danh_sach_hoa_don.md#L19) | 015 | 1.600.000 |
| 130 | [STT 14, HĐ 19923](../1.danh_sach_hoa_don.md#L20) | 016 | 260.820 |
| 131 | [STT 16, HĐ 277](../1.danh_sach_hoa_don.md#L22) | 026 | 3.240.000 |
| 132 | [STT 20, HĐ 341](../1.danh_sach_hoa_don.md#L26) | 087 | 3.240.000 |
| 133 | [STT 22, HĐ 50474](../1.danh_sach_hoa_don.md#L28) | 091 | 2.028.800 |
| 134 | [STT 23, HĐ 59189](../1.danh_sach_hoa_don.md#L29) | 093 | 1.500.000 |
| 135 | [STT 24, HĐ 62542](../1.danh_sach_hoa_don.md#L30) | 095 | 8.000.000 |

**Sau khi ghi cả hai file:** 135 dòng, PK 72/BN 27/BC 23/PC 13/PT 0; tổng Nợ/Có mỗi bên **759.098.054**. Dư Có 331 về 0, dư Nợ Techcombank 22.802 giữ nguyên. Biến động Nợ thuần 1111 còn **154.482.800**, chưa phải số dư quỹ kiểm kê. 112111 và E03 giữ nguyên vì bổ sung chỉ tác động 331/1111.

**Kết luận: PASS WITH WARNINGS.** Cần đối chiếu ngày chi với chứng từ thực tế. E03 của kết quả gốc vẫn do người dùng xử lý; W03 giới hạn nguồn không thay đổi. File bổ sung chưa ghép vào 0.result.md; khi sử dụng cả hai file chỉ ghi mỗi dòng một lần.
