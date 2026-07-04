---
name: refine_workflow
description: Run automated accounting process, compare against existing historical 0.result.md, and iteratively refine the 0.quy_trinh_tao_result.md rule file.
---

# Instructions for refine_workflow

This is the primary workflow for establishing and perfecting the `0.quy_trinh_tao_result.md` rule file using historical data as the ground truth.

When triggered to refine the workflow for a specific customer (MST) and Quarter:

1. **Check for Ground Truth:** Ensure that the original/historical `0.result.md` file exists in the `src/<MST>/<Quarter>/` directory. This acts as your ground truth.
2. **Execute Headless Processing:** Run the accounting automation logic (similar to `process_accounting`) based entirely on the CURRENT logic defined in `src/<MST>/docs/0.quy_trinh_tao_result.md`. Output the generated data to memory or a temporary scratch file (do not overwrite the ground truth).
3. **Compare and Audit:** Compare the newly generated data against the historical `0.result.md` ground truth. Perform a strict line-by-line and column-by-column comparison.
4. **Generate Discrepancy Report:** 
   - Identify all discrepancies (e.g., missing records, incorrect amounts, wrong account codes, slight differences in descriptions).
   - If there are differences, list them in a clear, structured Markdown Table in the chat.
5. **Prompt for Rule Update:** Ask the user: 
   *"Dựa trên sự chênh lệch này, bạn có muốn tôi tự động phân tích lý do và viết thêm luật (cập nhật lại file `0.quy_trinh_tao_result.md`) để lần sau hệ thống tự động xử lý chuẩn xác 100% không?"*
6. **Apply Updates:** If the user agrees, analyze why the discrepancy happened, infer the implicit accounting rule that was missed, and use `replace_file_content` to inject the new rule into `src/<MST>/docs/0.quy_trinh_tao_result.md`.
