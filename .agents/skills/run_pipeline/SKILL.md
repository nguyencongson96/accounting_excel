---
name: run_pipeline
description: Run the full automated pipeline (verify -> convert excel to md -> process accounting) for a specific customer and quarter.
---

# Instructions for run_pipeline

This is the Master Orchestration Skill. When triggered to run the pipeline for a specific customer (MST) and Quarter, you MUST autonomously execute the full 3-step workflow in order without needing the user to prompt for each step.

1. **Step 1: Verify Data**
   - Execute the logic defined in the `verify_data` skill.
   - Scan `src/<MST>/<Quarter>/` and `docs/`.
   - If mandatory `.md` files are missing BUT unconverted `.xls` or `.xlsx` files exist, DO NOT stop. Proceed immediately to Step 2.
   - If files are completely missing (no `.md` and no Excel files), stop the pipeline and alert the user.

2. **Step 2: Convert Excel to MD (if needed)**
   - If unconverted Excel files were found in Step 1, automatically invoke the logic of the `excel_to_md` skill to convert them.
   - Convert all `.xls` and `.xlsx` files into `.md` format.
   - After conversion, briefly re-verify that the required `.md` files (`1.danh_sach_hoa_don.md`, `2.sao_ke.md`, etc.) now exist.

3. **Step 3: Process Accounting**
   - Once all mandatory `.md` files are confirmed present, execute the logic defined in the `process_accounting` skill.
   - Read `0.quy_trinh_tao_result.md` for the customer.
   - Process the data and output the draft `result_x.md` to the Quarter folder.
   - Pause and display a Markdown table preview of the generated data to the user for final approval.

By following this pipeline, you ensure a seamless, one-click experience from raw Excel files to the final accounting result.
