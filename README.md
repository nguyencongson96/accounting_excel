# Hạch toán từ hóa đơn và sao kê vào 3TSoft

Agent đọc chứng từ, xác định từng bút toán theo quy trình riêng của khách hàng và xuất kết quả theo mẫu nhập liệu EZSOFT/3TSoft. `run_pipeline` điều phối toàn bộ luồng; script hỗ trợ đọc/chuyển đổi, tính toán, kiểm tra và xuất dữ liệu, không tự quyết định nghiệp vụ.

## Bộ 10 skill

| Skill | Chức năng |
|---|---|
| `run_pipeline` | Điều phối kiểm tra nguồn → chuyển đổi → hạch toán → kiểm tra → xuất/bàn giao và cập nhật tracking; hỗ trợ tiện ích quý |
| `connect-3tsoft` | Chỉ đọc database SQL Server theo MST/database đã ánh xạ |
| `analyze-enterprise-history` | Phân tích lịch sử doanh nghiệp để lập quy trình; đối chiếu kết quả lịch sử để cải thiện quy trình doanh nghiệp/HKD |
| `verify_data` | Kiểm tra nguồn đã đủ, còn thiếu, cần chuyển đổi hoặc cần đọc lại SQL |
| `process_accounting` | Đọc chứng từ và lập kết quả theo quy trình/template khách hàng |
| `check_result` | Kiểm tra cấu trúc, nghiệp vụ, độ phủ nguồn, công nợ và phân bổ; không sửa bút toán |
| `excel-to-md` | Chuyển Excel sang Markdown, kiểm tra toàn vẹn |
| `md_to_excel` | Xuất bảng Markdown hoặc kết quả sang Excel |
| `bank-statement-to-excel` | Chuyển ảnh/PDF sao kê thành giao dịch Excel, xử lý ảnh trùng và kiểm tra số liệu |
| `init_customer` | Khởi tạo thư mục, quy trình và template cho khách hàng mới |

Skill nằm trong [`.agents/skills/`](.agents/skills/). Công cụ tìm/tạo skill dùng bản cấp người dùng/hệ thống khi có.

## Cách sử dụng

- “Chạy pipeline cho MST 0110840844 quý 2026.Q3.”
- “Kiểm tra kết quả quý 2026.Q3 của khách hàng này.”
- “Đối chiếu kết quả lịch sử với chứng từ và cập nhật quy trình cho MST …”
- “Tạo thư mục 2026.Q4 cho các khách đang tiếp tục.”
- “Thống kê khách đã có kết quả quý 2026.Q3.”

Khi chỉ yêu cầu tạo thư mục hoặc thống kê, pipeline không tự chạy hạch toán. Có file kết quả không chứng minh đã kiểm tra đạt hoặc hoàn tất kỳ.

Agent thực hiện tạo thư mục quý hoặc thống kê trực tiếp theo hướng dẫn `run_pipeline`, không phụ thuộc script cố định. Mặc định hàng loạt chọn khách đang tiếp tục; chỉ gồm khách đã dừng khi được yêu cầu tất cả hoặc đích danh. Không đổi tracking chỉ dựa vào việc có file.

## Nguồn dữ liệu và cấu trúc

Tra [bảng database và trạng thái khách hàng](docs/3tsoft-databases.md). Mọi khách đã có database, gồm doanh nghiệp và HKD, dùng SQL để đọc danh mục, số dư và lịch sử; không cần file export hoặc `last_quarter_data/`. Khách chưa có database dùng nguồn thay thế đã xác minh. HKD giữ nguyên quy tắc nghiệp vụ riêng.

- `src/clients/<MST>/docs/`: quy trình, template, quyết định và mẫu diễn giải riêng của khách hàng.
- `src/clients/<MST>/<Quarter>/`: hóa đơn, sao kê và bản chuyển đổi nguồn.
- `<Quarter>/result/`: chỉ giữ file kết quả Markdown và Excel/result bổ sung cần thiết.
- `docs/tracking/<Quarter>.md`: tiến độ, kết luận kiểm tra, giới hạn và phần còn chờ.
- `scripts/`: chỉ dành cho script tạm và được dọn sau khi dùng; các script đóng gói trong skill được giữ theo skill tương ứng.

Báo cáo kiểm tra, đối chiếu, phân bổ, ghi chú và bản trích SQL chỉ dùng tạm khi xử lý, trừ yêu cầu giữ báo cáo riêng. Bàn giao phần chờ trong chat/tracking và lưu quyết định lâu dài vào tài liệu khách hàng trước khi dọn file tạm. Giữ nguyên sao kê, hóa đơn nguồn và kết quả đã có ngoài phạm vi sửa được yêu cầu.

Quy định chi tiết: [hướng dẫn khách hàng](src/clients/AGENTS.md), [quy trình doanh nghiệp](docs/quy-trinh-doanh-nghiep.md). Với doanh nghiệp, bảo hiểm chờ C12 và chi không hóa đơn do người dùng tự hạch toán; diễn giải theo mẫu đã xác nhận của chính khách hàng.
