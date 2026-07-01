# Dự Án Tự Động Hóa Kế Toán Excel (Accounting Automation)

Dự án này giúp tự động hóa quá trình chuyển hóa dữ liệu thô kế toán (Hóa đơn, Sao kê ngân hàng) thành file Excel chuẩn `result.xlsx` để nhập liệu lên phần mềm kế toán.

## 1. Cấu trúc thư mục cốt lõi
- `docs/`: Chứa các tài liệu hướng dẫn nghiệp vụ và quy luật sinh dữ liệu (VD: `1.Quy_trinh_tao_result.md`).
- `test/`: Chứa dữ liệu chạy thử nghiệm của khách hàng (Mã số thuế: 8710040770-001). Bao gồm:
  - `Danh sách hóa đơn.xlsx`
  - `sao kê/sao kê.xlsx`
  - `result_generated.xlsx` (File kết quả do script tự sinh).
- `generate_excel.js`: Code script cốt lõi (Node.js) thực thi toàn bộ luồng quy trình nghiệp vụ kế toán.

## 2. Cách chạy ứng dụng
Đảm bảo bạn đã cài đặt Node.js và thư viện `xlsx`:
```bash
npm install xlsx
```

Sau đó chạy lệnh sau ở thư mục gốc:
```bash
node generate_excel.js
```
Script sẽ đọc file hóa đơn và file sao kê ngân hàng, áp dụng các business rules (tạo Phiếu Kế Toán, định khoản chi phí/thuế, sinh Phiếu Chi tiền mặt tự động, trích lập bảo hiểm...) và xuất ra file `result_generated.xlsx`.

## 3. Quy luật xử lý chính
Luật xử lý nghiệp vụ được mô tả chi tiết trong file `docs/1.Quy_trinh_tao_result.md`. Một số điểm nổi bật:
- Tự động tách bút toán **Giảm trừ doanh thu** (Nợ 511 / Có 131) nếu hóa đơn bán ra có giảm trước thuế.
- Nhận diện **Hóa đơn ăn uống** (nhà hàng, cafe) để tự động rút gọn diễn giải thành "Chi phí tiếp khách, ngoại giao...".
- **Đối soát thanh toán:** Hóa đơn nào không tìm thấy chứng từ thanh toán qua ngân hàng sẽ được tự động hạch toán thanh toán bằng tiền mặt (Sinh Phiếu Chi).
- **Chi phí bảo hiểm:** Nhận diện số tiền bảo hiểm (bội số của 690,300) để tách 2 bút toán: Trích chi phí (Nợ 64271/Có 3383) và Thanh toán (Nợ 3383/Có 1121).
