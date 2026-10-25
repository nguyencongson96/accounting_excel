# Quyết định và bàn giao — 079302004855

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

181 dòng, PK 105, BN 13, BC 46, PC 17, PT 0; Nợ/Có 4.258.753.577 đồng, số CT 520–700. Kiểm tra (tài liệu tạm đã dọn) PASS WITH WARNINGS, 0 lỗi; khớp 58 hóa đơn, 59 giao dịch ngân hàng và số dư chạy sao kê. Công nợ (tài liệu tạm đã dọn): dư 131 đầu 283.615.390, cuối thuần 199.350.519 đồng; 41.461.936 đồng đầu năm ở nhóm N002 đã phân rã đối tượng; Netmax/EZS hết dư trước Q3. Còn phân bổ Mindo/TikTok và một số khoản thu. Chưa lập PT tiền mặt do thiếu chứng từ, dù quy trình khách hàng có quy tắc mặc định; cần xác nhận cách áp dụng trước khi nhập sổ. Converter có 4 sai khác khoảng trắng ở trường văn bản, không ở số liệu. Có 11 mã đối tượng bổ sung.

đã chuyển đổi 6 workbook nguồn thành 6 Markdown; xử lý 58 hóa đơn và 59 giao dịch ngân hàng, lập 181 dòng (PK 105, BN 13, BC 46, PC 17; PT 0), số CT 520–700, tổng Nợ/Có 4.258.753.577 đồng. [Kết quả](../2026.Q3/result/0.result.md) · Kiểm tra (tài liệu tạm đã dọn) PASS WITH WARNINGS, 0 lỗi. 11 mã đối tượng bổ sung. Dư Nợ 131 đầu kỳ 283.615.390; cuối kỳ thuần 199.350.519 đồng. Số 41.461.936 đồng đầu năm ở dòng N002 đã phân rã theo đối tượng; Netmax/EZS hết dư trước đầu Q3. Còn phân bổ chi tiết Mindo/TikTok và một số khoản thu chưa rõ; quy trình riêng có quy tắc PT mặc định nhưng chưa có chứng từ thu tiền mặt nên cần xác nhận trước khi nhập sổ. Converter báo 4 sai khác khoảng trắng ở ô văn bản, không ảnh hưởng số tiền/số dư. Đối chiếu công nợ (tài liệu tạm đã dọn) · Danh mục bổ sung (tài liệu tạm đã dọn). Trạng thái Hoàn tất theo quy ước có kết quả; chưa hoàn tất đối soát chi tiết.
