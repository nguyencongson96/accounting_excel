# Đọc dữ liệu kế toán 3TSoft

Các tên sau đã được quan sát trong một database V200. Luôn xác minh schema và quy tắc dữ liệu của database đang kết nối; không dùng số liệu hoặc nhận diện khách hàng từ phiên trước.

| Bảng | Vai trò và trường cần kiểm tra |
|---|---|
| `DmDvcs` | Đơn vị cơ sở: `Ma_Dvcs`, `Ten_Dvcs`, `Ms_Thue`. Có thể còn thông tin mẫu. |
| `SoCaiKT` | Dòng đối ứng Nợ/Có: `Stt`, `Stt_Bt`, `Ma_Dvcs`, `Ngay_Ct`, `Ngay_Ps`, `So_Ct`, `Tk_No`, `Tk_Co`, `Tien`, `Ma_Dt_No`, `Ma_Dt_Co`, `Posted`. |
| `CdKT` | Tổng hợp phát sinh tháng theo `Year_Month`, đơn vị, tài khoản, đối tượng; `Ps_No`, `Ps_Co`. Không tự coi mỗi dòng là số dư cuối tháng. |
| `CdKT0` | Số dư ban đầu: `Du_No`, `Du_Co`, `Tk`, `Ma_Dt`, `Ma_Dvcs`, `Ngay_Ct`. Xác minh ngày hiệu lực trước khi cộng số dư; không cộng lặp số chuyển năm. |
| `SoCaiCN` | Sổ công nợ: `Tk`, `Ma_Dt`, `No_Co`, `Tien`, `Ngay_Ct`, `Posted`. Kiểm tra quy ước N/C và phạm vi. |
| `DmTk`, `DmDt` | Tên tài khoản và đối tượng. Không join làm nhân đôi phát sinh; kiểm tra tính duy nhất của khóa. |
| `Reports` | Tên và mã báo cáo. Đã thấy `KCT10` là Bảng kê chứng từ, `KCD00` là Bảng cân đối số phát sinh; mã form không bảo đảm tồn tại procedure cùng tên. |

## Số bút toán và kỳ báo cáo

- Phân biệt số dòng đối ứng (`COUNT(*)` trên sổ cái đã lọc) với số chứng từ (nhóm khóa thực tế, thường `Ma_Dvcs, Stt`). Một chứng từ có thể có nhiều dòng. Nếu người dùng hỏi số dòng bút toán, nên trả cả hai số để dễ đối chiếu.
- Kiểm tra giá trị `Posted` thực tế và ý nghĩa ghi sổ, không mặc định một mã chung cho mọi database. Bỏ bảng `_Log` và bản xóa/hủy theo quy tắc thực tế.
- Chọn `Ngay_Ct` hay `Ngay_Ps` theo yêu cầu và báo cáo cần đối chiếu. Dùng khoảng ngày nửa mở: `>= @StartDate AND < @EndExclusive`.
- Với “hiện tại”, xác định ngày dữ liệu mới nhất và so với ngày người dùng. Không ngụ ý dữ liệu đã cập nhật đến hôm nay khi database dừng ở kỳ cũ. Nếu database có chứng từ tương lai, tách chúng khỏi số dư tính đến hôm nay.
- Mỗi lần cộng Nợ/Có lấy `Tien` một lần cho mỗi bên liên quan; không cộng đôi cả dòng khi tài khoản xuất hiện ở hai bên. Kiểm tra tiền hạch toán và ngoại tệ, không cộng trực tiếp các đồng tiền khác nhau.

## Số dư 331 và tài khoản công nợ

Đối với từng đơn vị/tài khoản/đối tượng, tính trên cơ sở số dư đầu kỳ đã xác minh:

```text
Số dư thuần Nợ cuối = Dư Nợ đầu - Dư Có đầu + Phát sinh Nợ - Phát sinh Có
Dư Nợ cuối = max(Số dư thuần Nợ cuối, 0)
Dư Có cuối = max(-Số dư thuần Nợ cuối, 0)
```

Tổng hợp dư Nợ và dư Có riêng sau khi tính từng đối tượng theo mức chi tiết báo cáo; không chỉ bù trừ toàn tài khoản. TK 331 dư Nợ thường phản ánh trả trước; không gọi là số tiền còn phải trả. Khi cần, xem chứng từ để giải thích nguyên nhân cụ thể.

Tài khoản bao gồm tiểu khoản phải lọc theo hệ thống tài khoản thực tế. `LIKE @AccountPrefix` với giá trị `331%` là gợi ý khi mã tài khoản có cấu trúc tiền tố; không tự cộng cả dòng tài khoản cha tổng hợp lẫn dòng con.

Đối chiếu tối thiểu trước khi kết luận:

1. Phát sinh từ `SoCaiKT` với `CdKT` cho cùng tháng/đơn vị/tài khoản/trạng thái.
2. Công nợ từ sổ cái với `SoCaiCN`, cộng số dư đầu đúng một lần.
3. Dư Nợ, dư Có theo đối tượng; chỉ lấy tên từ `DmDt` sau khi đã tổng hợp.

Nếu bảng đầu kỳ trống, kiểm tra kỳ bắt đầu và nguồn số dư khác thay vì mặc nhiên khẳng định số dư đầu bằng 0. Khi không đủ bằng chứng, nêu rõ số tính được là chênh lệch phát sinh, chưa xác nhận số dư cuối.

Stored procedure báo cáo có thể mã hóa (`sys.sql_modules.definition` là NULL). Khi không thể kiểm tra tác dụng, ưu tiên SELECT từ bảng đã xác minh và ghi rõ kết quả tự tổng hợp, chưa xác nhận trùng mọi bộ lọc/cách gộp của báo cáo trên giao diện.
