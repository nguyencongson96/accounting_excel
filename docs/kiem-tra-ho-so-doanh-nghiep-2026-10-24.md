# Kiểm tra bộ tài liệu doanh nghiệp — 24/10/2026

Phạm vi: bộ tài liệu trong [mục lục 12 doanh nghiệp](phan-tich-doanh-nghiep-2026-10-24.md), không phải kiểm tra `0.result.md` hoặc xác nhận đã nhập phần mềm.

| Nội dung kiểm tra | Kết quả |
|---|---|
| Kết nối và schema đúng từng database doanh nghiệp đã ánh xạ | 12/12 |
| Phạm vi tổng hợp | 45.592 dòng trước 25/10/2026, Posted=1 |
| Cặp tài khoản đã thống kê | 1.065; tổng số dòng theo cặp khớp tổng theo năm từng database |
| Module bắt buộc và template | 120 file tồn tại, đọc được UTF-8 |
| Bảng Markdown | Không phát hiện hàng lệch số cột trong 120 file đã kiểm tra |
| Liên kết từ mục lục từng khách hàng | Không phát hiện đường dẫn thiếu |
| Cặp tài khoản trong file diễn giải | Đủ các cặp có trong thống kê |
| Mẫu diễn giải đã trích | 2.324 biến thể, có khóa chứng từ tham chiếu; các trường có nội dung khớp nguồn trích sau khi escape Markdown |
| Sổ cái với CdKT theo tháng/đơn vị/tài khoản trước 01/10/2026 | 11 doanh nghiệp không có nhóm lệch >0,01; ADAYA có 15 nhóm ở kỳ khởi tạo 202512, không có nhóm lệch kỳ 2026 trong phép so này |
| Chứng từ tương lai | GS 12 dòng ngày 01/01/2027, H2P 1 dòng ngày 30/11/2026; tách khỏi mẫu hiện tại |
| Quy trình WNBF và Ngọc Quang trước thay đổi | Giữ nguyên nội dung ở `0.quy_trinh_truoc_2026-10-24.md` trong cùng docs, mục lục mới có liên kết |
| Database và dữ liệu hộ kinh doanh | Không sửa dữ liệu SQL; không sửa file hay cấu trúc khách hàng hộ kinh doanh |

Không đồng nhất `Ma_Dvcs/Stt/Stt_Bt` trùng với dòng lỗi: khóa này chưa đủ phân biệt dòng đối ứng. Không gọi phép đối chiếu hai bảng nội bộ là xác nhận số tiền trên hóa đơn/sao kê gốc đúng.

Các hạn chế đã được ghi vào tài liệu: mẫu chứng từ chi tiết được chọn theo cặp, không kiểm toán từng chứng từ gốc; số dư đầu kỳ cần dựng và xác nhận khi làm từng kỳ; BLIVEE đã được người dùng chốt tên CÔNG TY TNHH MỘT THÀNH VIÊN BLIVEE theo file ánh xạ ngày 24/10/2026; các mô tả trống/mâu thuẫn phải hỏi; template mới chỉ định cấu trúc workspace, mapping nhập liệu cần kiểm tra khi xuất. Bảo hiểm theo C12 và chi không hóa đơn bàn giao người dùng. Chưa có kết quả hạch toán mới nên chưa chạy skill `check_result` cho một file kết quả.
