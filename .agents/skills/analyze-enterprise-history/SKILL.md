---
name: analyze-enterprise-history
description: Phân tích lịch sử doanh nghiệp từ 3TSoft để lập quy trình và mẫu diễn giải; hoặc đối chiếu kết quả lịch sử với chứng từ để cải thiện quy trình riêng của doanh nghiệp/HKD. Không tự ghi SQL hoặc ghi đè kết quả lịch sử.
---

# Phân tích lịch sử hạch toán doanh nghiệp

Tạo hoặc cập nhật `src/clients/<MST>/docs/` để hỗ trợ hạch toán các kỳ sau từ sao kê, hóa đơn và bảng lương khi có. Đúc kết quy tắc từ dữ liệu của chính khách hàng, phân biệt **mẫu đã quan sát**, **quyết định đã được người dùng xác nhận** và **điểm còn chờ quyết định**. Không sinh `0.result.md` hoặc ghi dữ liệu SQL chỉ vì đang xây dựng quy trình.

## Chọn chế độ

- Xây bộ tài liệu từ lịch sử SQL: chỉ doanh nghiệp, theo các mục dưới đây.
- Đối chiếu và cải thiện quy trình từ kết quả lịch sử: doanh nghiệp hoặc HKD, đọc [hướng dẫn đối chiếu](references/refine-customer-workflow.md). Chế độ này giữ cấu trúc và quy tắc riêng của HKD, không tạo bộ module doanh nghiệp cho HKD.

## Xác định khách hàng và nguồn

1. Đọc hướng dẫn workspace, `src/clients/AGENTS.md` nếu có và `docs/3tsoft-databases.md`. Chỉ xử lý doanh nghiệp trong phạm vi người dùng yêu cầu; không suy loại khách hàng từ độ dài MST. Nếu là hộ kinh doanh, giữ quy trình hiện hành. Khách hàng mới chưa có ánh xạ cần tên, MST và database xác định; thiếu thông tin quyết định thì hỏi, không đoán database từ MST hoặc lấy thư mục công ty khác làm cấu hình.
2. Dùng skill `connect-3tsoft` tại `../connect-3tsoft/SKILL.md` để xác định kết nối, xác thực và kiểm tra schema. Không sao chép mật khẩu vào skill này, script mới hoặc tài liệu khách hàng. Xác nhận database thực tế, đơn vị, trạng thái ghi sổ, phạm vi ngày và tiền tệ trước khi phân tích. Tên/MST EZSOFT trong DmDvcs có thể là metadata mẫu; cần kiểm tra chéo theo hướng dẫn kết nối. Tên pháp lý khác nhau phải ghi rõ và hỏi nếu chưa được xác nhận; giữ nguyên bằng chứng SQL khi lưu quyết định tên hiện hành.
3. Đọc tài liệu và quyết định đã có của khách hàng trước khi cập nhật. Chỉ tạo thư mục còn thiếu; không tạo quý khi chưa được yêu cầu. Không bắt buộc hoặc tạo `last_quarter_data/`, file danh mục tài khoản/đối tượng export. Đọc danh mục, số dư và chi tiết cần thiết từ SQL. Không xóa file cũ hoặc ghi đè quy tắc đã được người dùng chốt bằng một snapshot mới.

## Phân tích sổ và logic

Đọc [references/analysis-and-deliverables.md](references/analysis-and-deliverables.md) khi bắt đầu truy vấn và lập tài liệu; tài liệu này quy định bằng chứng cần thu thập và trách nhiệm từng module.

- Tổng hợp toàn bộ phạm vi lịch sử được phép trước: theo đơn vị, năm/kỳ, trạng thái, loại chứng từ và cặp tài khoản. Tách dòng tương lai theo ngày người dùng hoặc ngày phân tích; không mặc định số doanh nghiệp, mã đơn vị hay Posted từ lần chạy cũ.
- Chọn ví dụ theo từng cặp/nhóm, gồm mẫu gần nhất, thường gặp, ngoại lệ và các bước liên quan của một chứng từ. Đọc mở rộng khi mẫu chưa giải thích được chuỗi; công khai phạm vi lấy mẫu, không gọi lấy mẫu là kiểm toán từng chứng từ gốc.
- Agent trực tiếp phân tích điều kiện nhận diện, chứng từ cần có, tài khoản, đối tượng, bộ phận/công trình, cách xác định số tiền, kỳ ghi nhận, luồng thanh toán/ứng trước/trích trước và cách chống trùng. Script chỉ SELECT, tổng hợp, kiểm tra hoặc ghi nhận định đã được Agent xác định; không giao script quyết định nghiệp vụ.
- Giữ tài khoản, mã đối tượng và cách ghi của chính khách hàng. Không biến tên nhà cung cấp, số tiền hay mẫu phổ biến thành quy tắc áp dụng vô điều kiện. Mẫu sửa sai, diễn giải trái chiều tiền hoặc cặp bất thường phải đánh dấu để làm rõ, không tự chuẩn hóa thành quy tắc.
- Số dư đầu kỳ cần mốc có hiệu lực và lũy kế phù hợp; CdKT0 trống không chứng minh dư đầu bằng 0. Phân biệt số dư nhập, phát sinh, tài khoản cha/con và công nợ theo đối tượng/hóa đơn. Chưa lập đối chiếu công nợ chi tiết thì ghi rõ giới hạn đó.

