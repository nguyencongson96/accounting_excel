---
name: process_accounting
description: Trigger this to process accounting data and generate 0.result.md for a specific customer tax code (MST) and quarter.
---

# Instructions for process_accounting

When triggered to process accounting data for a specific customer (MST) and Quarter:

1. **Prerequisite Check:** Before processing, you MUST verify that all input requirements are met (using the `verify_data` logic). If constraints fail, stop and ask the user to fix the data.
2. **Read Logic Docs:** You MUST read the `src/<MST>/docs/0.quy_trinh_tao_result.md` to understand the exact processing workflow and mapping logic for this specific customer. Also, read the templates and category files in the `docs/` folder.
3. **Execute Processing:** Read the input `.md` files from the Quarter folder and `last_quarter_data/`. Execute the data mapping and transformations exactly as described in the `0.quy_trinh_tao_result.md` document.
4. **Draft Result:** 
   - Write the outcome to a temporary draft file in the Quarter folder named `0.result.md`. 
   - **CRITICAL SAFETY RULE:** If `0.result.md` already exists, you MUST NOT overwrite it. Save the file with an incrementing number, e.g., `0.result_1.md`, `0.result_2.md`.
5. **Human-in-the-Loop:** Display a preview of the generated data to the user in the chat using Markdown tables. Pause your execution and explicitly ask the user for confirmation/approval of the data before finalizing.
