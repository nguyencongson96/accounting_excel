# Agent Rules & Memory

File này chứa các quy tắc và thông tin bối cảnh (memory) mà AI phải đọc và tuân thủ trước khi thực hiện bất kỳ hành động nào trong dự án này.

## Ngữ cảnh Dự án (Context)
- **Mục đích dự án:** Tự động hóa quá trình chuyển hóa dữ liệu thô kế toán thành file Excel chuẩn để nhập liệu (import) lên phần mềm kế toán.
- **Cấu trúc thư mục cốt lõi (Mới cập nhật):**
  - **`src/<Mã_số_thuế>/`**: Mỗi khách hàng (đại diện bằng Mã số thuế) sẽ có một thư mục riêng biệt tại đây, do mỗi khách hàng có cấu trúc và danh sách đặc thù. Trong mỗi thư mục khách hàng sẽ bao gồm:
    - `docs/`: Chứa các tài liệu hướng dẫn nghiệp vụ và định dạng file mẫu (template) đầu ra cụ thể cho khách hàng đó. Thư mục này chỉ chứa đúng 4 file `.md`: `0.quy_trinh_tao_result.md`, `1.template_output.md`, `2.danh_muc_tai_khoan.md`, `3.danh_muc_doi_tuong.md`.
    - `<Kỳ_kế_toán>/` (VD: `2026.Q1/`): Chứa toàn bộ dữ liệu kế toán thô gốc của khách hàng trong kỳ đó và đồng thời là nơi lưu kết quả xử lý.
  - `scripts/`: Nơi chứa các script Node.js tạm thời dùng để test/chạy tác vụ phụ trợ.

## Quy trình Xử lý Tiêu chuẩn (Workflow)
Khi được yêu cầu chuyển hóa dữ liệu cho một **Mã số thuế (MST)** và một **Kỳ kế toán** cụ thể (Ví dụ: `2026.Q1`), Agent CẦN TUÂN THỦ chuỗi bước sau:
1. Truy cập vào thư mục của kỳ đó (VD: `src/<Mã_số_thuế>/2026.Q1/`). Đọc toàn bộ các file dữ liệu trong thư mục đó để phân tích dữ liệu thô (LOẠI TRỪ các file có tên bắt đầu bằng `0.result.md` hoặc `0.result_*.md`).
2. Đọc TOÀN BỘ 4 file tài liệu chuẩn trong thư mục `src/<Mã_số_thuế>/docs/` để nắm vững 100% logic và cấu trúc đầu ra đặc thù của khách hàng này.
3. Tiến hành chuyển hóa dữ liệu thô thành dữ liệu đích dựa trên logic đã đọc.
4. Xuất file kết quả và lưu vào ngay thư mục kỳ kế toán đang xử lý, tên mặc định là `0.result.md`.

## Quy tắc bắt buộc (Rules)
1. **Bảo vệ dữ liệu gốc:** KHÔNG ĐƯỢC tự ý sửa đổi, ghi đè hay xóa các dữ liệu gốc đầu vào trong thư mục `<Kỳ_kế_toán>/`. Chỉ được phép ĐỌC (Read-only).
2. **Kiểm tra đầu vào (Input Constraint):** Trước khi bắt đầu xử lý, Agent phải kiểm tra xem trong thư mục Kỳ kế toán có đủ các file bắt buộc hay chưa (`1.danh_sach_hoa_don.md`, `2.sao_ke.md`, và các file trong `last_quarter_data/`). Nếu thiếu, BẮT BUỘC DỪNG lại và báo User.
3. **Bảo vệ file mẫu/docs:** KHÔNG ĐƯỢC ghi đè hay làm hỏng các file trong thư mục `docs/`. Tuyệt đối không lưu file `.xls` vào `docs/` trừ khi có yêu cầu chuyển đổi (sau đó phải xóa file `.xls`).
4. **Đọc tài liệu (Docs):** BẮT BUỘC phải đọc TOÀN BỘ các file tài liệu trong thư mục `docs/` của khách hàng tương ứng trước khi thực hiện viết code hay thao tác, để nắm vững 100% quy trình.
5. **Không ghi đè kết quả:** Mọi kết quả đầu ra bắt buộc phải được lưu vào thư mục `<Kỳ_kế_toán>/`. Nếu file `0.result.md` ĐÃ TỒN TẠI, TUYỆT ĐỐI KHÔNG ghi đè, mà phải tạo file với tên tăng dần (ví dụ: `0.result_1.md`, `0.result_2.md`...).
6. **Quy tắc tạo Script tạm:** Tất cả các file Node.js dùng để viết script kiểm tra (test), so sánh, hoặc chạy các tác vụ phụ trợ BẮT BUỘC phải được lưu vào thư mục `scripts/` (ở thư mục gốc). Sau khi chạy xong và hoàn thành luồng công việc, BẮT BUỘC phải tự động xóa toàn bộ các file script tạm này.
