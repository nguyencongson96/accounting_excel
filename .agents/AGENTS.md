# Agent Rules & Memory

File này chứa các quy tắc và thông tin bối cảnh (memory) mà AI phải đọc và tuân thủ trước khi thực hiện bất kỳ hành động nào trong dự án này.

## Ngữ cảnh Dự án (Context)
- **Mục đích dự án:** Tự động hóa quá trình chuyển hóa dữ liệu thô kế toán thành file Excel chuẩn để nhập liệu (import) lên phần mềm kế toán.
- **Cấu trúc thư mục cốt lõi (Mới cập nhật):**
  - **`src/<Mã_số_thuế>/`**: Mỗi khách hàng (đại diện bằng Mã số thuế) sẽ có một thư mục riêng biệt tại đây, do mỗi khách hàng có cấu trúc và danh sách đặc thù. Trong mỗi thư mục khách hàng sẽ bao gồm:
    - `docs/`: Chứa các tài liệu hướng dẫn nghiệp vụ và định dạng file mẫu (template) đầu ra cụ thể cho khách hàng đó.
    - `resources/`: Chứa dữ liệu kế toán thô gốc của khách hàng (VD: Sao kê, danh mục đối tượng, bảng kê...).
    - `result/`: Nơi chứa file Excel kết quả sau khi đã tự động hóa xử lý cho khách hàng này.
    - `test/`: Chứa các file để test, so sánh dữ liệu hoặc dữ liệu mẫu của các kỳ trước.
  - `scripts/`: Nơi chứa các script Node.js tạm thời dùng để test/chạy tác vụ phụ trợ.

## Quy trình Xử lý Tiêu chuẩn (Workflow)
Khi được yêu cầu chuyển hóa dữ liệu cho một **Mã số thuế (MST)**, Agent CẦN TUÂN THỦ chuỗi bước sau:
1. Truy cập vào thư mục `src/<Mã_số_thuế>/resources/` để đọc và phân tích dữ liệu kế toán thô.
2. Đọc TOÀN BỘ các file hướng dẫn nghiệp vụ và template trong thư mục `src/<Mã_số_thuế>/docs/` để nắm vững logic và cấu trúc đầu ra đặc thù của khách hàng này.
3. Tiến hành chuyển hóa dữ liệu thô thành dữ liệu đích dựa trên logic đã đọc.
4. Xuất file và lưu kết quả cuối cùng vào thư mục `src/<Mã_số_thuế>/result/`.

## Quy tắc bắt buộc (Rules)
1. **Bảo vệ dữ liệu gốc:** KHÔNG ĐƯỢC tự ý sửa đổi, ghi đè hay xóa dữ liệu gốc trong thư mục `resources/` của bất kỳ khách hàng nào. Chỉ được phép ĐỌC (Read-only).
2. **Bảo vệ file mẫu/docs:** KHÔNG ĐƯỢC ghi đè hay làm hỏng các file trong thư mục `docs/`. Chỉ lấy cấu trúc để xuất file mới.
3. **Đọc tài liệu (Docs):** BẮT BUỘC phải đọc TOÀN BỘ các file tài liệu trong thư mục `docs/` của khách hàng tương ứng trước khi thực hiện viết code hay thao tác, để nắm vững 100% quy trình.
4. Mọi kết quả đầu ra bắt buộc phải được lưu vào thư mục `result/` của đúng khách hàng đó.
5. **Quy tắc tạo Script tạm:** Tất cả các file Node.js dùng để viết script kiểm tra (test), so sánh, hoặc chạy các tác vụ phụ trợ BẮT BUỘC phải được lưu vào thư mục `scripts/` (ở thư mục gốc). Sau khi chạy xong và hoàn thành luồng công việc, BẮT BUỘC phải tự động xóa toàn bộ các file script tạm này.
