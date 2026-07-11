---
name: create_quarter_folder
description: Tạo subfolder của một quý cụ thể cho toàn bộ khách hàng (MST) trong workspace. Với các khách hàng đã có subfolder quý này rồi thì bỏ qua (skip). Bên trong mỗi subfolder quý được tạo mới, tự động tạo thêm 1 subfolder tên last_quarter_data/. Use this whenever the user wants to initialize a new quarter for all customers, tạo thư mục quý mới, chuẩn bị dữ liệu cho quý mới, tạo folder hàng loạt, prepare new quarter, init quarter folders, setup quarter directories — even if they say "tạo folder quý", "chuẩn bị quý mới", "tạo thư mục cho quý X", "init Q2 cho tất cả KH", "prepare Q2 folders", "create quarter dirs".
---

# Instructions for create_quarter_folder

Khi được trigger để tạo subfolder quý cho toàn bộ khách hàng:

## 1. Xác định quý cần tạo

Lấy thông tin quý từ câu hỏi của user. Quý có format `YYYY.QN` (ví dụ: `2026.Q2`, `2026.Q1`).

Nếu user không specify quý, hỏi lại.

## 2. Quét danh sách khách hàng

1. Đi đến thư mục `src/` trong workspace.
2. Lấy danh sách tất cả các subfolder (mỗi folder là một MST của khách hàng).
3. Lọc ra các folder là MST hợp lệ (không phải folder đặc biệt như `docs` — mặc dù hiện tại không có).

## 3. Tạo subfolder

Với mỗi khách hàng:
1. Kiểm tra xem subfolder `src/<MST>/<Quarter>/` đã tồn tại chưa.
2. **Nếu đã tồn tại**: Bỏ qua, không làm gì thêm. Thông báo trong báo cáo.
3. **Nếu chưa tồn tại**: 
   - Tạo folder `src/<MST>/<Quarter>/`.
   - Bên trong folder vừa tạo, tạo tiếp subfolder `last_quarter_data/`.
   - Thông báo trong báo cáo.

## 4. Output

Xuất kết quả dưới dạng Markdown:

```markdown
# Tạo subfolder quý <Quarter> — Kết quả

## Tổng quan
- Tổng số khách hàng: <N>
- Đã tạo mới: <X> khách hàng
- Đã có sẵn (bỏ qua): <Y> khách hàng

## Danh sách khách hàng đã tạo mới

<MST-1> → src/<MST-1>/<Quarter>/last_quarter_data/ ✅
<MST-2> → src/<MST-2>/<Quarter>/last_quarter_data/ ✅
...

## Danh sách khách hàng đã có sẵn (bỏ qua)

<MST-3> (đã tồn tại)
<MST-4> (đã tồn tại)
...
```

## 5. Lưu ý

- Sử dụng `fs.mkdirSync(path, { recursive: true })` hoặc lệnh `mkdir -p` để tạo folder (tạo cả cấp cha nếu chưa có, dù trường hợp này không cần vì folder MST đã tồn tại).
- Chỉ tạo folder mới, không copy/tạo bất kỳ file nào khác ngoài `last_quarter_data/`.
- MST có 2 dạng: 12 chữ số (ví dụ: `001095012873`) và 10 chữ số + dấu gạch + 3 chữ số (ví dụ: `8077953218-001`). Xử lý cả 2 dạng.
- Nếu khách hàng chỉ có folder docs/ mà chưa có quarter nào (trường hợp hiếm), vẫn tạo subfolder quý mới cho họ.
