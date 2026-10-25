# Quyết định và bàn giao — 8537932805-001

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Đã chạy pipeline 2026.Q3 sau khi người dùng xác nhận 4 ảnh là toàn bộ sao kê. Chuyển 2 workbook quý và 3 workbook kỳ trước sang Markdown (5/5 đạt kiểm tra); trích 21 giao dịch ngân hàng duy nhất từ 4 ảnh, gộp 4 lần chụp trùng. Kết quả có 66 dòng (PK 39, BN 3, BC 18, PC 6, PT 0), chứng từ 745–810, tổng Nợ/Có 673.790.031 đồng. `0.check_result.md`: **PASS WITH WARNINGS**, 0 lỗi cấu trúc/trường dữ liệu.

Các mục còn mở: dư đầu 131 của 3BROTHERS 15.967.742 đồng chưa có chi tiết hóa đơn; thu TikTok 22.118.579 đồng chưa phân bổ; 4 khoản thu chưa rõ đối tượng tổng 63.445.833 đồng đang để KHÁC; DINGYI và GRACECLUB thiếu MST; ảnh không hiển thị tên ngân hàng/số tài khoản/số dư để xác minh độc lập tài khoản 112121; 6 phiếu chi mua vào 17.852.898 đồng theo mặc định tiền mặt chưa có phiếu chi/sổ quỹ xác nhận. Ba khoản chi 9 triệu, 100 triệu và 50 triệu đang hạch toán rút tiền nhập quỹ theo quy trình, cần đối chiếu sổ quỹ.

Trạng thái `Hoàn tất` trong bảng chỉ xác nhận đã lập tệp kết quả; đối soát nghiệp vụ chưa hoàn tất. [Kết quả](../2026.Q3/result/0.result.md) · Kiểm tra (tài liệu tạm đã dọn) · Đối chiếu công nợ (tài liệu tạm đã dọn) · Tham chiếu nguồn (tài liệu tạm đã dọn) · Kiểm tra đầu vào (tài liệu tạm đã dọn).
