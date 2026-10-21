---
name: process_accounting
description: Process accounting data and generate 0.result.md by reasoning through each entry from customer-specific rules and source evidence, without an accounting generation script. Use this whenever the user wants to process, generate, or create accounting results — even if they say "run accounting", "generate result", "process data", or "tạo kết quả".
---

# Instructions for process_accounting

## Accounting Execution Method

Agent trực tiếp đọc chứng từ và xác định từng bút toán. Không chạy `scripts/process_accounting.js`, `scripts/process.py` hoặc bất kỳ script sinh/hạch toán bút toán nào, kể cả dry-run. Không tạo script hạch toán tạm để thay thế việc suy luận nghiệp vụ.

Công cụ chỉ hỗ trợ thao tác cơ học như chuyển đổi/đọc file, tính toán, kiểm tra bảng, ghi dữ liệu đã được Agent xác định hoặc xuất Excel. Không giao cho script việc chọn tài khoản, đối tượng, phân loại giao dịch, quyết định thanh toán hay trích lập định kỳ.

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

4. **Establish Opening Debts, Then Review Each Entry:** Before matching any receipt/payment, read [Công nợ đầu kỳ và phân bổ thanh toán](references/cong_no_dau_ky.md), establish balances by counterparty at the exact quarter opening date, and save the opening/settlement/closing reconciliation alongside the result. This is required even when the current invoice file does not contain the prior-period invoices. If source data cannot establish an opening balance, mark it unresolved rather than assuming zero. Read all source `.md` files from the Quarter folder and `last_quarter_data/`, distinguishing source documents from existing generated results. Follow the customer's `0.quy_trinh_tao_result.md` together with the user's current instructions:
   - Đọc đầy đủ dữ liệu, chia thành từng nhóm nếu lớn; không chỉ xem vài dòng mẫu rồi áp dụng một định khoản chung cho toàn bộ file. Theo dõi những dòng nguồn đã xem và những nghiệp vụ còn chờ xử lý.
   - Với từng hóa đơn/giao dịch, xác định bản chất nghiệp vụ, kỳ ghi nhận, số tiền có dấu và trạng thái điều chỉnh/hủy/thay thế. Phân biệt phát sinh doanh thu/chi phí với thu/chi thanh toán cho nghiệp vụ đã ghi nhận.
   - **Hóa đơn bị thay thế:** Kiểm tra trạng thái hóa đơn và liên kết giữa hóa đơn gốc với hóa đơn thay thế bằng các trường/thông tin tham chiếu trên chứng từ, dữ liệu hóa đơn điện tử và quy trình của khách hàng. Khi có đủ căn cứ xác nhận hóa đơn gốc đã bị thay thế, không hạch toán hóa đơn gốc; xem xét hạch toán hóa đơn thay thế một lần theo kỳ ghi nhận và quy trình khách hàng, tránh ghi nhận đồng thời cả hai hóa đơn. Không suy ra quan hệ thay thế chỉ từ số tiền hoặc nội dung giống nhau. Nếu trạng thái hoặc cặp hóa đơn chưa xác định được, không tự chọn hóa đơn để hạch toán; ghi rõ các hóa đơn liên quan là chưa xử lý được, nêu chứng từ/thông tin còn thiếu và tiếp tục các nghiệp vụ độc lập khác. Nếu hóa đơn gốc đã được hạch toán ở kỳ trước, không âm thầm bỏ qua ảnh hưởng kỳ trước; xử lý điều chỉnh/reversal theo chứng từ và quy trình riêng của khách hàng.
   - Chọn tài khoản Nợ/Có và mã đối tượng theo quy trình, danh mục riêng của khách hàng và chứng từ. Xác định tài khoản ngân hàng theo từng sao kê/tài khoản thực tế.
   - Với mỗi bút toán phát sinh từ hóa đơn đầu ra (Bán ra), giữ nguyên văn nội dung ở cột diễn giải của hóa đơn trong `DIỄN GIẢI` của kết quả. Không tự viết lại, rút gọn, chuẩn hóa, thêm diễn giải kế toán hoặc thay đổi cách dùng từ khi nội dung gốc không quá 200 ký tự. Nếu nội dung gốc vượt 200 ký tự, chỉ chỉnh sửa tối thiểu để còn không quá 200 ký tự; giữ lại bản chất giao dịch và các thông tin phân biệt quan trọng như tên hàng hóa/dịch vụ, mã hoặc số tham chiếu. Không thêm nội dung không có trên hóa đơn. Quy tắc này áp dụng cho các dòng hạch toán trực tiếp từ hóa đơn đầu ra và được ưu tiên nếu quy trình riêng chỉ dẫn viết lại diễn giải; các dòng điều chỉnh riêng vẫn theo căn cứ chứng từ và quy trình khách hàng.
   - Đối chiếu thanh toán bằng đối tác, nội dung, số hóa đơn, ngày, số tiền và công nợ kỳ trước. Theo dõi số tiền đã phân bổ và số tiền còn lại; xem xét trả một phần, thanh toán gộp và trả công nợ kỳ trước. Không chỉ ghép theo số tiền hoặc dùng lại phần công nợ đã tất toán.
   - **Thu tiền mặt từ khách hàng (PT, Nợ 1111/Có 131):** Chỉ ghi nhận khi có chứng từ hoặc bằng chứng đáng tin cậy, rõ ràng xác nhận khách hàng đã thực giao tiền mặt cho đơn vị và xác định được số tiền/ngày thu, chẳng hạn phiếu thu hoặc sổ quỹ có căn cứ. Hóa đơn, công nợ phải thu, lịch thanh toán dự kiến, hay việc không thấy khoản tiền trên sao kê ngân hàng không tự chứng minh đã thu tiền mặt. Khi thiếu chứng từ rõ ràng, không tạo bút toán PT 1111/131 và không giảm công nợ; đánh dấu khoản thu/trạng thái thanh toán chưa xác định, nêu rõ bằng chứng cần bổ sung. Nếu bằng chứng cho thấy khách thanh toán qua ngân hàng, hạch toán theo giao dịch ngân hàng thực tế, không ghi thêm PT.
   - Dựng chi tiết các hóa đơn còn nợ đầu kỳ của từng đối tác theo hướng dẫn công nợ. Tổng dư đầu kỳ có thể gồm nhiều hóa đơn; từng khoản thu cần đối chiếu hóa đơn được trả và cập nhật số còn nợ của hóa đơn đó. Nếu chỉ xác định được đối tác, giữ khoản thu chưa phân bổ hóa đơn riêng; không coi đối soát chi tiết đã hoàn thành.
   - Xem xét riêng bảo hiểm, lương, thuế, lãi, hoàn tiền, đặt cọc, chuyển nội bộ và doanh thu sàn theo bằng chứng thực tế và quy trình khách hàng; không áp dụng mã đối tượng, mức tiền hay tài khoản cố định từ script dùng chung.
   - Kiểm tra số dư đầu kỳ và phạm vi ngày của dữ liệu lịch sử trước khi dùng cho công nợ hoặc số chứng từ. Tham khảo kết quả cũ nhưng không coi mọi bút toán cũ là đúng.
   - Giữ tham chiếu file/dòng nguồn và căn cứ nghiệp vụ ngắn cho các bút toán đã xác định để phục vụ đối chiếu; đây không phải yêu cầu xuất suy nghĩ nội bộ. Một nghiệp vụ có thể cần nhiều dòng định khoản và một thanh toán có thể liên quan nhiều hóa đơn.
   - Nếu quy trình mâu thuẫn với dữ liệu, thiếu căn cứ hoặc còn nhiều cách định khoản hợp lý, ghi rõ nghiệp vụ chưa xác định và hỏi thông tin cần thiết. Tiếp tục xử lý các nghiệp vụ độc lập đã đủ căn cứ; không tự thêm quy tắc để ép hoàn thành.

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

6. **Validate Automatically:** Execute `check_result` against the exact newly generated result file before requesting review. Reconcile the entries with their source references, payment allocations and customer-specific rules. Do not claim a complete or valid result while source transactions remain unresolved. When called by `run_pipeline`, return the validation findings for its Step 4 without running the same validation twice.

7. **Human Review:** Display the first ~10 rows, total rows, counts by voucher type (including PT if present), total debit/credit amounts, validation findings and any unresolved source transactions. Present the concrete result for review after processing and validation are complete.
