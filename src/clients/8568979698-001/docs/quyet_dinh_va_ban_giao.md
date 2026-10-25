# Quyết định và bàn giao — 8568979698-001

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Ngày 17/10/2026 đã chuyển 5 workbook sang Markdown, kiểm tra toàn bộ ô PASS; dùng CSV BIDV 8846879162 từ 3 PDF theo chỉ định người dùng. Đã xử lý 52 hóa đơn (23 mua, 29 bán) và ghi 45/45 giao dịch CSV. Agent xem xét từng chứng từ và quyết định định khoản; công cụ chỉ ghi và kiểm tra. [Kết quả](../2026.Q3/result/0.result.md): **149 dòng**, PK 84, BN 14, BC 31, PC 20, PT 0; số CT **510–658**; tổng Nợ/Có mỗi bên **1.565.695.162 VND**. Bổ sung 17 đối tượng (tài liệu tạm đã dọn).

Kiểm tra (tài liệu tạm đã dọn): **FAIL WITH ERRORS — 2 nhóm lỗi đối soát, 6 cảnh báo; 0 lỗi cấu trúc/định dạng**. CSV khớp 44/44 bước số dư: đầu 38.969.733, thu 507.843.209, chi 506.212.700, cuối 40.600.242. E01: chuyển số MINDO/Khác 26.612.903 và các thu lịch sử thiếu phân bổ; E02: 4 khoản chưa rõ đối tác 68.200.000 (GD 4/6/20/30), thu MINDO nợ cũ 27.500.000, 3BROTHERS 16.500.000, CRE thu lần hai 16.500.000 và TikTok 2.545.945 chưa phân bổ; tổng khoản thu còn mở 131.245.945; E03 đã xử lý theo chỉ định người dùng: trích BHXH tháng 07–09 690.300/tháng theo lịch sử, tổng 2.070.900; giữ BN thực nộp 1.492.700, cuối 3383 dư Có 546.100; chênh tiền nộp so với trích tháng 07–08 112.100 theo dõi W06. Người dùng trả lời không có thông tin bổ sung cho các khoản đã hỏi. 20 PC 30.306.011 theo mặc định quy trình cần sổ quỹ; 11 HĐ bán chưa xác định thu; thiếu sao kê Techcombank quý III/xác nhận không hoạt động.

Công nợ (tài liệu tạm đã dọn): dư Nợ 131 đầu sổ tái lập 01/07 **191.141.935**, khớp kiểm soát nhưng chi tiết lịch sử còn mở; cuối sổ Nợ **254.292.485**, Có **101.200.000**, thuần Nợ **153.092.485**, không bù giữa đối tác. Phân bổ (tài liệu tạm đã dọn) · Tham chiếu từng dòng (tài liệu tạm đã dọn) · Kiểm tra đầu vào (tài liệu tạm đã dọn) · [Kết quả](../2026.Q3/result/0.result.md). **Hoàn tất trong bảng chỉ nghĩa là đã có kết quả; chưa hoàn tất đối soát/pipeline hoặc xác nhận nhập sổ.** Giữ thông tin backup Có đã có; chỉ số backup ghép theo tên file 28 được giữ từ bằng chứng tracking trước đó, không có dữ liệu mới làm thay đổi.
