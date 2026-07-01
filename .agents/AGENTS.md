# Agent Rules & Memory

File này chứa các quy tắc và thông tin bối cảnh (memory) mà AI phải đọc và tuân thủ trước khi thực hiện bất kỳ hành động nào trong dự án này.

## Ngữ cảnh Dự án (Context)
- **Mục đích dự án:** Tự động hóa quá trình chuyển hóa dữ liệu thô kế toán thành file Excel chuẩn để nhập liệu (import) lên phần mềm kế toán.
- **Cấu trúc thư mục cốt lõi:**
  - `docs/`: Nơi chứa các file tài liệu hướng dẫn (`.md`).
  - `template/`: Nơi chứa các file Excel mẫu (template) dùng làm chuẩn đầu ra để nhập liệu.
  - `resources/`: Nơi chứa dữ liệu kế toán thô. Dữ liệu được tổ chức thành các thư mục con theo **Mã số thuế (MST)** của khách hàng. Mỗi thư mục khách hàng thường bao gồm:
    - Sao kê ngân hàng
    - Sổ chi tiết công nợ theo đối tượng khách hàng
    - Bảng cân đối phát sinh
    - Bảng kê chứng từ
  - `result/`: Nơi chứa file Excel kết quả sau khi đã tự động hóa xử lý.

## Quy trình Xử lý Tiêu chuẩn (Workflow)
Khi được yêu cầu chuyển hóa dữ liệu cho một **Mã số thuế (MST)**, Agent CẦN TUÂN THỦ chuỗi bước sau:
1. Truy cập vào thư mục `resources/<Mã_số_thuế>` để đọc và phân tích dữ liệu kế toán thô.
2. Tham khảo các file hướng dẫn nghiệp vụ/logic cần thiết trong thư mục `docs/`.
3. Tham chiếu cấu trúc file đích từ thư mục `template/`.
4. Tiến hành chuyển hóa dữ liệu thô thành dữ liệu đích dựa trên logic đã đọc.
5. Xuất file và lưu kết quả cuối cùng vào thư mục `result/`.

## Quy tắc bắt buộc (Rules)
1. **Bảo vệ dữ liệu gốc:** KHÔNG ĐƯỢC tự ý sửa đổi, ghi đè hay xóa dữ liệu gốc trong thư mục `resources/`. Chỉ được phép ĐỌC (Read-only).
2. **Bảo vệ file mẫu:** KHÔNG ĐƯỢC ghi đè hay làm hỏng các file trong thư mục `template/`. Chỉ lấy cấu trúc để xuất file mới.
3. **Đọc tài liệu (Docs):** BẮT BUỘC phải đọc TOÀN BỘ các file tài liệu trong thư mục `docs/` trước khi thực hiện bất kỳ hành động code hay thao tác nào, để nắm vững 100% quy trình và logic nghiệp vụ.
4. Mọi kết quả đầu ra bắt buộc phải được lưu vào thư mục `result/`.
5. **Quy tắc tạo Script tạm:** Tất cả các file Node.js dùng để viết script kiểm tra (test), so sánh, hoặc chạy các tác vụ phụ trợ BẮT BUỘC phải được lưu vào thư mục `scripts/`. Sau khi chạy xong và hoàn thành một luồng (workflow), BẮT BUỘC phải tự động xóa toàn bộ các file script tạm này để giữ thư mục làm việc luôn sạch sẽ.
