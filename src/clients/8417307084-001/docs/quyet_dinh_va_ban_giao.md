# Quyết định và bàn giao — 8417307084-001

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Ngày 16/10/2026 đã lập [kết quả 207 dòng](../2026.Q3/result/0.result.md): PK 58, BN 117, BC 14, PC 18, PT 0; số CT 694–900; tổng Nợ/Có mỗi bên 1.913.093.365 đồng. Agent xác định từng bút toán theo nguồn và quy trình riêng; 34/34 hóa đơn đã ghi nhận; kiểm tra lại E02 không thấy thiếu hoặc trùng hóa đơn Q3, 22/22 mua có thanh toán (4 BN + 18 PC theo mặc định quy trình), 11/12 bán đã phân bổ thu, HĐ 44 còn chờ cấn cọc FGH 100 triệu; HĐ CM Kyoto 1272 giá trị 1.625.000 hạch toán 64277/331 theo chỉ định người dùng ngày 16/10/2026, giữ nguyên diễn giải nguồn; đã bổ sung PC 900 Nợ 331/Có 1111 số tiền 1.625.000 theo mục 3.4.A, cấn đủ phát sinh HĐ Kyoto theo giả định tiền mặt, chưa có phiếu chi/sổ quỹ xác nhận. 131/131 giao dịch VIB đã ghi, số dư chạy khớp, tổng Nợ 788.091.000/Có 475.058.597. Không cần chuyển thêm Excel trong lần chạy này. Bổ sung 5 MST so với danh mục docs.

Báo cáo kiểm tra (tài liệu tạm đã dọn): **FAIL WITH ERRORS — 2 lỗi đối chiếu/độ đầy đủ, 0 lỗi kỹ thuật, 8 nhóm cảnh báo**. Chênh VIB đầu kỳ 49.555.000; đã kiểm tra lại đủ 131/131 bút toán ngân hàng Q3, chênh không tăng trong Q3. Sao kê Q2 cuối 29/06 khớp sổ 413.511.047 nhưng dư đầu Q3 là 363.956.047; cần đối chiếu 30/06–01/07 để xác định nguyên nhân giáp kỳ; công nợ đầu kỳ chưa tách đủ theo hóa đơn, thiếu chi tiết 331. Gemari T06 6.352.000 và Sana Xanh 36.350.565 ghi Có 131 đúng đối tác, chưa phân bổ HĐ; FGH 100 triệu ghi Có 3388 theo nội dung cọc, chưa cấn HĐ 44. 18 PC tổng 38.372.635 theo mặc định quy trình cần chứng từ quỹ; lương cần bảng gross/khấu trừ, thuê văn phòng 3.300.000 trên 2421 chưa phân bổ. Người dùng xác nhận “cứ mặc định như quá khứ” cho BHXH: trích 11.446.000/tháng T07–T09; phần BHXH tháng 6 lịch sử thiếu 8.496.000 cần đối chiếu riêng. 131 cuối tạm Nợ 123.500.000/Có 102.702.565, thuần Nợ 20.797.435. Công nợ (tài liệu tạm đã dọn) · Phân bổ (tài liệu tạm đã dọn) · Tham chiếu (tài liệu tạm đã dọn) · [Kết quả](../2026.Q3/result/0.result.md).

Trạng thái Hoàn tất chỉ theo quy ước đã có kết quả, **chưa chốt pipeline hoặc xác nhận nhập sổ**. Giữ thông tin backup Có đã xác nhận. Kết luận cũ về thiếu giao dịch đã được thay thế bằng bộ 131 giao dịch đã đối chiếu.
