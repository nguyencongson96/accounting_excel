# Quyết định và bàn giao — 079302005740

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Ngày 17/10/2026 cập nhật theo chỉ định người dùng: E01 đảo HĐ Techcombank 27320986 âm 599.000 thành Nợ 331/Có 64277, đối tượng 0100230800; E02 bổ sung 5 BN rút tiền mặt 8.515.108; W01 chuyển 21 BN 179.075.000 từ 1388 sang 1111; W02 chuyển chữ ký số 1.662.120 từ 2422 sang 64277; W04 xác nhận REDCHAMBER/TIKTOK là nước ngoài không có MST Việt Nam. Quý đầu tiên, công nợ đầu kỳ 0, tài khoản VietinBank 104887596178 dùng 112111; không có backup hoặc sổ kỳ trước.

[Kết quả](../2026.Q3/result/0.result.md): **122 dòng**, PK 72, BN 27, BC 23, PC 0, PT 0; số CT 001–122; tổng Nợ/Có mỗi bên **725.990.746 đồng**. Đã ghi 24 HĐ bán và 24 giảm trừ, 23 HĐ mua dương và 1 HĐ âm; 1 HĐ khuyến mại 0 theo dõi phi tiền tệ. Ghi đủ 50/50 giao dịch quý III, loại 2 giao dịch tháng 10. CSV khớp 51/51 bước số dư; sổ 112111 cuối **34.655.538**, chênh sao kê **0**. Biến động Nợ 1111 do rút nhập quỹ **187.590.108**; không còn 1388 hoặc 2422. Chuyển 2 workbook sang 2 Markdown, kiểm tra chính xác 5.300 ô; 30 đối tượng bổ sung.

Kiểm tra (tài liệu tạm đã dọn): **PASS WITH WARNINGS**, 0 lỗi kỹ thuật/độ đầy đủ đối với nguồn đã cung cấp; 2 nhóm còn mở. **E03 người dùng tự xử lý:** GLORIE GD6 9.900.000 chưa phân bổ HĐ, giữ dư Có 131; TikTok chênh 132.279, giữ dư Nợ, không tự điều chỉnh. W03: chưa đối chiếu PDF từng dòng với CSV và chưa có sao kê Techcombank/xác nhận không hoạt động. E01/E02/W01/W02/W04 đã giải quyết theo chỉ định. 131 cuối Nợ 63.932.279/Có 9.900.000; 331 cuối Nợ 22.802/Có 33.107.308, không bù trừ đối tác.

Công nợ (tài liệu tạm đã dọn) · Phân bổ (tài liệu tạm đã dọn) · Nguồn từng dòng (tài liệu tạm đã dọn) · Đầu vào (tài liệu tạm đã dọn) · [Kết quả](../2026.Q3/result/0.result.md). Trạng thái Hoàn tất theo quy ước đã có kết quả; chưa xác nhận chốt E03 hoặc toàn bộ phạm vi tài khoản.

Bổ sung theo yêu cầu người dùng: [result_bo_sung.md](../2026.Q3/result/result_bo_sung.md), **13 PC** số 123–135, Nợ 331/Có 1111 tổng **33.107.308 đồng**, ngày quy ước 30/09/2026 (cần khớp chứng từ thực tế). Kiểm tra bổ sung (tài liệu tạm đã dọn): không vượt công nợ, 0 lỗi; sau ghi cả hai file dư Có 331 về 0, Techcombank vẫn dư Nợ 22.802. Tổng gộp 135 dòng, Nợ/Có mỗi bên 759.098.054; kết quả gốc vẫn 122 dòng. E03 người dùng tự xử lý không thay đổi.
