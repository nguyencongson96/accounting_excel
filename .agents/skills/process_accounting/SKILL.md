---
name: process_accounting
description: Trigger this to process accounting data and generate 0.result.md for a specific customer tax code (MST) and quarter. Use this whenever the user wants to process, generate, or create accounting results — even if they say "run accounting", "generate result", "process data", or "tạo kết quả". This is the core accounting engine skill.
---

# Instructions for process_accounting

When triggered to process accounting data for a specific customer (MST) and Quarter:

1. **Prerequisite Check:** Before processing, verify all input files exist in `src/clients/<MST>/<Quarter>/`:
   - `1.danh_sach_hoa_don.md`
   - `2.sao_ke.md`
   - `last_quarter_data/` with all `.md` files inside
   If any are missing, stop and tell the user exactly what's missing.

2. **Read All Docs:** Read ALL 4 files in `src/clients/<MST>/docs/`:
   - `0.quy_trinh_tao_result.md` — The step-by-step processing logic (THIS IS THE MOST IMPORTANT FILE)
   - `1.template_output.md` — Data Dictionary defining the 14-column output structure (A–N). **This is the blueprint for the markdown table header** in `0.result.md`. The template defines the exact column names, order, types, and formatting rules (e.g. spaces in ` NGUYÊN TỆ `, ` THÀNH TIỀN ` must be preserved).
   - `2.danh_muc_tai_khoan.md` — Chart of accounts for this customer
   - `3.danh_muc_doi_tuong.md` — Existing vendor/customer directory

3. **Detect New Tax Codes (MST):** While processing invoices from `1.danh_sach_hoa_don.md`:
   - For every vendor/customer MST encountered, check if it exists in `docs/3.danh_muc_doi_tuong.md`.
   - If NOT found, collect it. After processing all invoices, create `0.danh_muc_doi_tuong.md` in the Quarter folder with ALL new MSTs.
   - Format:
     | STT | Mã đối tượng | Tên đối tượng | Địa chỉ | Mã số thuế | Nhóm đối tượng | Loại đối tượng |
     |:---:|:---|:---|---|:---|:---:|:---:|
   - Rules for filling: `Nhóm đối tượng` = `N002`. `Loại đối tượng`: `1` for customers (Bán ra), `2` for vendors (Mua vào). Name from the invoice's "Tên đối tác" column.

4. **Execute Processing:** Read all input `.md` files from the Quarter folder and `last_quarter_data/`. Follow the logic in `0.quy_trinh_tao_result.md` exactly:
   - Process invoices → Generate PK (Phiếu Kế Toán) entries
   - Process bank statements → Generate BN/BC (Báo Nợ/Báo Có) entries
   - Match payments to invoices
   - Handle insurance, internal transfers, tax adjustments
   - Roll forward opening balances from `last_quarter_data/`

5. **Draft Result — Based on Template:** 
   - **Read `1.template_output.md`** and parse the Data Dictionary table (the "Bảng Cấu trúc Cột" section). Extract the exact column order, names (including trailing/leading spaces), and formatting rules from columns A through N.
   - Build the markdown table header for `0.result.md` using these 14 columns in this exact order (mapping the Excel columns to markdown pipe-delimited columns):
     `MÃ CHỨNG TỪ | NGÀY GHI SỔ | SỐ CHỨNG TỪ | BỘ PHẬN | HỢP ĐỒNG | MÃ SẢN PHẨM CÔNG TRÌNH | MÃ ĐỐI TƯỢNG | DIỄN GIẢI | TÀI KHOẢN NỢ | TÀI KHOẢN CÓ | MÃ TIỀN TỆ | TỶ GIÁ |  NGUYÊN TỆ  |  THÀNH TIỀN  |`
     - Column I (`TÀI KHOẢN`) = `TÀI KHOẢN NỢ`
     - Column J (`&nbsp;`) = `TÀI KHOẢN CÓ`
     - Columns M and N: preserve the leading/trailing spaces exactly as in the template (` NGUYÊN TỆ `, ` THÀNH TIỀN `)
   - Then add the standard markdown table delimiter row: `|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|`
   - Write output to `0.result.md` in the Quarter folder.
   - **CRITICAL SAFETY RULE:** If `0.result.md` already exists, NEVER overwrite it. Save as `0.result_1.md`, `0.result_2.md`, etc. (find the next available number).
   - Every data row must follow the column structure defined in `1.template_output.md`: no extra columns, no missing columns, no reordering.

6. **Human-in-the-Loop:** Display a preview of the generated data using Markdown tables (show first ~10 rows + summary stats: total rows, total debit/credit amounts). Then explicitly ask: *"Dữ liệu đã được xử lý xong. Bạn có muốn duyệt và xác nhận kết quả này không?"*

7. **Recommend Validation:** After the user approves, suggest: *"Bạn có muốn tôi kiểm tra chéo file kết quả với dữ liệu gốc (check_result) để đảm bảo không thiếu sót gì không?"*
