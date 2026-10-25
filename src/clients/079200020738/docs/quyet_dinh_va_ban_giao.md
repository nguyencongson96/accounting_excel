# Quyết định và bàn giao — 079200020738

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Kết quả tại [`0.result.md`](../2026.Q3/result/0.result.md) có 203 dòng (PK 91, BN 53, BC 35, PC 24, PT 0), gồm 58 hóa đơn nguồn và 88 giao dịch sao kê; số chứng từ 575–777, tổng Nợ/Có 1.972.572.476 đồng. Không lập PT 1111/131 khi không có chứng từ thu; tám hóa đơn bán ra còn phải thu tổng 180.830.073 đồng. Dùng 112111 cho sao kê 104884793344 theo xác nhận người dùng. `0.check_result.md` (tài liệu tạm đã dọn) PASS WITH WARNINGS, 0 lỗi: độ phủ hóa đơn/sao kê và số dư chạy sao kê đạt; không ghi PT nếu thiếu chứng từ thu tiền; còn khoản chi chưa rõ đối tượng 75.756.000 đang treo Nợ 331/KHÁC, một số khoản thu/ứng trước chưa phân bổ, và cần rà soát phân loại điện thoại Samsung Galaxy Fold8 37.461.000. Đã thêm 18 MST và hai đối tượng nước ngoài CLOUDCASTLE, METAPLATFORMINC; xem `đối chiếu công nợ` (tài liệu tạm đã dọn).
