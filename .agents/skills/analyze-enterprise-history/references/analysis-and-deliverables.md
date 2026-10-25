# Bằng chứng cần đọc và bộ tài liệu khách hàng

## Thu thập SQL theo phạm vi được phép

Kết nối bằng `connect-3tsoft`, đọc thêm reference `accounting-data.md` của skill đó khi truy vấn sổ/số dư. Kiểm tra bảng/cột bằng catalog trước; tên bảng dưới đây là các tên đã quan sát, không bảo đảm tồn tại ở mọi database.

| Nguồn | Thu thập để giải thích logic |
|---|---|
| DmDvcs, DmDt | Định danh khách hàng, đơn vị, MST; khác tên mẫu/pháp lý và bằng chứng liên kết database |
| SoCaiKT | Ngày đầu/cuối, Posted, dòng theo năm/loại CT/cặp TK, tổng Tien, tiền tệ; số chứng từ theo khóa thực tế |
| DmTk, DmDt | Chỉ các tài khoản/đối tượng cần giải thích; kiểm tra tính duy nhất trước khi join, không nhân đôi tiền |
| Các danh mục bộ phận/công trình/hợp đồng | Mã thực và ý nghĩa khi có phát sinh; không tự gán một mã cho toàn bộ chi phí |
| CdKT0, CdKT | Mốc số dư nhập, phạm vi tháng, phát sinh đối chiếu; tránh cộng số dư nhập hai lần hoặc cộng cả tài khoản cha và con |
| SoCaiCN | Công nợ/ứng trước theo đối tượng nếu cần giải thích chuỗi thanh toán; xác minh N/C và bộ lọc thực tế |
| Hóa đơn, sao kê, bảng lương/hợp đồng sẵn có | Kiểm tra chéo mẫu quan trọng và sai khác; không yêu cầu đủ cả quý chỉ để lập hồ sơ lịch sử SQL |

Đặt timeout, dùng tham số có kiểu cho ngày/MST/mã/điều kiện tìm kiếm, đóng kết nối trong finally. Viết script truy vấn vào file theo quy tắc workspace, không dùng one-liner dài. Lưu UTF-8 tương thích Windows PowerShell nếu script có tiếng Việt; kiểm tra bộ lọc thực sự chỉ chứa khách hàng được yêu cầu trước khi mở kết nối hàng loạt. Không hard-code 12 khách hàng, ngày 24/10/2026 hoặc danh sách database cũ.

Không cần xuất toàn bộ database. Tổng hợp trước, chọn trường cần thiết; đọc thêm các dòng liên quan khi phải giải thích chuỗi. Nếu không có lịch sử hoặc sổ quá ít, tạo tài liệu với phạm vi và các quyết định còn thiếu, không tự điền quy tắc từ công ty khác. SQL mất kết nối thì báo phần chưa đọc; chỉ yêu cầu nguồn thay thế cần thiết.

## Chọn và ghi mẫu có thể tra lại

- Phủ tất cả cặp tài khoản trong phạm vi thống kê; lấy ví dụ theo loại nghiệp vụ, gồm mẫu gần nhất và thường gặp. Nêu cách chọn, số biến thể đã lưu so với tổng khi tính được. Ngoại lệ cần mẫu riêng; không chỉ lấy TOP vài dòng toàn sổ rồi kết luận cho mọi cặp.
- Với các chuỗi như hóa đơn → công nợ → thanh toán, trích trước → hóa đơn, cọc → bù trừ, tạm ứng → quyết toán hoặc chi phí → giá thành: mở các chứng từ liên quan khi đủ tham chiếu, không chỉ nhìn tổng cặp. Thiếu liên kết thì ghi chưa xác nhận chuỗi.
- Một ví dụ giữ database, đơn vị, Stt, Stt_Bt, loại/số/ngày CT, Nợ/Có, Tien, mã đối tượng từng bên và chiều/bộ phận/công trình cần thiết. `Ma_Dvcs + Stt + Stt_Bt` từng xuất hiện nhiều dòng đối ứng: kiểm tra khóa thực tế, không xóa trùng chỉ theo bộ này.
- Giữ riêng nguyên văn ba trường diễn giải; SQL string có đệm cuối có thể bỏ phần đệm và công khai cách xử lý. Escape ký tự `|`, HTML và xuống dòng để bảng không vỡ, nhưng không thay chữ trong bằng chứng gốc.
- Không đưa mật khẩu, connection string hoặc dữ liệu ngoài phạm vi vào log/tài liệu.

## Nội dung mỗi quy tắc

Viết đủ để kỳ sau biết **khi nào dùng**: nghiệp vụ và dấu hiệu nhận diện; hồ sơ phải có; tài khoản/đối tượng/dimension; số tiền và dấu; kỳ ghi nhận; điều kiện áp dụng và ngoại lệ; cách tránh ghi trùng; mẫu diễn giải liên quan; ít nhất một tham chiếu lịch sử nếu có. Không tự suy thuế suất, thời gian phân bổ hay phương pháp giá xuất từ một dòng sổ. Đối với nội dung chưa có bằng chứng, viết rõ “chưa có mẫu/chưa xác nhận” thay vì điền lời khuyên thành quy tắc đã chốt.

Phân biệt:

