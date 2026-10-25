# Thư mục quý và thống kê tiến độ

Agent thực hiện trực tiếp thao tác thư mục hoặc đọc trạng thái file, không phụ thuộc tiện ích trong thư mục tạm. Chỉ làm tác vụ đã được yêu cầu; không tự chạy SQL, chuyển đổi nguồn, hạch toán hoặc sửa tracking vì yêu cầu tạo thư mục/thống kê.

## Tạo thư mục quý

1. Xác định quý đúng YYYY.Q1–Q4 và phạm vi khách hàng; hỏi nếu chưa có quý. Giữ MST dạng chuỗi. Mặc định hàng loạt chọn Đang tiếp tục từ bảng database; chỉ gồm khách đã dừng/chưa ánh xạ khi người dùng yêu cầu tất cả hoặc đích danh.
2. Quét các thư mục khách thực tế trong src/clients. Khách chưa có thư mục dùng init_customer trước. Chỉ tạo thư mục <MST>/<Quarter>/ còn thiếu; bỏ qua thư mục đã có, không ghi đè nguồn. Không tạo last_quarter_data, file mẫu hoặc kết quả giả.
3. Báo số tạo mới, đã có, bỏ qua và danh sách MST/phạm vi lọc. Không đổi trạng thái dịch vụ hoặc tracking chỉ vì tạo thư mục.

## Thống kê

Kiểm cả <Quarter>/result/ và gốc quý, gồm 0.result.md và các bản kết quả có hậu tố. File phải có nội dung; không đếm báo cáo kiểm tra hoặc file bổ sung như một khách mới. Nếu có nhiều bộ thì liệt kê đường dẫn, không tự chọn hiện hành chỉ theo mtime. Với kỳ gộp, chỉ tính vào quý khi tracking/xác nhận người dùng chứng minh phạm vi.

Báo số khách có/chưa có kết quả, danh sách MST và phạm vi lọc. Có result không đồng nghĩa đúng nghiệp vụ, kiểm tra đạt, đã nhập SQL hoặc hoàn tất kỳ. Đọc bằng chứng tracking và khoản chờ nếu cần giải thích; chỉ chạy check_result khi người dùng yêu cầu kiểm tra.
