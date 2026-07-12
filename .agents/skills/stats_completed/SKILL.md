---
name: stats_completed
description: Thống kê danh sách khách hàng (MST) đã hoàn thành kế toán trong một quý cụ thể. "Hoàn thành" nghĩa là folder khách hàng có subfolder tên quý đó và bên trong có chứa file 0.result.md. Use this whenever the user wants to check which customers have completed accounting for a quarter, xem khách hàng nào đã xong, kiểm tra tiến độ, thống kê tình hình, báo cáo các KH đã hoàn thành — even if they say "kiểm tra ai đã xong", "danh sách KH hoàn thành", "báo cáo tiến độ", "list completed customers", "check who's done", or "thống kê kết quả quý X".
---

# Instructions for stats_completed

Khi được trigger để thống kê khách hàng đã hoàn thành trong một quý cụ thể:

## 1. Xác định quý cần kiểm tra

Lấy thông tin quý từ câu hỏi của user. Quý có format `YYYY.QN` (ví dụ: `2026.Q1`, `2025.Q4`).

Nếu user không specify quý, hỏi lại.

## 2. Quét toàn bộ danh sách khách hàng

1. Đi đến thư mục `src/clients/` trong workspace.
2. Lấy danh sách tất cả các subfolder (mỗi folder là một MST của khách hàng).
3. Với mỗi folder khách hàng:
   - Kiểm tra xem có subfolder tên đúng bằng quý đang xét không (ví dụ: `src/clients/<MST>/2026.Q1/`).
   - Nếu có, kiểm tra tiếp trong subfolder đó có file `0.result.md` không.
   - Nếu có cả 2 → khách hàng đó đã **hoàn thành**.
4. Đếm tổng số khách hàng đã hoàn thành và tổng số khách hàng.

## 3. Output

Xuất kết quả dưới dạng Markdown với cấu trúc:

```markdown
# Thống kê khách hàng hoàn thành — Quý <Quý>

## Tổng quan
- Tổng số khách hàng: <N>
- Đã hoàn thành: <M> khách hàng
- Chưa hoàn thành: <K> khách hàng
- Tỷ lệ hoàn thành: <X>%

## Danh sách khách hàng đã hoàn thành

<MST-1>
<MST-2>
...
```

Chỉ liệt kê danh sách MST, mỗi MST một dòng, không cần format bảng.

## 4. Lưu ý

- MST có 2 dạng: 12 chữ số (ví dụ: `001095012873`) và 10 chữ số + dấu gạch + 3 chữ số (ví dụ: `8077953218-001`). Xử lý cả 2 dạng.
- Bỏ qua các folder không phải MST (như folder `docs` nếu có ở cấp `src/` — nhưng hiện tại không có).
- File `0.result.md` phải có nội dung (không phải file rỗng). Nếu file tồn tại nhưng rỗng, vẫn tính là chưa hoàn thành.
