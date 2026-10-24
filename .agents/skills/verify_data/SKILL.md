---
name: verify_data
description: Check accounting input readiness for a customer and quarter, selecting enterprise SQL sources or household-business file requirements and identifying missing, unconverted or stale sources.
---

# Kiểm tra dữ liệu trước hạch toán

## Chọn nhánh

Tra MST nguyên dạng trong `docs/3tsoft-databases.md` để lấy loại, database, trạng thái; đọc `src/clients/AGENTS.md`, quy trình và template khách hàng. Không suy loại theo độ dài MST. Hàng loạt bỏ qua khách đã dừng; yêu cầu đích danh MST/kỳ vẫn kiểm tra và nêu trạng thái, không suy ngày dừng. Chưa rõ loại thì xác minh trước phần phụ thuộc loại.

| Nhánh | Nguồn cần xác minh |
|---|---|
| Doanh nghiệp | Đọc `docs/quy-trinh-doanh-nghiep.md` và module 4–11 theo mục lục. Sao kê, hóa đơn theo phạm vi thực tế; bảng lương khi có. Dùng `connect-3tsoft` chỉ SELECT đúng database: đơn vị/schema/trạng thái ghi sổ/ngày cuối, danh mục, số dư/lịch sử tại cutoff. Không bắt danh mục export hay `last_quarter_data/`; ngoại lệ này thay yêu cầu file cũ mâu thuẫn. |
| HKD | `1.danh_sach_hoa_don.md`, `2.sao_ke.md`, `last_quarter_data/` và từng nguồn cụ thể quy trình khách hàng yêu cầu, không chỉ một file bất kỳ trong thư mục. Docs gồm quy trình, template, danh mục tài khoản và đối tượng. Đọc ngày/phạm vi báo cáo thực tế. Giữ yêu cầu bắt buộc riêng hiện có. |

## Quét và đối chiếu

- Quét `<MST>/<Quarter>/`, thư mục nguồn con và `<MST>/docs/`. Loại `result/`, kết quả cũ tại gốc quý, workbook xuất và báo cáo sinh ra khỏi nguồn.
- Kiểm tra không rỗng, nội dung, sheet, ngày và từng tài khoản ngân hàng. Nguồn gộp/tên khác được chấp nhận khi chứng minh đủ nội dung. Phân biệt thiếu nguồn với xác nhận không phát sinh.
- Luôn tìm Excel chưa chuyển đổi hoặc nguồn mới hơn/khác Markdown dù đủ tên file; mtime chỉ là dấu hiệu. Đối chiếu nội dung và phần bổ sung thủ công trước khi ghi đè.
- Tách nguồn bắt buộc thiếu, workbook tương ứng có thể chuyển đổi, nguồn bổ sung và SQL chưa xác minh. Một workbook không chứng minh đáp ứng mọi nguồn thiếu. PDF/ảnh đọc bằng công cụ/skill phù hợp, không chỉ chấp nhận Excel.
- Ghi nhận kết quả hiện hành `result/0.result.md` và legacy để điều phối xử lý; verify không tự chuyển/xóa/ghi đè kết quả.

## Kết luận sẵn sàng

Trình checklist nguồn đã xác minh, nguồn thiếu và tác động, nguồn cần chuyển đổi/cập nhật, kết quả cũ, SQL/cutoff đã đọc hoặc chưa đọc. Phân biệt sẵn sàng, cần chuyển đổi, chỉ đủ xử lý một phần và thiếu nguồn bắt buộc.

- Trong pipeline đã yêu cầu: tự chuyển đổi bằng `excel-to-md` rồi re-verify, không hỏi lại thao tác cơ học. Nếu chỉ được yêu cầu verify thì báo danh sách chuyển đổi dự kiến, không tự hạch toán.
- Kiểm tra log toàn vẹn và sheet/dòng/cột, ngày, MST sau chuyển đổi; file tồn tại/exit code 0 chưa đủ. Có integrity FAILED phải xác định sai khác; chỉ chấp nhận phần dữ liệu được đối chiếu trực tiếp còn nguyên vẹn và ghi giới hạn. Sai khác chưa giải thích chặn phần phụ thuộc.
- SQL lỗi thì nêu phần chưa xác minh và nguồn thay thế cần thiết; không coi export cũ là hiện hành hoặc dư đầu bằng 0.
- Thiếu một phần thì chỉ tiếp tục phần độc lập nếu quy trình nhánh cho phép. HKD thiếu nguồn cốt lõi mà quy trình riêng bắt dừng thì dừng hạch toán, nêu đúng file/nội dung cần bổ sung.
