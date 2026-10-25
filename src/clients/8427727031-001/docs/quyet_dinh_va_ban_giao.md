# Quyết định và bàn giao — 8427727031-001

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Đã chuyển 5/5 workbook sang Markdown, đọc 2 ảnh sao kê VietinBank tài khoản 101885529504 thành 11 giao dịch duy nhất sau khi gộp ảnh trùng. Theo xác nhận người dùng, sáu giao dịch trước đây để mở đã được hạch toán: khoản vào 26.400.000 vào TK 131 đối tượng Khác; ba khoản 19.066, 16.048, 14.236 là lãi tiền gửi 5154; khoản ra 80.000.000 là rút tiền nhập quỹ; phí ngân hàng 22.000 vào 64277. Bản cập nhật có 237 dòng (PK 116, PC 110, BC 8, BN 3, PT 0), số CT 2260–2496, tổng Nợ/Có 538.647.832 đồng. 110 PC Nợ 331/Có 1111 thanh toán đủ 86.473.377 đồng công nợ phát sinh từ hóa đơn mua vào Q3. Đã xử lý 110 hóa đơn mua vào, 3 hóa đơn TikTok và tạo 15 mã đối tượng. [Kết quả hiện hành](../2026.Q3/result/0.result.md) · Kiểm tra (tài liệu tạm đã dọn) PASS WITH WARNINGS, 0 lỗi · Đối chiếu công nợ (tài liệu tạm đã dọn) · Truy vết nguồn (tài liệu tạm đã dọn) · Kiểm tra đầu vào (tài liệu tạm đã dọn) · Danh mục bổ sung (tài liệu tạm đã dọn).

Số dư 112121 sau khi ghi đủ 11 giao dịch là 177.017.000 đồng, khớp số dư ảnh. Khoản 26.400.000 đang ghi tạm vào 131/Khác, chưa xác định người trả hoặc hóa đơn nên không tự phân bổ Clickmedia. Còn chênh TikTok 473.486 đồng, thiếu chi tiết hóa đơn công nợ đầu kỳ Clickmedia/Vinpearl và chưa lập ba khoản BHXH 690.300 đồng/tháng do thiếu mã đối tượng phù hợp.