| Trạng thái | Cách dùng |
|---|---|
| Mẫu đã quan sát | Có bằng chứng SQL, chưa mặc nhiên đúng chính sách hoặc đủ hồ sơ cho kỳ mới |
| Đã xác nhận | Quyết định cụ thể của người dùng, ngày và phạm vi; được dùng lại trong phạm vi đó |
| Chờ quyết định | Câu hỏi và bằng chứng còn thiếu; không tự dùng đề xuất như câu trả lời |

Quyết định tên BLIVEE, chính sách cọc WNBF, mã giá vốn GS/BLIVEE hoặc tài khoản ngân hàng của công ty đã làm là dữ liệu riêng của các công ty đó. Không biến thành mặc định cho khách hàng mới.

## Cấu trúc Markdown đầu ra

Tạo `src/clients/<MST>/docs/` nếu thiếu. Số thứ tự sau tương thích bộ module doanh nghiệp hiện có; mỗi file đảm nhiệm một logic. Không tạo hai file danh mục export chỉ để lấp số 2–3.

| File | Trách nhiệm và nội dung cần có |
|---|---|
| `0.quy_trinh_tao_result.md` | Mục lục, mô hình hoạt động có căn cứ, thứ tự xử lý kỳ mới, ưu tiên quyết định người dùng và liên kết module |
| `1.template_output.md` | Giữ template đã xác nhận; nếu chưa có, cấu trúc workspace và các mapping nhập liệu còn chờ, không tuyên bố sẵn sàng import |
| `4.ket_noi_va_du_lieu.md` | Database/server không kèm bí mật, nhận diện, schema/phạm vi/trạng thái, danh mục trực tiếp SQL, cách lấy đầu kỳ |
| `5.hoa_don_va_chi_phi.md` | Doanh thu, mua vào, VAT, kho/tài sản/chi phí; các mẫu riêng, điều kiện áp dụng và chống trùng ghi nhận/thanh toán |
| `6.ngan_hang_va_cong_no.md` | Mã TK từng sao kê, thu/chi, ứng/cọc/hoàn/cấn trừ/chuyển nội bộ, đầu kỳ và phân bổ nợ theo chứng cứ |
| `7.luong_va_thue.md` | Lương và thuế theo nhân sự/hợp đồng; xử lý khi chỉ có sao kê; toàn bộ bảo hiểm chờ C12 bàn giao người dùng |
| `8.dien_giai.md` | Mẫu nguyên văn theo nghiệp vụ/cặp/loại CT, chứng từ tham chiếu, phần biến có bằng chứng, quyết định đã chốt và quy tắc hỏi khi thiếu mẫu |
| `9.phan_bo_gia_von_ket_chuyen.md` | Chuỗi kho/giá thành/trả trước/khấu hao/trích trước/kết chuyển thực thấy; hồ sơ còn thiếu và phạm vi người dùng tự làm |
| `10.cho_user_quyet_dinh.md` | Điểm riêng chưa rõ, câu hỏi cần chốt; mục quyết định đã xác nhận ghi ngày/phạm vi, không để tiếp tục mang nhãn chờ |
| `11.bang_chung_lich_su.md` | Thống kê toàn phạm vi, tất cả cặp, ví dụ tra lại, phương pháp chọn mẫu, dữ liệu tương lai và kết quả/giới hạn kiểm tra nội bộ |

Đầu các module ghi khách hàng/MST, database, ngày đọc và khoảng dữ liệu. Số tiền ví dụ là snapshot, không phải định mức kỳ sau. `Tien` không mặc nhiên là nguyên tệ; không cộng nguyên tệ khác đồng tiền. Số dòng đối ứng khác số chứng từ và số hóa đơn; phải gọi đúng loại số đếm.

Tài liệu cũ có thể giữ nguyên tại chỗ và liên kết, hoặc giữ bản gốc trong cùng docs khi tách lại để không hỏng đường dẫn tương đối. Chỉ cập nhật phần cần thiết, không tự chuyển/xóa cả cây thư mục. Không tạo hồ sơ rỗng mang vẻ đã phân tích; module không có tiền lệ phải ghi rõ chưa quan sát và cách hỏi người dùng khi phát sinh.

## Kiểm tra trước khi báo hoàn thành

Đối chiếu tổng dòng theo cặp và năm với tổng đã lọc; kiểm tra các trường câu chữ lưu trong Markdown khớp nguồn sau escape và có chứng từ tham chiếu. Với SQL đủ dữ liệu, so SoCaiKT/CdKT cùng đơn vị/kỳ/tài khoản/trạng thái; tránh so tháng chưa hoàn tất với cả tháng hoặc gọi số dư khởi tạo là sai phát sinh. Ngưỡng sai lệch phải nêu rõ và phù hợp độ chính xác tiền hạch toán.

Kiểm tra module/link/encoding/bảng, quyết định cũ còn được giữ, các hạn chế đã phản ánh nhất quán trong mục lục và file chờ. Báo đúng phạm vi: chỉ SQL, có đối chiếu nguồn mẫu, hay đã rà toàn bộ chứng từ gốc. Không cần chạy lại một kỳ kế toán thật để thử skill lập tài liệu và không dùng `check_result` thay cho kiểm tra tài liệu này.
