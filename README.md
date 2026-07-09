# Dự Án Tự Động Hóa Kế Toán Excel (Accounting Automation)

Dự án này giúp tự động hóa quá trình chuyển hóa dữ liệu thô kế toán (Hóa đơn, Sao kê ngân hàng) thành file kết quả chuẩn để nhập liệu lên phần mềm kế toán EZSOFT / 3TSoft.

## 1. Cấu trúc thư mục cốt lõi
- **`src/<Mã_số_thuế>/`**: Mỗi khách hàng có một thư mục riêng, bao gồm:
  - `docs/`: 4 file tài liệu `.md` (quy trình, template, danh mục tài khoản, danh mục đối tượng)
  - `<Kỳ_kế_toán>/` (VD: `2026.Q1/`): Dữ liệu thô và kết quả xử lý của kỳ đó
    - `last_quarter_data/`: Số dư và chứng từ kỳ trước
- **`.agents/skills/`**: Hệ thống 7 skills AI để tự động hóa từng bước xử lý
- **`scripts/`**: Script Node.js tiện ích

## 2. Cách sử dụng (qua AI Agent)

Dự án sử dụng AI Agent với hệ thống skills để tự động hóa. Các lệnh chính:

| Tác vụ | Skill | Mô tả |
|:---|:---|:---|
| Chạy toàn bộ pipeline | `run_pipeline` | Tự động verify → convert → process |
| Kiểm tra dữ liệu | `verify_data` | Quét file bắt buộc và file Excel |
| Chuyển đổi Excel → MD | `excel_to_md` | Convert `.xls`/`.xlsx` sang Markdown |
| Xử lý kế toán | `process_accounting` | Sinh `0.result.md` từ dữ liệu thô |
| Tinh chỉnh quy trình | `refine_workflow` | So sánh kết quả với ground truth |
| Khởi tạo khách hàng | `init_customer` | Tạo cấu trúc thư mục cho MST mới |

**Cách dùng cơ bản:** Chỉ cần nói với AI Agent: *"Chạy pipeline cho MST 8443847047-001 kỳ 2026.Q2"*

## 3. Quy trình xử lý chính

1. **Verify**: Kiểm tra file đầu vào (`1.danh_sach_hoa_don.md`, `2.sao_ke.md`, `last_quarter_data/`)
2. **Convert**: Chuyển đổi file Excel sang Markdown nếu cần
3. **Process**: Đọc quy trình `0.quy_trinh_tao_result.md`, xử lý hóa đơn & sao kê, sinh kết quả

### Các luật xử lý nổi bật:
- Tự động tạo Phiếu Kế Toán (PK) cho từng hóa đơn mua vào/bán ra
- Đối soát thanh toán: khớp sao kê ngân hàng với hóa đơn
- Nhận diện hóa đơn ăn uống → rút gọn diễn giải
- Xử lý bảo hiểm (bội số của 690,300đ)
- Chuyển tiền nội bộ giữa các ngân hàng
- Tự động phát hiện MST đối tác mới → tạo `0.danh_muc_doi_tuong.md`
