---
name: init_customer
description: Create a standard folder structure and initialized markdown templates for a new customer tax code (MST). Use this whenever setting up a new customer, initializing a workspace, or adding a new tax code to the system — even if the user just mentions a new MST or says they want to "add a customer" or "set up" someone new.
---

# Instructions for init_customer

When triggered to initialize or create a new customer workspace, follow these steps strictly:

1. **Identify the Customer Tax Code (MST):** Extract the MST from the user's prompt. If the user also provides the customer's business name, note it for use in templates.
2. **Create Directories:**
   - Go to `src/` and create a directory named after the `<MST>`.
   - Inside `src/<MST>/`, create a subdirectory named `docs/`.
3. **Generate Standard Template Files** with meaningful starter content (NOT empty files):
   - **`0.quy_trinh_tao_result.md`**: Create with this skeleton structure:
     ```markdown
     # Quy trình xử lý dữ liệu kế toán (Tạo file 0.result.md)
     
     Tài liệu này mô tả logic và các bước xử lý dữ liệu thô thành file `0.result.md`.
     
     ## 1. Dữ liệu đầu vào (Input)
     - **`1.danh_sach_hoa_don.md`**: danh sách hóa đơn mua vào, bán ra
     - **`2.sao_ke.md`**: sao kê ngân hàng
     - **`last_quarter_data/0.bang_can_doi_phat_sinh.md`**: số dư đầu kỳ
     - **`last_quarter_data/1.bang_ke_chung_tu.md`**: bút toán kỳ trước
     - **`last_quarter_data/2.so_tong_hop_phai_thu_khach_hang.md`**: tổng hợp công nợ
     
     ## 2. Cấu trúc file kết quả (Output)
     Các cột: `MÃ CHỨNG TỪ` | `NGÀY GHI SỔ` | `SỐ CHỨNG TỪ` | `BỘ PHẬN` | `HỢP ĐỒNG` | `MÃ SẢN PHẨM CÔNG TRÌNH` | `MÃ ĐỐI TƯỢNG` | `DIỄN GIẢI` | `TÀI KHOẢN (NỢ/CÓ)` | `MÃ TIỀN TỆ` | `TỶ GIÁ` | `NGUYÊN TỆ` | `THÀNH TIỀN`
     
     ## 3. Logic chuyển đổi dữ liệu (Mapping Logic)
     *(Điền logic đặc thù của khách hàng này tại đây)*
     
     ### 3.1. Luồng xử lý Hóa Đơn
     ### 3.2. Luồng xử lý Sao kê Ngân Hàng
     ### 3.3. Luồng xử lý Thanh toán
     ```
   - **`1.template_output.md`**: Create with the standard column structure (Data Dictionary) matching the expected Excel import format:
     ```markdown
     # Cấu trúc Template File Kết quả (result.xlsx)
     
     | STT (Cột) | Tên Cột Excel | Kiểu dữ liệu | Bắt buộc | Mô tả & Quy tắc |
     |:---:|:---|:---|:---:|:---|
     | A | `MÃ CHỨNG TỪ` | String (Enum) | Có | PK/BN/BC/PC |
     | B | `NGÀY GHI SỔ` | Date/Number | Có | DD/MM/YYYY |
     | C | `SỐ CHỨNG TỪ` | Number | Có | Tăng dần liên tục |
     | D | `BỘ PHẬN` | Number | Có | 1=Chính, 0=Thuế |
     | E | `HỢP ĐỒNG` | String | Không | Để trống |
     | F | `MÃ SẢN PHẨM CÔNG TRÌNH` | String | Không | Để trống |
     | G | `MÃ ĐỐI TƯỢNG` | String | Có | MST đối tác |
     | H | `DIỄN GIẢI` | String | Có | Tối đa 200 ký tự |
     | I | `TÀI KHOẢN` | Number | Có | TK Nợ |
     | J | *(trống)* | Number | Có | TK Có |
     | K | `MÃ TIỀN TỆ` | String | Có | VND |
     | L | `TỶ GIÁ` | Number | Có | 1 |
     | M | ` NGUYÊN TỆ ` | Number | Có | Số tiền |
     | N | ` THÀNH TIỀN ` | Number | Có | Số tiền VND |
     ```
   - **`2.danh_muc_tai_khoan.md`**: Create with a placeholder note:
     ```markdown
     # Danh mục Tài khoản
     
     > File này chứa danh mục tài khoản kế toán của khách hàng, export từ phần mềm EZSOFT/3TSoft.
     > Vui lòng thay thế nội dung này bằng file Excel danh mục tài khoản đã được convert sang Markdown.
     
     | Số hiệu | Tên | Mẹ | Ngoại tệ | Lưỡng tính | Bộ phận | Hợp đồng | Đối tượng | Khoản vay | Giá thành | Sổ cái | Khoản mục | VAT | Cấp | Tên tài khoản tiếng Anh |
     | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
     | *(Chưa có dữ liệu)* |
     ```
   - **`3.danh_muc_doi_tuong.md`**: Create with a placeholder note:
     ```markdown
     # Danh mục Đối tượng
     
     > File này chứa danh mục đối tượng (khách hàng, nhà cung cấp) của khách hàng, export từ phần mềm EZSOFT/3TSoft.
     > Vui lòng thay thế nội dung này bằng file Excel danh mục đối tượng đã được convert sang Markdown.
     
     | Mã | Tên | Địa chỉ | Mã số thuế | Mã nhóm | Đối tác | Điện thoại | Số TK NH | Ngân hàng |
     | --- | --- | --- | --- | --- | --- | --- | --- | --- |
     | *(Chưa có dữ liệu)* |
     ```
4. **Completion:** Notify the user that the customer `<MST>` has been initialized with template files. Remind them to:
   - Copy the Excel files for `2.danh_muc_tai_khoan` and `3.danh_muc_doi_tuong` into `docs/` and convert them to Markdown (or use `excel_to_md` skill).
   - Customize `0.quy_trinh_tao_result.md` with the customer's specific accounting rules.
   - Create a quarter folder (e.g., `2026.Q1/`) and place input data files there.
