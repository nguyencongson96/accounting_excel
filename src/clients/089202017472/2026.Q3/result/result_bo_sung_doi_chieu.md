# Đối chiếu bút toán sao kê bổ sung — 089202017472, 2026.Q3

## Phạm vi

- Nguồn đã xem: 13 ảnh trong `../sao kê/`, ba khoảng ngày 01–31/07, 01–31/08 và 01–30/09/2026; cả ba màn hình đều đang lọc **Tiền vào**.
- Đã ghi 78 khoản tiền vào: 36 dòng Nợ `112111` / Có `131`, 39 dòng Nợ `112111` / Có `3388` với mã `KHAC`, và 3 dòng lãi Nợ `112111` / Có `5154`.
- Tổng tiền vào theo ảnh: 1.640.649.005 VND. Tổng Nợ = tổng Có trong file bổ sung.
- Nội dung giao dịch trong ứng dụng bị rút gọn bằng dấu `...`; các khoản không nhận diện được đối tác được giữ riêng ở `KHAC`, không ghi giảm công nợ 131.

## Công nợ và phân bổ

- Các dòng Có `131` có tổng 665.878.145 VND nhưng chưa phân bổ tới từng hóa đơn. Không đánh dấu hóa đơn nào đã thanh toán chỉ từ số tiền hoặc tên đối tác.
- Hóa đơn TikTok PTE số 106 đã được ghi trong `0.result.md` ngày 31/07/2026 với giá trị sau thuế 115.940.792 VND. Ảnh có khoản TikTok Shop cùng ngày 114.778.145 VND. Bổ sung khoản thu vào 131, không ghi thêm doanh thu để tránh ghi trùng; cần đối chiếu chênh lệch 1.162.647 VND và xác nhận phân bổ hóa đơn.
- Báo cáo công nợ phải thu và bảng cân đối số phát sinh trong `last_quarter_data/` ghi kỳ 01/01–13/10/2026, không phải số dư tại 30/06/2026. Bảng cân đối báo Nợ tài khoản 112111 là 1.238.869.947 VND cho toàn kỳ, thấp hơn tổng tiền vào 1.640.649.005 VND đọc từ ảnh quý 3. Hai nguồn không khớp để xác nhận số dư ngân hàng; chưa dùng báo cáo này để kết luận số dư đầu/cuối kỳ.
- `2.sao_ke.md` không có trong thư mục quý. Vì vậy chưa thể kiểm tra số dư chạy hoặc so sánh tự động với bảng sao kê dạng dòng; phần nhập liệu dựa trên các khoản hiển thị ở ảnh.

## Kết luận

Các bút toán bổ sung cân Nợ/Có, số chứng từ tiếp nối 696–773 sau số 695 trong `0.result.md`. Kết quả này bao phủ các khoản tiền vào hiển thị trong 13 ảnh theo giả định người dùng rằng sao kê đã đầy đủ; đối chiếu ngân hàng, công nợ đầu kỳ và phân bổ hóa đơn vẫn chưa hoàn tất.
