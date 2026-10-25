# Quyết định và bàn giao — 8710040770-001

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Đã tiếp tục theo yêu cầu dự đoán và hạch toán từ phần nhìn thấy trên 6 ảnh sao kê; loại giao dịch ảnh chụp trùng, chép 46 giao dịch và kiểm tra số dư đầu/cuối cùng các bước chuyển khớp. Theo xác nhận người dùng, báo cáo phải thu hiển thị đến 15/10 được coi là chốt 30/06 vì từ 01/07 chưa hạch toán; số dư TK 131 đầu kỳ thuần Nợ 82.327.094 đồng. Kết quả có 109 dòng (PK 54, BN 20, BC 26, PC 9), Nợ/Có 761.113.902 đồng, số chứng từ 664–772; 12 MST mới. Kiểm tra **PASS WITH WARNINGS (0 lỗi)**. Còn giao dịch và mô tả sao kê bị cắt, 25.850.000 đồng thu chưa rõ người trả, khoản PURCELL 15.936.495 đồng chưa phân bổ hóa đơn, một số khoản ghép/tạm ứng là suy đoán, PC tiền mặt theo quy trình khách hàng chưa có phiếu chi riêng, và chi tiết hóa đơn đầu kỳ của 5 đối tượng chưa đủ. [Kết quả](../2026.Q3/result/0.result.md) · Kiểm tra (tài liệu tạm đã dọn) · Đối chiếu công nợ (tài liệu tạm đã dọn) · Tham chiếu nguồn (tài liệu tạm đã dọn) · Kiểm tra đầu vào (tài liệu tạm đã dọn) · Danh mục bổ sung (tài liệu tạm đã dọn).
