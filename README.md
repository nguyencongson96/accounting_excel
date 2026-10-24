# Dự Án Tự Động Hóa Kế Toán Excel (Accounting Automation)

Dự án này giúp tự động hóa quá trình chuyển hóa dữ liệu thô kế toán (Hóa đơn, Sao kê ngân hàng) thành file kết quả chuẩn để nhập liệu lên phần mềm kế toán EZSOFT / 3TSoft.

**Doanh nghiệp — cập nhật 24/10/2026:** Dùng [quy trình lấy dữ liệu trực tiếp từ 3TSoft](docs/quy-trinh-doanh-nghiep.md) và [bộ phân tích 12 doanh nghiệp](docs/phan-tich-doanh-nghiep-2026-10-24.md). Mỗi khách hàng có các module riêng trong `docs/`, bao gồm file chuyên về diễn giải. Không bắt buộc `last_quarter_data/` hoặc file danh mục export; bảo hiểm chờ C12 và chi không hóa đơn do người dùng tự làm. Diễn giải chưa có tiền lệ phải hỏi người dùng. Các mô tả luồng cũ bên dưới tiếp tục áp dụng cho hộ kinh doanh; với doanh nghiệp, tài liệu cập nhật này được ưu tiên.

## 1. Cấu trúc thư mục cốt lõi
- **`src/clients/<Mã_số_thuế>/`**: Mỗi khách hàng có một thư mục riêng, bao gồm:
  - `docs/`: 4 file tài liệu `.md` (quy trình, template, danh mục tài khoản, danh mục đối tượng)
  - `<Kỳ_kế_toán>/` (VD: `2026.Q1/`): Dữ liệu thô và kết quả xử lý của kỳ đó
    - `last_quarter_data/`: Số dư và chứng từ kỳ trước
- **`.agents/skills/`**: Hệ thống 7 skills AI để tự động hóa từng bước xử lý
- **`.agents/skills/<skill>/scripts/`**: Các tiện ích chuyển đổi và xử lý định dạng file của từng skill

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

Phần **Process** do Agent trực tiếp đọc dữ liệu và suy luận từng bút toán theo quy trình, danh mục và chứng từ riêng của khách hàng. Không chạy `scripts/process_accounting.js`, `scripts/process.py` hoặc viết script thay thế để tự quyết định hạch toán. Script chỉ hỗ trợ thao tác cơ học như chuyển đổi Excel, tính toán, kiểm tra định dạng và ghi/xuất các dòng đã được Agent xác định. Sau khi tạo kết quả, pipeline tự động kiểm tra chéo trước khi trình duyệt; các nghiệp vụ chưa đủ căn cứ được liệt kê rõ để bổ sung thông tin.

### Các luật xử lý nổi bật:
- Tự động tạo Phiếu Kế Toán (PK) cho từng hóa đơn mua vào/bán ra
- Đối soát thanh toán: khớp sao kê ngân hàng với hóa đơn
- Nhận diện hóa đơn ăn uống → rút gọn diễn giải
- Xử lý bảo hiểm (bội số của 690,300đ)
- Chuyển tiền nội bộ giữa các ngân hàng
- Tự động phát hiện MST đối tác mới → tạo `0.danh_muc_doi_tuong.md`
