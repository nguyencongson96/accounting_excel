# Agent Rules & Memory

File này chứa các quy tắc và thông tin bối cảnh (memory) mà AI phải đọc và tuân thủ trước khi thực hiện bất kỳ hành động nào trong dự án này.

## Ngữ cảnh Dự án (Context)
- **Mục đích dự án:** Tự động hóa quá trình chuyển hóa dữ liệu thô kế toán thành file Excel chuẩn để nhập liệu (import) lên phần mềm kế toán EZSOFT / 3TSoft.
- **Hệ thống Skills:** Dự án sử dụng 7 skills chính trong `.agents/skills/` để tự động hóa từng bước. Khi cần thực hiện một tác vụ cụ thể, hãy tham chiếu skill tương ứng thay vì làm thủ công:
  - `run_pipeline` → Chạy toàn bộ pipeline (verify → convert → process)
  - `verify_data` → Kiểm tra dữ liệu đầu vào
  - `excel_to_md` → Chuyển đổi Excel → Markdown
  - `md_to_excel` → Chuyển đổi Markdown → Excel (tổng quát: mọi bảng MD, hoặc chuyên biệt: 0.result.md → Excel template)
  - `process_accounting` → Xử lý kế toán & sinh 0.result.md
  - `check_result` → Kiểm tra & đối chiếu file 0.result.md sau xử lý
  - `refine_workflow` → So sánh & cập nhật quy trình
  - `init_customer` → Khởi tạo khách hàng mới
- **Cấu trúc thư mục cốt lõi:**
  - **`src/clients/<Mã_số_thuế>/`**: Mỗi khách hàng (đại diện bằng Mã số thuế) sẽ có một thư mục riêng biệt. Trong mỗi thư mục khách hàng bao gồm:
    - `docs/`: Chứa 4 file tài liệu `.md`: `0.quy_trinh_tao_result.md`, `1.template_output.md`, `2.danh_muc_tai_khoan.md`, `3.danh_muc_doi_tuong.md`.
    - `<Kỳ_kế_toán>/` (VD: `2026.Q1/`): Chứa dữ liệu thô và kết quả xử lý của kỳ đó.
      - `last_quarter_data/`: Chứa dữ liệu kỳ trước (số dư, bảng kê chứng từ, tổng hợp công nợ).
  - `scripts/`: Script Node.js tiện ích (không phải script tạm — các script tạm vẫn lưu ở đây và phải xóa sau khi dùng).
  - `.agents/skills/`: Chứa các skill definitions và script cố định (VD: `excel_to_md/scripts/excel_to_md.js`).

## Quy trình Xử lý Tiêu chuẩn (Workflow)
Khi được yêu cầu xử lý dữ liệu cho một **Mã số thuế (MST)** và **Kỳ kế toán**, sử dụng skill `run_pipeline` để chạy tự động 3 bước:
1. **Verify:** Kiểm tra file bắt buộc (`1.danh_sach_hoa_don.md`, `2.sao_ke.md`, `last_quarter_data/*.md`). Nếu thiếu file `.md` nhưng có file `.xls`/`.xlsx`, tiếp tục bước 2.
2. **Convert:** Dùng `excel_to_md` skill để chuyển đổi các file Excel sang Markdown.
3. **Process:** Đọc toàn bộ `docs/` (đặc biệt `0.quy_trinh_tao_result.md`), xử lý dữ liệu, sinh `0.result.md`. Nếu phát hiện MST đối tác mới, đồng thời tạo `0.danh_muc_doi_tuong.md`.

## Quy tắc bắt buộc (Rules)
1. **Bảo vệ dữ liệu gốc:** KHÔNG ĐƯỢC tự ý sửa đổi, ghi đè hay xóa các dữ liệu gốc đầu vào trong thư mục `<Kỳ_kế_toán>/`. Chỉ được phép ĐỌC (Read-only).
2. **Kiểm tra đầu vào:** Trước khi xử lý, phải kiểm tra đủ các file bắt buộc. Nếu thiếu, BẮT BUỘC DỪNG và báo User.
3. **Bảo vệ file docs:** KHÔNG ĐƯỢC ghi đè hay làm hỏng các file trong `docs/`. Không lưu file `.xls` vào `docs/`.
4. **Đọc toàn bộ docs:** BẮT BUỘC đọc TOÀN BỘ 4 file trong `docs/` trước khi xử lý.
5. **Không ghi đè kết quả:** Nếu `0.result.md` ĐÃ TỒN TẠI, tạo file tăng dần: `0.result_1.md`, `0.result_2.md`...
6. **Script tạm:** Tất cả script test/chạy tạm BẮT BUỘC lưu vào `scripts/` và PHẢI xóa sau khi hoàn thành.
7. **Phát hiện MST mới:** Trong quá trình xử lý hóa đơn, nếu phát hiện MST đối tác chưa có trong `docs/3.danh_muc_doi_tuong.md`, PHẢI tạo file `0.danh_muc_doi_tuong.md` trong thư mục Kỳ kế toán với đầy đủ các cột: STT, Mã đối tượng, Tên đối tượng, Địa chỉ, Mã số thuế, Nhóm đối tượng (N002), Loại đối tượng (1=Khách hàng, 2=Nhà cung cấp).
8. **Không viết script inline trong command line:** Nghiêm cấm viết code trực tiếp trong dòng lệnh (VD: `node -e "code..."`, `python -c "code..."`, PowerShell one-liner dài). Bash dễ bị lỗi với ký tự đặc biệt (`!`, `$`, backtick)... Luôn viết script vào file `.js`/`.py` trong `scripts/` trước, sau đó mới chạy file đó.
