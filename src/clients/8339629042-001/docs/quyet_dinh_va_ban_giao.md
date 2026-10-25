# Quyết định và bàn giao — 8339629042-001

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Ngày25/10/2026 tiếp tục theo chỉ định người dùng: dùng SQL `DB3TSOFT_V200_LUONGLEE` thay last_quarter_data, chỉ SELECT; đã đọc413 dòng/371 chứng từ đến30/06/2026, Posted1/EZ01, không có Q3. Danh mục300 tài khoản/294 đối tượng; CdKT/SoCaiCN đối chiếu khớp. Dư đầu131 Nợ88.550.000/Có18.516.129, 331đầu0, ngân hàng10.818.320. Người dùng xác nhận8 ảnh là toàn bộ sao kê VietinBank109884636251 Q3. Đã đọc48HĐ (10mua,38bán), trích68GD, chuyển đổiExcel mới0; đối chiếu3 workbook/Markdown không khác sau chuẩn hóa. [Kết quả](../2026.Q3/result/0.result.md):164 dòng, PK89/BN31/BC37/PC7/PT0, CT330–493, Nợ/Có mỗi bên1.338.577.437; đề nghị12 mã mới gồmCSTORE. HĐ403/421/188 ghi64277/331 vàPC331/1111 theo xác nhận mới nhất, không còn7118; tổng11.324.500, HĐ403 dùng606.018+48.482, bỏchiết khấu. Tổng7PC20.445.496. Kiểm tra (tài liệu tạm đã dọn):0 lỗi kỹ thuật, **FAIL WITH ERRORS — 2 nhóm lỗi nguồn**: E01chênh900.000 đoạn09–22/09 và cuối sổ39.472.788/ảnh38.572.788; E02hai số dư07/08 không nhất quán với thu/chi6triệu. Không tạo giao dịch bù. 7thuKhác45.181.777, TDIC12.100.000 vàTikTok5.801.022 chưa phân bổ; dự đoán đối tác/phân bổ theo chỉ định đã ghi rõ. 28BN371.200.000 rút nhậpquỹ theo mặc định và4PC9.120.996 chưa có chứng từquỹ; 3PKBHXH2.070.900 theo quy trìnhHKD. Công nợ131 cuối Nợ188.801.163/Có63.697.906;331cuối0 theo các giả định hiện hành. Công nợ (tài liệu tạm đã dọn) · Phân bổ (tài liệu tạm đã dọn) · Ghi chú (tài liệu tạm đã dọn) · Đầu vào (tài liệu tạm đã dọn). Hoàn tất trong bảng chỉ nghĩa có kết quả; **chưa hoàn tất đối soát/toàn kỳ, chưa nhậpSQL**. Giữ backupCó đã xác nhận.
