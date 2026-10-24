# Phân tích lịch sử 12 doanh nghiệp — 24/10/2026

Đọc bằng skill `connect-3tsoft`, chỉ SELECT. Phạm vi phân tích: `Posted=1`, theo từng `Ma_Dvcs`, `Ngay_Ct < 25/10/2026`; chứng từ tương lai tách riêng. Đơn vị `Tien` là tiền hạch toán; không cộng nguyên tệ các đồng tiền. Đây là hồ sơ học quy trình từ SQL, chưa phải kết quả nhập liệu hay kiểm toán chứng từ gốc.

Quy trình chung: [quy trình doanh nghiệp](quy-trinh-doanh-nghiep.md). Hộ kinh doanh giữ quy trình hiện hành.

| MST | Khách hàng | Khoảng ngày đã phân tích | Dòng đối ứng | Chứng từ theo đơn vị/năm | Cặp TK | Hồ sơ |
|---|---|---|---:|---:|---:|---|
| 0109282345 | CÔNG TY TNHH NRS | 2020-10-20–2026-07-01 | 4449 | 2635 | 210 | [Module](../src/clients/0109282345/docs/0.quy_trinh_tao_result.md) |
| 0110385472 | CÔNG TY TNHH DỊCH VỤ VÀ THƯƠNG MẠI THẢO PHƯƠNG | 2023-06-13–2025-12-31 | 2136 | 504 | 45 | [Module](../src/clients/0110385472/docs/0.quy_trinh_tao_result.md) |
| 0110504338 | CÔNG TY CỔ PHẦN KAIZAN | 2023-11-02–2025-12-31 | 497 | 372 | 39 | [Module](../src/clients/0110504338/docs/0.quy_trinh_tao_result.md) |
| 0110707708 | CÔNG TY CỔ PHẦN AMELYCA GROUP | 2024-07-22–2025-12-31 | 499 | 248 | 57 | [Module](../src/clients/0110707708/docs/0.quy_trinh_tao_result.md) |
| 0110736699 | CÔNG TY TNHH DANH&SONS | 2024-06-06–2025-12-31 | 424 | 262 | 59 | [Module](../src/clients/0110736699/docs/0.quy_trinh_tao_result.md) |
| 0110766830 | CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG NGỌC QUANG | 2024-06-27–2026-09-30 | 1102 | 731 | 55 | [Module](../src/clients/0110766830/docs/0.quy_trinh_tao_result.md) |
| 0110840844 | CÔNG TY TNHH WNBF VIỆT NAM | 2024-08-31–2026-09-30 | 2693 | 1833 | 85 | [Module](../src/clients/0110840844/docs/0.quy_trinh_tao_result.md) |
| 0317434197 | CÔNG TY TNHH QUẢNG CÁO VÀ TRUYỀN THÔNG GS | 2022-08-11–2026-06-30 | 24662 | 10967 | 216 | [Module](../src/clients/0317434197/docs/0.quy_trinh_tao_result.md) |
| 0318393803 | CÔNG TY TNHH MỘT THÀNH VIÊN BLIVEE | 2024-04-08–2025-12-31 | 6267 | 4440 | 157 | [Module](../src/clients/0318393803/docs/0.quy_trinh_tao_result.md) |
| 0319057868 | CÔNG TY TNHH H2P ENTERTAINMENT | 2025-07-29–2026-09-30 | 1956 | 1411 | 49 | [Module](../src/clients/0319057868/docs/0.quy_trinh_tao_result.md) |
| 0319085713 | CÔNG TY TNHH MTV DỊCH VỤ DU LỊCH THIÊN ÂN CAR | 2025-08-05–2026-07-01 | 719 | 561 | 49 | [Module](../src/clients/0319085713/docs/0.quy_trinh_tao_result.md) |
| 4202008425 | CÔNG TY TNHH ADAYA | 2026-01-01–2026-06-30 | 188 | 130 | 44 | [Module](../src/clients/4202008425/docs/0.quy_trinh_tao_result.md) |

## Giới hạn và điểm cần chốt

- Phân tích đầy đủ các cặp tài khoản, thống kê toàn lịch sử trong phạm vi; diễn giải và chứng từ chi tiết là tập mẫu có nêu phương pháp chọn, không phải rà xác nhận từng chứng từ gốc. Không gọi đây là kết quả kiểm toán.
- Chứng từ tương lai: GS 12 dòng 01/01/2027; H2P 1 dòng 30/11/2026, đã tách.
- ADAYA có 26 dòng CdKT0 ngày 31/12/2025; 15 nhóm chênh so sổ cái/CdKT cùng tháng khởi tạo, cần dùng đúng nguồn đầu kỳ. Phép so tháng 2026 không có nhóm lệch ở ngưỡng kiểm tra.
- BLIVEE: người dùng đã chốt ngày 24/10/2026 dùng tên trong file ánh xạ — CÔNG TY TNHH MỘT THÀNH VIÊN BLIVEE, MST 0318393803. Tên HAI THÀNH VIÊN trong SQL giữ nguyên khi dẫn chứng lịch sử; không còn là điểm chờ xác nhận.
- Các mẫu Dien_Giai trống, diễn giải trái hướng tiền, khác tài khoản lương/thuế được nêu riêng ở file 10 từng khách hàng. Không tự sáng tác để điền.
- Bảo hiểm theo C12 và chi không hóa đơn do người dùng hạch toán; module ghi rõ bàn giao và đối chiếu chống trùng.

## Cập nhật khi có quyết định mới

Quyết định người dùng được lưu kèm ngày, phạm vi và chứng từ tham chiếu. Mỗi lần làm kỳ mới phải đọc lại SQL; các con số trong tài liệu này là snapshot ngày 24/10/2026. Không cần xuất danh mục hoặc last_quarter_data cho doanh nghiệp.

Công cụ tái trích: `scripts/read-enterprise-history.ps1` chỉ SELECT; `scripts/write-enterprise-history-docs.ps1` chỉ ghi thống kê, mẫu gốc và các nhận định đã được Agent viết tại `scripts/enterprise-history-notes.json`. Không script nào sinh bút toán. Khi tái lập phải rà lại nhận định và quyết định mới, không coi nhận định snapshot là quy tắc tự cập nhật.
