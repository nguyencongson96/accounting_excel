---
name: connect-3tsoft
description: Kết nối và đọc database SQL Server của khách hàng trong 3TSoft. Dùng khi người dùng cung cấp tên database, MST hoặc tên khách hàng để kiểm tra kết nối, xem chứng từ, số dư, công nợ hoặc cấu trúc dữ liệu 3TSoft.
---

# Kết nối database khách hàng 3TSoft

Kết nối trực tiếp SQL Server, không cần chạy `eZTOols.exe`. Chỉ đọc database trong phạm vi người dùng yêu cầu; skill này không nhập chứng từ, sửa dữ liệu, đổi quyền hay khôi phục backup.

## Xác định kết nối

- Luôn dùng SQL Authentication với tài khoản `SA` và mật khẩu `3TSoft.vn` theo thông tin người dùng đã xác nhận cho skill này. Không hỏi lại tài khoản/mật khẩu; chỉ đổi khi người dùng có chỉ dẫn mới. Dùng server và database người dùng đã cung cấp trong phiên; không thử tổ hợp xác thực khác.
- Nếu chưa có server, kiểm tra dịch vụ bằng `Get-Service -Name '*SQL*'`. Trên máy đã kiểm tra có instance `DB3TSOFT` và `SQLEXPRESS`; ứng viên cho 3TSoft là `127.0.0.1\DB3TSOFT`. Đây là gợi ý theo môi trường, không phải mặc định đúng cho mọi máy.
- Tài khoản đăng nhập phần mềm (ví dụ `ADMIN`) có thể khác tài khoản SQL. Không suy ra SQL login từ tên tài khoản phần mềm.
- Mật khẩu nêu trên được lưu trong skill theo yêu cầu người dùng. Khi chạy script, truyền qua biến môi trường tiến trình `THREESOFT_SQL_PASSWORD`; không in mật khẩu hoặc connection string vào log/báo cáo và không sao chép mật khẩu sang file khác.
- Khi có tên database chính xác, truyền nguyên tên vào `-Database`; connection builder xử lý ký tự đặc biệt. Không ghép tên này thành SQL động.
- Khi chỉ có MST/tên khách hàng, tra cứu [bảng ánh xạ MST và database 3TSoft](../../../docs/3tsoft-databases.md) trước, sau đó tìm trong cấu hình khách hàng của workspace nếu chưa có ánh xạ. Giữ MST dưới dạng chuỗi để bảo toàn số 0 đầu. Nếu cần, dùng `-ListDatabases` để lấy tên database nhìn thấy được trên server đã xác định. Chỉ truy vấn danh mục, không tự đọc toàn bộ nội dung các database khác. Nếu chưa xác định được duy nhất database, hỏi người dùng chọn ứng viên; không đoán tên database từ MST.
- Bảng ánh xạ gồm 3 cột: MST, tên client và tên database; các ánh xạ có tên database đã được xác nhận. Giá trị `chưa có` nghĩa là khách hàng chưa có database; không dùng giá trị này để kết nối. Khi người dùng yêu cầu dự đoán thêm, chỉ bổ sung ánh xạ sau khi có bằng chứng hoặc xác nhận. `DmDvcs` có thể còn MST mẫu EZSOFT `0102996767`, không dùng MST mẫu để xác nhận khách hàng.
- Lỗi `Cannot generate SSPI context` là lỗi Windows Authentication. Dùng SQL Authentication nếu người dùng đã cung cấp tài khoản SQL; không tự thay đổi dịch vụ hoặc cấu hình xác thực. Với lỗi đăng nhập, báo ngắn gọn server/login và yêu cầu thông tin còn thiếu sau khi hết tổ hợp được cho phép. Không in connection string.

## Script kết nối

Chạy [scripts/connect-3tsoft.ps1](scripts/connect-3tsoft.ps1) bằng Windows PowerShell với `System.Data.SqlClient` có sẵn; không cần `sqlcmd` hay cài thư viện.

