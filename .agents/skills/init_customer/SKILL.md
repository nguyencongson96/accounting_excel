---
name: init_customer
description: Create a standard folder structure and empty markdown templates for a new customer tax code (MST).
---

# Instructions for init_customer

When triggered to initialize or create a new customer workspace, follow these steps strictly:

1. **Identify the Customer Tax Code (MST):** Extract the MST from the user's prompt.
2. **Create Directories:**
   - Go to `src/` and create a directory named after the `<MST>`.
   - Inside `src/<MST>/`, create a subdirectory named `docs/`.
3. **Generate Standard Template Files:**
   - Inside `src/<MST>/docs/`, create the following 4 files. If they don't have predefined content, create them as empty files or with a basic markdown title:
     - `0.quy_trinh_tao_result.md`
     - `1.template_output.md`
     - `2.danh_muc_tai_khoan.md`
     - `3.danh_muc_doi_tuong.md`
4. **Completion:** Notify the user that the customer `<MST>` has been successfully initialized and is ready for data ingestion in the quarter folders.
