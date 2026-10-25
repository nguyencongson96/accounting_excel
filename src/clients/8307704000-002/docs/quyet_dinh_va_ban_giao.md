# Quyết định và bàn giao — 8307704000-002

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

lập 68 dòng (PK 33, BN 19, BC 13, PC 3; PT 0), số CT 375–442, tổng Nợ/Có 465.389.557 đồng. Nguồn ngân hàng là 8 ảnh thông báo theo xác nhận của người dùng; 31 giao dịch có số dư chạy khớp qua 30 bước, kết thúc 15.840.652 đồng ngày 28/09. `0.check_result.md` (tài liệu tạm đã dọn) FAIL WITH ERRORS (1 lỗi, 4 cảnh báo): mã đối tượng AMPLIFYLIVEASIA đã bổ sung cho hóa đơn 37; còn lỗi schema checker lệch template 14 cột khách hàng. Còn cảnh báo về ảnh không có 29–30/09, phân bổ hóa đơn nợ đầu kỳ (BEYONDK HĐ 23/24), TikTok thiếu 165.125 đồng, khoản thuế 9.896.907 đồng có MST khác và chuyển khoản 15.000.000 đồng chưa rõ bản chất. Hai dòng ngân hàng không có nguồn hoặc bị lặp đã loại khỏi kết quả. Đã ghi chi tiết tại `đối chiếu công nợ` (tài liệu tạm đã dọn), `tham chiếu nguồn` (tài liệu tạm đã dọn), `đầu vào` (tài liệu tạm đã dọn) và `danh mục bổ sung` (tài liệu tạm đã dọn). Trạng thái Hoàn tất theo quy ước file kết quả tồn tại; chưa đủ điều kiện xác nhận hoàn tất nghiệp vụ.