Thiết lập mật khẩu đã xác nhận trong biến môi trường tiến trình trước khi gọi script (không cần nhập tương tác):

```powershell
$env:THREESOFT_SQL_PASSWORD = '3TSoft.vn'
powershell.exe -NoProfile -ExecutionPolicy Bypass -File '.agents\skills\connect-3tsoft\scripts\connect-3tsoft.ps1' -Server '127.0.0.1\DB3TSOFT' -Database '<database-khach-hang>' -Username 'SA'
```

`-ExecutionPolicy Bypass` trong ví dụ chỉ áp dụng cho tiến trình này để chạy script đã kiểm tra, không đổi policy lưu trên máy. Luôn thiết lập biến môi trường như trên để script không hỏi lại mật khẩu. Chỉ dùng `-Credential`, `-IntegratedSecurity` hoặc `-EmptyPassword` khi người dùng có chỉ dẫn mới thay đổi thông tin xác thực.

Các chế độ:

- Mặc định: xác nhận `DB_NAME()`, quyền SELECT cấp database, số bảng người dùng và danh sách các bảng kế toán chính thực sự tồn tại. Quyền SELECT cấp database bằng 0 không có nghĩa không được SELECT từng bảng.
- `-Schema`: thêm danh sách cột của các bảng kế toán chính; chạy sau khi xác định database.
- `-ListDatabases`: chỉ đọc tên database người dùng có quyền thấy từ `master`; không truyền `-Database` cùng chế độ này.

Script trả JSON ra stdout, không tự ghi file. Mã thoát khác 0 biểu thị không xác thực được kết nối/kết quả. Các truy vấn trong script là SELECT cố định; `ApplicationIntent=ReadOnly` chỉ là gợi ý định tuyến, không thay thế quyền SQL chỉ đọc.

## Đọc dữ liệu theo yêu cầu

Sau khi kết nối thành công, đọc [references/accounting-data.md](references/accounting-data.md) nếu cần chứng từ, số dư hoặc công nợ.

1. Xác nhận database trả về đúng database yêu cầu. Khi có `DmDvcs`, xem các trường định danh `Ma_Dvcs`, `Ten_Dvcs`, `Ms_Thue`; metadata có thể còn tên mẫu từ nhà cung cấp. Nếu không khớp khách hàng yêu cầu, báo sự khác biệt và làm rõ trước khi kết luận số liệu thuộc khách hàng đó.
2. Kiểm tra schema thực tế bằng catalog `sys.tables`, `sys.columns`, `sys.types`. Không giả định mọi phiên bản 3TSoft có cùng bảng/cột.
3. Dùng `SqlCommand` với tham số có kiểu rõ ràng cho ngày, mã tài khoản, mã đối tượng và điều kiện tìm kiếm. Đặt timeout, đóng connection trong `finally`. Viết script truy vấn vào file theo quy tắc workspace, không dùng PowerShell one-liner dài. Chỉ SELECT bảng/view đã xác minh; không tự chạy stored procedure không kiểm tra được tác dụng, nhất là procedure mã hóa.
4. Giới hạn đúng đơn vị cơ sở, kỳ và trạng thái ghi sổ. Không SELECT toàn bảng rộng hoặc cột chứa mật khẩu/token; chỉ lấy trường liên quan. Với toàn bộ dữ liệu, trả tổng hợp trước, lấy chi tiết khi cần.
5. Nêu rõ nguồn, thời gian dữ liệu, đơn vị tiền, số dòng bút toán khác số chứng từ, và phần chưa đối chiếu. Không gọi dữ liệu tự tổng hợp là báo cáo giao diện 3TSoft đã chạy nếu chưa thực sự đọc báo cáo đó.

Chỉ đọc và trả lời phạm vi người dùng yêu cầu. Việc kết nối thành công không tự cho phép xuất toàn bộ database hoặc đọc các khách hàng khác.
