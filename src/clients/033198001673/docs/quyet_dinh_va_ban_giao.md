# Quyết định và bàn giao — 033198001673

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Đã dùng workbook `sao kê/sao kê.xlsx` theo yêu cầu, chuyển thành sao kê Markdown và lập `result/0.result.md` gồm 147 dòng (PK 48, BN 50, BC 46, PC 3; tổng Nợ/Có 896.253.942 đồng), đánh số 47–193. Giữ tài khoản doanh thu 5113 theo quy trình khách hàng và xác nhận của người dùng; validator chung yêu cầu 5118 nên ghi nhận là cảnh báo không tương thích, không đổi tài khoản. `0.check_result.md`: **FAIL WITH ERRORS** do 1 lỗi cấu trúc (schema chung khác template 14 cột khách hàng), kèm 5 cảnh báo. Còn 18/107 giao dịch ngân hàng chưa đủ căn cứ để hạch toán; lệch số dư sao kê +1.480.014 đồng ngày 06/07; khoản 10 triệu “Ghi no” cần chứng từ tiền gửi; phân bổ công nợ chưa xong. Dư 131 đầu kỳ 86.020.000 đồng, số kiểm soát cuối kỳ 89.860.000 đồng. Trạng thái `Hoàn tất` chỉ theo quy ước có tệp kết quả; chưa xác nhận kết quả đạt validator hoặc hoàn tất đối chiếu. [Kết quả](../2026.Q3/result/0.result.md) · Kiểm tra (tài liệu tạm đã dọn) · Đối chiếu công nợ (tài liệu tạm đã dọn) · Tham chiếu nguồn (tài liệu tạm đã dọn) · Kiểm tra đầu vào (tài liệu tạm đã dọn) · Danh mục bổ sung (tài liệu tạm đã dọn).
