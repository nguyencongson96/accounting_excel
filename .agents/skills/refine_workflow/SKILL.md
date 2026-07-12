---
name: refine_workflow
description: Run automated accounting process, compare against existing historical 0.result.md, and iteratively refine the 0.quy_trinh_tao_result.md rule file. Use this whenever the user wants to improve, refine, perfect, or "train" the accounting rules — even if they say "cập nhật quy trình", "refine process", "improve accuracy", or "make the automation match the manual result". This is the continuous improvement engine.
---

# Instructions for refine_workflow

This is the primary workflow for establishing and perfecting the `0.quy_trinh_tao_result.md` rule file using historical data as the ground truth.

When triggered to refine the workflow for a specific customer (MST) and Quarter:

1. **Check for Ground Truth:** Ensure that the original/historical `0.result.md` file exists in `src/clients/<MST>/<Quarter>/`. This acts as your ground truth. Also check for `0.danh_muc_doi_tuong.md` if it exists.

2. **Execute Headless Processing:** Run the accounting automation logic (same as `process_accounting`) based entirely on the CURRENT logic in `src/clients/<MST>/docs/0.quy_trinh_tao_result.md`. Output the generated data to a temporary file (do NOT overwrite the ground truth).

3. **Compare and Audit:** Compare the newly generated data against the historical `0.result.md` ground truth:
   - Line-by-line comparison of all rows
   - Column-by-column comparison: MÃ CHỨNG TỪ, NGÀY GHI SỔ, SỐ CHỨNG TỪ, MÃ ĐỐI TƯỢNG, DIỄN GIẢI, TÀI KHOẢN NỢ/CÓ, THÀNH TIỀN
   - Also compare `0.danh_muc_doi_tuong.md` if generated — are all new MSTs correctly identified?

4. **Generate Discrepancy Report:** 
   - List ALL discrepancies in a structured Markdown table: Row #, Column, Expected (ground truth), Got (generated), Status
   - Categorize by type: missing rows, extra rows, wrong amounts, wrong account codes, wrong dates, description differences, wrong MST mappings
   - Calculate match percentage: `(matching_rows / total_ground_truth_rows) * 100%`

5. **Prompt for Rule Update:** Ask the user: 
   *"Tỷ lệ khớp hiện tại là X%. Dựa trên các chênh lệch trên, bạn có muốn tôi tự động phân tích lý do và cập nhật `0.quy_trinh_tao_result.md` để lần sau đạt độ chính xác cao hơn không?"*

6. **Apply Updates:** If the user agrees:
   - For each discrepancy, analyze WHY it happened (missing rule? wrong mapping? edge case not handled?)
   - Infer the implicit accounting rule that was applied in the ground truth
   - Update `src/clients/<MST>/docs/0.quy_trinh_tao_result.md` with the new rules, clearly documented under the appropriate section
   - Re-run the comparison to verify the fix improved the match rate
