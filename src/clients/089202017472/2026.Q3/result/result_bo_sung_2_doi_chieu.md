# Kiểm tra bút toán bổ sung phiếu chi — 089202017472, 2026.Q3

## Phạm vi và căn cứ

- Kiểm tra `result_bo_sung_2.md` với các dòng hóa đơn mua vào Nợ `64277` / Có `331` trong `0.result.md`.
- Quy trình khách hàng tại `../../docs/0.quy_trinh_tao_result.md`, mục 3.4.A, quy định hóa đơn mua vào không khớp thanh toán ngân hàng được mặc định chi tiền mặt và ghi Nợ `331` / Có `1111`.
- Theo yêu cầu hiện tại, lập phiếu chi cho toàn bộ 59 hóa đơn mua vào có giá trị trong Q3. Hóa đơn 0 đồng HĐ 400 không có bút toán công nợ và không sinh phiếu chi.

## Kết quả kiểm tra

| Chỉ tiêu | Kết quả |
|:---|---:|
| Số dòng PC | 59 |
| Số chứng từ | 774–832, liên tục |
| Tài khoản | Nợ 331 / Có 1111 |
| Tổng Nợ | 54.362.630 VND |
| Tổng Có | 54.362.630 VND |
| Đối chiếu số dòng và số tiền với hóa đơn mua vào trong `0.result.md` | Khớp 59/59 |
| Ngày ghi sổ | Khớp ngày hóa đơn, đều trong 2026.Q3 |
| Cột, số tiền, tỷ giá, diễn giải | 14 cột; VND; tỷ giá 1; số tiền Nợ/Có bằng nhau; diễn giải không quá 200 ký tự |

## Giới hạn đối chiếu

Các phiếu chi được ghi theo quy tắc mặc định trong quy trình khách hàng và yêu cầu bổ sung hiện tại; thư mục Q3 không có chứng từ PC hoặc sổ quỹ riêng để xác minh ngày chi thực tế. Vì vậy ngày phiếu chi dùng ngày hóa đơn. Số dư công nợ mở 331 theo từng đối tượng tại 30/06/2026 vẫn chưa xác định; các dòng này chỉ thanh toán 59 hóa đơn Q3 nêu trên, không phân bổ cho công nợ đầu kỳ.

**Kết luận:** Cấu trúc, số chứng từ, tài khoản và tổng Nợ/Có của file bổ sung đạt kiểm tra. Giao dịch chi tiền được ghi theo giả định mặc định của quy trình khách hàng; đối chiếu số dư công nợ đầu kỳ/cuối kỳ vẫn chưa hoàn tất.
