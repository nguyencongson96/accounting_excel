---
name: verify_data
description: Scan a customer's quarter folder to verify all mandatory markdown files exist and check for unconverted excel files.
---

# Instructions for verify_data

When triggered to verify data for a specific customer tax code (MST) and quarter:

1. **Navigate to the Target Directories:** Go to `src/<MST>/<Quarter>/` and `src/<MST>/docs/`.
2. **Check Mandatory Files:** Verify the existence of the following exact files:
   - `src/<MST>/<Quarter>/1.danh_sach_hoa_don.md`
   - `src/<MST>/<Quarter>/2.sao_ke.md`
   - `src/<MST>/<Quarter>/last_quarter_data/0.bang_can_doi_phat_sinh.md`
   - `src/<MST>/<Quarter>/last_quarter_data/1.bang_ke_chung_tu.md`
   - `src/<MST>/<Quarter>/last_quarter_data/2.so_tong_hop_phai_thu_khach_hang.md`
   - `src/<MST>/docs/1.template_output.md`
   - `src/<MST>/docs/2.danh_muc_tai_khoan.md`
   - `src/<MST>/docs/3.danh_muc_doi_tuong.md`
3. **Scan for Unconverted Excel Files:** Scan `src/<MST>/<Quarter>/` and its subdirectories, as well as `src/<MST>/docs/` for any `.xls` or `.xlsx` files.
4. **Report Generation:** 
   - Present a Markdown checklist (green/red) to the user showing which mandatory files are present and which are missing.
   - If missing files are found, explicitly warn the user that the process cannot continue until they are provided.
   - If unconverted Excel files are found, list them out and prompt the user: *"Do you want to run excel_to_md to convert these files before processing?"*
