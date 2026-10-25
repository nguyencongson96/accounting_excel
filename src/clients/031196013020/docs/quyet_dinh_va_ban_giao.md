# Quyết định và bàn giao — 031196013020

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

pipeline ngày 13/10/2026 đã lập [kết quả hiện hành](../2026.Q3/result/0.result.md), 153 dòng (PK 79, BN 28, BC 32, PC 14, PT 0), Nợ/Có 2.003.898.514 đồng, số CT 142–294. **Pipeline chưa hoàn thành:** kiểm tra (tài liệu tạm đã dọn) có 0 lỗi kỹ thuật, 1 lỗi đối chiếu nguồn và 10 nhóm cảnh báo. Đã kiểm tra chưa có lãi quý 3 và bổ sung 3 BC Nợ 112111/Có 5154 theo xác nhận người dùng: 33.470, 33.727, 30.485 đồng (tổng 97.682), số CT 292–294; ngày ghi sổ tạm 28/07, 26/08, 27/09. Ba khoảng chênh trong quý đã xử lý; còn chênh đầu/cuối sổ so với ảnh 33.000.069 đồng. Đã chuyển 5 Excel thành Markdown (đều đạt kiểm tra), đọc 16 ảnh thành 58 giao dịch sau gộp 6 lượt chụp trùng đầy đủ; 57 giao dịch lập mới, khoản rút 50 triệu 04/07 đã có CT 138 lịch sử nên không ghi lại. Xử lý 46 hóa đơn (16 mua, 30 bán); 23 MST mới so với danh mục Excel, danh mục docs rỗng nên lưu cả mã đã có vào danh mục bổ sung. Công nợ (tài liệu tạm đã dọn) đầu 131 Nợ 85.508.409/Có 16.650.000; đã phân bổ 84.700.000 thu nợ cũ, dư cuối 131 Nợ 112.775.341/Có 16.650.000. Còn chi tiết TikTok/KHÁC lịch sử, 3 khoản thu TikTok chênh tổng HĐ 646.932 đồng, chi T&C 28/08 3.240.000 chưa phân bổ HĐ; 14 PC theo mặc định chưa có phiếu chi, iPhone 60 triệu cần rà soát chính sách chi phí/tài sản. Giữ 5 HĐ bán chưa có căn cứ thu tiền, không tự sinh PT. Người dùng xác nhận TK 112111, APPOTAPAY trả HĐ 20 MINDO và tạm chi 8 triệu vào KHÁC; xác nhận (tài liệu tạm đã dọn). Trạng thái Hoàn tất chỉ ghi nhận file kết quả đã tồn tại theo quy ước tracking; chưa chốt nhập sổ. Backup giữ Có đã có.