## Những quyết định phải giữ khi viết quy trình

- **Diễn giải có module riêng:** lưu nguyên văn `Dien_Giai`, `Dien_GiaiN`, `Dien_GiaiC` cùng nguồn tra cứu; không tự nối, sửa câu, thêm/bớt tiền tố hoặc tự rút gọn. Chỉ mô tả cách thay phần biến khi lịch sử và chứng từ hỗ trợ. Không có mẫu đúng bản chất, mẫu trống hoặc nhiều biến thể chưa có tiêu chí: hỏi người dùng chốt câu/mẫu và phạm vi, ghi chờ quyết định, tiếp tục phần độc lập. Áp dụng cả hóa đơn đầu ra. Không dùng mẫu công ty khác; quyết định riêng đã xác nhận còn hiệu lực được ưu tiên.
- **Lương:** bảng lương không bắt buộc cho mọi kỳ. Khi chỉ có sao kê, phải kiểm tra người nhận, kỳ, nghĩa vụ đã trích, gross/net và căn cứ thuế trước khi đề xuất cách ghi. Phân biệt nhân viên, cộng tác viên và nhà cung cấp cá nhân/KOL; không suy gross-up, thuế suất hoặc thuế bằng 0 từ tiền chuyển.
- **Bảo hiểm:** người dùng tự hạch toán khi có C12. Lưu các mẫu lịch sử chỉ để giải thích sổ; quy trình mới bàn giao cả phần trích/khấu trừ/nộp bảo hiểm, không tự tạo định khoản để làm ngân hàng khớp.
- **Chi không hóa đơn:** người dùng tự xử lý, kể cả khoản được khách hàng giải thích thêm. Quy trình phải lưu dấu vết khoản bàn giao và chống trùng, không tự sinh chi phí/thuế/công nợ.
- **Nghiệp vụ cuối kỳ:** phân bổ, kho, khấu hao, trích trước và kết chuyển chỉ đúc kết theo hồ sơ và phạm vi đã chốt của khách hàng; không tự lập lịch lặp số tiền cũ. Không suy đã thu/chi tiền mặt từ hóa đơn không thấy trên sao kê.

## Hoàn thành bộ tài liệu

Lập các module theo bảng ở tài liệu tham chiếu, với mục lục `0.quy_trinh_tao_result.md` và file riêng `8.dien_giai.md`. Không sao chép tài khoản, quyết định đặc thù, tên pháp lý hoặc số liệu của 12 doanh nghiệp cũ vào khách hàng mới. Có thể tham khảo cấu trúc trong `docs/phan-tich-doanh-nghiep-2026-10-24.md`; các con số ở đó không là cấu hình chạy.

Nếu cập nhật, giữ các quyết định đã xác nhận và ghi rõ ngày/phạm vi thay đổi; cần tái cấu trúc tài liệu cũ thì bảo toàn nội dung và liên kết. Không thay template nhập liệu đã có; chưa có template xác nhận thì mô tả cấu trúc workspace và đánh dấu mapping còn thiếu, không bịa mã chứng từ/bộ phận.

Kiểm tra file/link/UTF-8/bảng Markdown, số dòng theo nhóm so với tổng phạm vi, tham chiếu chứng từ và độ khớp nguyên văn diễn giải. Đối chiếu sổ với bảng phát sinh phù hợp nếu đủ schema; phân biệt lệch do số dư nhập hay tài khoản tổng hợp với sai nghiệp vụ. Ghi rõ kiểm tra chưa làm và khoản chờ người dùng, không đánh dấu đã xác minh tất cả.

Trả đường dẫn mục lục, phạm vi và giới hạn thực tế, vấn đề cần người dùng chốt. Không đổi tracking thành hoàn tất kế toán chỉ vì đã lập tài liệu. Chỉ dùng `check_result` khi có kết quả hạch toán cần kiểm tra; việc lập kết quả kỳ sau thuộc `run_pipeline`/`process_accounting`.
