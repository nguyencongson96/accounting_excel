# Quy tắc agent trong dự án

## Skill và điều phối

Dự án có 10 skill trong `.agents/skills/`. Dùng `run_pipeline` làm đầu mối khi được yêu cầu hạch toán một khách hàng/quý; skill điều phối kiểm tra nguồn, chuyển đổi, lập bút toán, kiểm tra và bàn giao.

| Skill | Trách nhiệm |
|---|---|
| run_pipeline | Điều phối hạch toán; tạo thư mục quý và thống kê tiến độ qua tiện ích |
| connect-3tsoft | Chỉ đọc database, xác minh schema, danh mục, chứng từ và số dư |
| analyze-enterprise-history | Lập tài liệu từ lịch sử doanh nghiệp; đối chiếu kết quả và cải thiện quy trình doanh nghiệp/HKD |
| verify_data | Xác minh độ sẵn sàng và phạm vi nguồn |
| process_accounting | Agent xác định từng nghiệp vụ, lập kết quả theo template khách hàng |
| check_result | Kiểm tra độc lập, không sửa bút toán |
| excel-to-md | Đọc/chuyển đổi Excel sang Markdown, kiểm tra toàn vẹn |
| md_to_excel | Xuất bảng Markdown/kết quả sang Excel |
| bank-statement-to-excel | Đọc ảnh/PDF sao kê, xử lý trùng và xuất Excel |
| init_customer | Khởi tạo tài liệu khách hàng, giữ nguyên cấu hình đã có |

Agent tạo thư mục quý và thống kê trực tiếp theo hướng dẫn run_pipeline, không phụ thuộc script cố định trong thư mục tạm. Tạo thư mục và thống kê chỉ chạy đúng tác vụ được yêu cầu, không tự chạy hạch toán. Công cụ tìm/tạo skill dùng bản cấp hệ thống/người dùng khi có, không cần bản sao trong project.

## Nguồn và quy tắc nghiệp vụ

- Tra MST nguyên dạng ở `docs/3tsoft-databases.md`; đọc `src/clients/AGENTS.md`, mục lục quy trình, template và các module liên quan của đúng khách hàng. Doanh nghiệp đọc thêm `docs/quy-trinh-doanh-nghiep.md`.
- Mọi khách hàng có database, gồm doanh nghiệp/HKD, lấy danh mục, số dư và lịch sử từ SQL qua `connect-3tsoft`. Không yêu cầu hoặc tạo lại `last_quarter_data/`/danh mục export. Khách chưa có database dùng nguồn thay thế cần thiết theo quy trình riêng.
- SQL thay nguồn dữ liệu; không thay quy tắc hạch toán riêng của HKD bằng quy tắc doanh nghiệp. Không suy số dư bằng 0 khi thiếu nguồn hoặc không kết nối được SQL.
- Thiếu nguồn chặn phần phụ thuộc; tiếp tục phần độc lập đủ căn cứ khi quy trình cho phép. Báo rõ giới hạn và nội dung cần bổ sung.
- Agent quyết định từng bút toán. Script chỉ đọc, chuyển đổi, tính toán, kiểm tra, ghi/xuất các dòng đã quyết định; không dùng script tự chọn tài khoản, đối tượng hoặc phân bổ nghiệp vụ.
- Đối tượng mới phải đối chiếu danh mục hiện hành đúng khách hàng. Không mặc định MST là mã đối tượng, không cố định nhóm/loại hay bộ phận từ khách khác; nêu mã còn chờ xác nhận trong bàn giao.

## Bảo vệ dữ liệu và lưu trữ

- Không sửa/xóa nguồn sao kê, hóa đơn hoặc file kết quả cũ ngoài phạm vi người dùng yêu cầu. Chuyển đổi không được làm mất phần bổ sung thủ công. Sửa quy trình có căn cứ phải giữ quyết định đã xác nhận và tham chiếu nguồn; không thay quy tắc chỉ để kiểm tra đạt.
- Tuân thủ lưu trữ ngày 25/10/2026 trong `src/clients/AGENTS.md`: `result/` chỉ giữ file kết quả và Excel/result bổ sung. Báo cáo kiểm tra, đối chiếu, ghi chú, JSON SQL và danh mục đề nghị dùng tạm khi xử lý; bàn giao lỗi/giới hạn/khoản chờ đầy đủ trong chat/tracking, lưu quyết định lâu dài vào docs trước khi dọn file tạm. Giữ báo cáo riêng khi người dùng yêu cầu.
- Khi sửa kết quả, chuẩn bị và kiểm tra bộ mới trước khi thay bộ hiện hành, cập nhật link và bảo toàn bản cũ chưa có thay thế. Không tự xóa kết quả bổ sung hoặc di chuyển legacy nếu chưa xác định bộ nguồn nhất quán.
- Sao kê, bản chuyển đổi sao kê và hóa đơn nguồn giữ tại vị trí nguồn. Tài liệu quy trình/template nằm trong `docs/` khách hàng; không đặt workbook đầu vào trong docs.
- Viết script vào file, tránh one-liner dài có ký tự dễ bị shell diễn giải. Thư mục `scripts/` ở gốc chỉ chứa script tạm, dọn sau khi dùng; không tham chiếu nó như thư viện cố định. Script đóng gói bên trong từng skill được giữ theo skill đó.
- Pipeline không ghi SQL. Có file result không đồng nghĩa kiểm tra đạt, sẵn sàng import hay hoàn tất toàn kỳ; chỉ kết luận theo bằng chứng thực tế và các khoản còn chờ.
