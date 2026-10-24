# Quy trình theo loại khách hàng

Trước khi xử lý, tra MST nguyên dạng trong `../../docs/3tsoft-databases.md` để xác định **Doanh nghiệp** hay **Hộ kinh doanh**. Không suy loại khách hàng chỉ từ độ dài MST hoặc tên database.

## Chỉ áp dụng cho doanh nghiệp

Theo yêu cầu người dùng ngày 24/10/2026, đọc `../../docs/quy-trinh-doanh-nghiep.md` và `<MST>/docs/0.quy_trinh_tao_result.md`, rồi các module được liên kết. Các quy tắc này là ngoại lệ doanh nghiệp của các luồng verify/process/check/init/create-quarter; không để yêu cầu file của luồng cũ cản trở việc sử dụng SQL:

- Dùng skill `connect-3tsoft` đọc đúng database đã ánh xạ. Danh mục tài khoản, đối tượng, số dư và lịch sử lấy từ SQL; không bắt buộc `last_quarter_data/`, `2.danh_muc_tai_khoan.md`, `3.danh_muc_doi_tuong.md` hoặc yêu cầu người dùng xuất chúng. Khởi tạo khách hàng/quý doanh nghiệp không tạo các nguồn thừa này. Không xóa dữ liệu cũ.
- Sao kê và hóa đơn là nguồn thường xuyên; bảng lương chỉ khi có. Khi chỉ có sao kê có thể xử lý lương/thuế nếu có đủ căn cứ về người nhận, kỳ, gross/net và nghĩa vụ đã trích; thiếu thì hỏi, không tự suy thuế/tỷ lệ.
- **Bảo hiểm người dùng tự hạch toán khi có C12; chi không hóa đơn người dùng tự làm.** Agent ghi giao dịch vào bảng bàn giao/đối chiếu để không mất dữ liệu và tránh nhập trùng, không tự sinh các bút toán này.
- **Diễn giải do `<MST>/docs/8.dien_giai.md` phụ trách.** Dùng mẫu lịch sử đúng khách hàng và quyết định đã xác nhận còn hiệu lực. Không có mẫu phù hợp, mẫu trống, cần câu mới hoặc không biết chọn biến thể nào thì hỏi người dùng chốt; không tự viết lại/rút gọn, không tự lấy nguyên văn hóa đơn/sao kê thay mẫu nếu chưa có căn cứ. Áp dụng cả hóa đơn đầu ra; không để luật viết diễn giải chung của skill ghi đè yêu cầu này.
- Những module lịch sử là nguồn tham khảo có phạm vi/ngày đọc, không phải bộ máy tự động chọn tài khoản. Đọc chứng từ và xác định từng nghiệp vụ, chống trùng với SQL, dựng đúng công nợ đầu kỳ. Không mặc định số dư đầu bằng 0.
- Khi kiểm tra kết quả bằng `check_result`, dùng danh mục/số dư SQL hiện hành thay file export; kiểm tra phần đã lập cùng phần người dùng tự làm/chờ quyết định. Không báo hoàn tất toàn kỳ khi còn nghiệp vụ chưa xử lý.

## Hộ kinh doanh

Giữ nguyên cấu trúc, dữ liệu, yêu cầu đầu vào và quy trình hiện có; không áp dụng ngoại lệ doanh nghiệp ở trên. Khách hàng không có trong bảng ánh xạ cần được xác định loại trước khi thay quy trình.
