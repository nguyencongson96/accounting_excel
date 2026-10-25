# Quyết định và bàn giao — 8783523554-001

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Đã đọc và gộp 52 giao dịch từ `sao kê/sao kê.csv`; lập kết quả 135 dòng (PK 80, BN 13, BC 39, PC 3), tổng Nợ/Có 1.272.632.489 đồng, số CT 543–677. Kiểm tra **FAIL WITH ERRORS (2 quy tắc checker không khớp template/quy trình riêng)**; còn các khoản thu 84.200.000 đồng chưa rõ người trả, khoản thừa Purcell 206.500 đồng, giao dịch hoàn 22.000.000 đồng chưa đủ hồ sơ, và phạm vi tài khoản Sacombank/ngày kết thúc CSV chưa xác nhận. Xem [kết quả](../2026.Q3/result/0.result.md), kiểm tra (tài liệu tạm đã dọn), đối chiếu công nợ (tài liệu tạm đã dọn), tham chiếu nguồn (tài liệu tạm đã dọn), kiểm tra đầu vào (tài liệu tạm đã dọn), đối tượng mới (tài liệu tạm đã dọn).
