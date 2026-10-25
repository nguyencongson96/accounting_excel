# Quyết định và bàn giao — 019303002169

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Ngày 16/10/2026 cập nhật theo người dùng: E04 ghi TikTok 201719908M cho 2 khoản 31/07 tổng 39.354.043 (Nợ 112111/Có 131); E03 thêm PK HĐ 314 ngày 10/08, 3.240.000 (64277/331), giữ công nợ, không PC. E01/E02 giữ 333822/64271, người dùng nhận tự bổ sung danh mục. BHXH 0000000004, KHÁC 0000000005, ngân hàng 112111; giữ mã MOODY/SONGS lịch sử.

[Kết quả](../2026.Q3/result/0.result.md): 282 dòng (PK 142, BN 13, BC 30, PC 97, PT 0), CT 341–622; tổng Nợ/Có mỗi bên 1.654.748.392 đồng. Đã ghi 121/121 hóa đơn, 43/43 giao dịch. Ngân hàng cuối 1.419.055.908 khớp sao kê, chênh 0; số dư chạy 43 bước khớp. 131 đầu 270.280.000, cuối thuần Nợ 34.481.862; TikTok còn Nợ 363.359. 331 cuối thuần Nợ 88.497.752, trong đó T&C Có 3.240.000.

Kiểm tra (tài liệu tạm đã dọn): E03/E04 đã xử lý; 0 lỗi bút toán/bỏ sót nguồn, danh mục gốc còn thiếu 2 mã (E01/E02 người dùng tự bổ sung trước nhập), 8 nhóm cảnh báo. Vì danh mục chưa cập nhật, kết luận checker nghiêm ngặt vẫn FAIL WITH ERRORS chỉ ở 2 mã tài khoản; chưa coi người dùng đã hoàn tất việc bổ sung. Còn MINDO 10 triệu lịch sử chưa phân bổ, thu UNICORN/THÙY DUNG tham chiếu HĐ đã trả, KHÁC và TikTok chưa phân bổ hóa đơn, xác nhận trung gian APPOTAPAY, 97 PC theo mặc định quy trình và lệch bảng cân đối nguồn 2.070.900. Giữ backup Có đã xác nhận. Trạng thái Hoàn tất theo quy ước đã có file, chưa chứng nhận đối soát chi tiết hoàn tất.

Xác nhận xử lý (tài liệu tạm đã dọn) · Công nợ (tài liệu tạm đã dọn) · Phân bổ (tài liệu tạm đã dọn) · Tham chiếu (tài liệu tạm đã dọn) · Danh mục bổ sung (tài liệu tạm đã dọn) · Tài khoản bổ sung (tài liệu tạm đã dọn) · [Kết quả](../2026.Q3/result/0.result.md). Đã chuyển 1 workbook sao kê ở lần chạy trước; lần điều chỉnh này không chuyển thêm Excel.
