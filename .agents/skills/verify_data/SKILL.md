---
name: verify_data
description: Scan a customer's quarter folder to verify all mandatory markdown files exist and check for unconverted excel files. Use this whenever the user wants to check, verify, scan, or validate data before processing — even if they say "kiểm tra dữ liệu", "check files", "is the data ready?", or "verify input". This is the gatekeeper step before any accounting processing.
---

# Instructions for verify_data

When triggered to verify data for a specific customer tax code (MST) and quarter:

1. **Navigate to the Target Directories:** Go to `src/clients/<MST>/<Quarter>/` and `src/clients/<MST>/docs/`.

2. **Check Mandatory Input Files:** Verify existence of:
   - `src/clients/<MST>/<Quarter>/1.danh_sach_hoa_don.md`
   - `src/clients/<MST>/<Quarter>/2.sao_ke.md`
   - `src/clients/<MST>/<Quarter>/last_quarter_data/` (must contain at least one `.md` file — read what's actually there since file names may vary by customer)

3. **Check Docs Files:** Verify existence of:
   - `src/clients/<MST>/docs/0.quy_trinh_tao_result.md`
   - `src/clients/<MST>/docs/1.template_output.md`
   - `src/clients/<MST>/docs/2.danh_muc_tai_khoan.md`
   - `src/clients/<MST>/docs/3.danh_muc_doi_tuong.md`

4. **Check Existing Output Files:** Note if any of these already exist (to avoid overwrites):
   - `0.result.md` or any `0.result_*.md` files — tells you if processing was already done
   - `0.danh_muc_doi_tuong.md` — tells you if new MSTs were already detected

5. **Scan for Unconverted Excel Files:** Scan ALL directories (`src/clients/<MST>/<Quarter>/`, its subdirectories, and `src/clients/<MST>/docs/`) for `.xls` or `.xlsx` files.

6. **Report Generation:** 
   - Present a Markdown checklist with ✅/❌ indicators showing:
     - Which mandatory files are present/missing
     - Which docs files are present/missing
     - Which output files already exist (and their names)
     - Which Excel files need conversion
   - If any mandatory file is missing AND no corresponding Excel file exists to convert, warn: *"Không thể tiếp tục — thiếu file bắt buộc và không có file Excel để chuyển đổi."*
   - If unconverted Excel files are found, prompt: *"Phát hiện file Excel chưa chuyển đổi. Bạn có muốn chạy excel_to_md để convert trước khi xử lý không?"*
