# Quyết định và bàn giao — 089200016993

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Đã xử lý 68 hóa đơn và 78 giao dịch sao kê; lập 212 dòng (PK 117, BN 19, BC 59, PC 17, PT 0), số chứng từ 467–632, tổng Nợ/Có 3.751.914.616 VND. [Kết quả](../2026.Q3/result/0.result.md) · Kiểm tra (tài liệu tạm đã dọn): PASS WITH WARNINGS, 0 lỗi. Đã lập đối chiếu công nợ (tài liệu tạm đã dọn), truy vết sao kê (tài liệu tạm đã dọn) và danh mục bổ sung (tài liệu tạm đã dọn): 26 MST mới từ hóa đơn, thêm 2 dòng tra cứu Make Sense và KHÁC. Công nợ 131 đầu kỳ 332.299.871, cuối kỳ thuần 111.383.782 VND; còn phân bổ hóa đơn chi tiết DM&C/TikTok và 19 khoản thu 238.690.751 VND được chuyển sang Có 131 theo yêu cầu (đối tượng chưa rõ). Bốn giao dịch 2622, 2632, 2642, 2658 dùng diễn giải tạm theo chỉ dẫn; 17 PC theo quy trình mặc định tiền mặt cần kiểm tra chứng từ quỹ. Đã chuyển 7 workbook thành 7 Markdown; danh mục tài khoản có 6 sai khác khoảng trắng ở ô văn bản, không ảnh hưởng mã/số tiền. Trạng thái Hoàn tất theo quy ước có kết quả; đối soát chi tiết còn mở.
