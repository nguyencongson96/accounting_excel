# Quy trình doanh nghiệp dùng dữ liệu 3TSoft

Áp dụng theo yêu cầu người dùng ngày **24/10/2026**, chỉ cho các MST trong mục **Doanh nghiệp** của [bảng database](3tsoft-databases.md). Không xác định loại khách hàng chỉ bằng độ dài MST. Hộ kinh doanh tiếp tục quy trình hiện có.

## Đầu vào và nguồn dữ liệu

- Đầu vào thường xuyên: sao kê và danh sách hóa đơn. Bảng lương là nguồn bổ sung khi có, không phải điều kiện bắt buộc của mọi kỳ.
- Dùng skill `connect-3tsoft`, chỉ SELECT đúng database đã được ánh xạ. Đọc lại schema, đơn vị, trạng thái ghi sổ, ngày dữ liệu cuối mỗi lần chạy.
- Đọc trực tiếp `DmTk`, `DmDt`, các danh mục công trình/bộ phận khi cần, `CdKT0`, `SoCaiKT`, `CdKT`, `SoCaiCN`. Không bắt buộc người dùng xuất `2.danh_muc_tai_khoan.md`, `3.danh_muc_doi_tuong.md` hay chuẩn bị `last_quarter_data/`.
- Các file danh mục và thư mục kỳ trước đã có chỉ là nguồn cũ để tra cứu; không xóa, không mặc định còn cập nhật. Nếu SQL không kết nối được, ghi rõ phần chưa xác minh và chỉ yêu cầu nguồn thay thế cần thiết; không âm thầm quay về số dư 0.
- Phải dựng công nợ đầu kỳ đến đúng ngày bắt đầu, gồm hóa đơn chưa trả, trả một phần, ứng trước và đặt cọc. Số dư đầu không nhất thiết nằm trong `CdKT0`; phải xác minh mốc chuyển sổ và tránh cộng hai lần. Không bù trừ giữa các đối tượng.

## Bộ tài liệu mỗi khách hàng

Trong `src/clients/<MST>/docs/`, đọc `0.quy_trinh_tao_result.md` làm mục lục, sau đó các module `4`–`11`. File `8.dien_giai.md` chịu trách nhiệm duy nhất về cách viết diễn giải; file `11.bang_chung_lich_su.md` chứa thống kê và các chứng từ tham chiếu.

Những tài liệu này mô tả sổ đã quan sát, không xác nhận mọi bút toán quá khứ đều đúng. Cặp tài khoản có mặt trong thống kê không đồng nghĩa đã đủ điều kiện sử dụng cho giao dịch mới. Agent phải đọc chứng từ, quyết định từng nghiệp vụ theo dữ liệu của chính khách hàng; không dùng script để tự hạch toán.

## Phạm vi xử lý kỳ mới

1. Kiểm tra ngày nguồn, kỳ cần làm, sổ đã nhập đến đâu và trạng thái hóa đơn. Phân biệt chứng từ tương lai, hóa đơn thay thế/điều chỉnh và nguồn đã ghi sổ để chống trùng.
2. Đọc tất cả đầu vào liên quan và các module khách hàng. Xác định từng tài khoản ngân hàng theo sao kê và `DmTk`; mã đối tượng theo `DmDt`, không thay mã nội bộ bằng MST một cách máy móc.
3. Tách ghi nhận hóa đơn và thanh toán. Sao kê có thể trả công nợ cũ, ứng trước hoặc đặt cọc. Không tạo thu/chi tiền mặt chỉ vì hóa đơn không khớp ngân hàng.
4. Với lương: nếu sổ đã trích đủ nghĩa vụ thì thanh toán giảm công nợ. Khi chỉ có sao kê, xem đúng người nhận, kỳ, hợp đồng/chính sách đã xác nhận, lịch sử trích lương và thuế. Có thể lập lương và thuế khi đủ căn cứ; nếu chỉ biết tiền thực nhận mà chưa biết gross/net, thuế hoặc phần bảo hiểm thì hỏi người dùng, không tự áp tỷ lệ, gross-up hoặc giả định thuế bằng 0.
5. **Bảo hiểm do người dùng tự hạch toán sau khi có C12**: không tự trích, phân bổ, khấu trừ hoặc tách nghĩa vụ bảo hiểm; ghi riêng cả giao dịch nộp bảo hiểm trên sao kê để bàn giao và không nhập trùng. Nếu bảng lương có khoản bảo hiểm, dùng để đối chiếu nhưng không sinh thêm dòng bảo hiểm.
6. **Khoản chi không hóa đơn do người dùng tự xử lý**, kể cả khoản khách hàng giải thích ngoài bộ nguồn. Lưu ngày, số tiền, mã giao dịch và nội dung nguyên văn vào ghi chú bàn giao, không tự sinh chi phí/thuế hay gán công nợ để khép số. Tổng đối chiếu ngân hàng phải trình bày cả khoản đã xử lý và khoản bàn giao.
7. Diễn giải phải theo mẫu có bằng chứng của chính khách hàng. Chỉ thay thông tin thực tế được chứng từ mới xác nhận. Không có mẫu phù hợp, có nhiều mẫu chưa phân biệt được hoặc mẫu trống: hỏi người dùng chốt, ghi trạng thái chờ, tiếp tục phần độc lập. Không dùng mẫu công ty khác.
8. Nghiệp vụ kho, phân bổ, khấu hao, trích trước, kết chuyển cần bảng chi tiết và phạm vi được xác nhận; không lặp mức tiền cũ chỉ vì đến cuối tháng. Quyết định riêng đã được người dùng chốt cho khách hàng vẫn có hiệu lực nếu không bị yêu cầu mới thay thế.

## Kết quả và kiểm tra

Lập `result/0.result.md` theo template của khách hàng sau khi kiểm tra mẫu nhập liệu; phần giải thích, danh sách chờ quyết định và bàn giao nằm ở `result/0.ghi_chu.md`. Giữ đối chiếu công nợ riêng, ghi số dư đầu/phát sinh/số dư cuối và tình trạng phân bổ hóa đơn. Danh sách đề nghị đối tượng mới có thể xuất riêng; đây không phải yêu cầu xuất lại toàn bộ `DmDt`.

Sau khi có kết quả hạch toán, chạy `check_result`: dùng danh mục và số dư vừa đọc từ SQL thay cho các file export bắt buộc của luồng cũ. Không khẳng định đã cân đủ ngân hàng nếu còn khoản bảo hiểm/chi không hóa đơn người dùng chưa hạch toán; nêu rõ phần chênh do bàn giao. Tác vụ lập tài liệu ngày 24/10/2026 chưa sinh kết quả nhập liệu và chưa sửa database.

## Thứ tự ưu tiên

Yêu cầu hiện hành của người dùng → quyết định riêng đã xác nhận của khách hàng còn hiệu lực → các module của khách hàng → bằng chứng lịch sử → hướng dẫn chung. Chỉ dẫn cũ yêu cầu file kỳ trước/danh mục, tự làm bảo hiểm hoặc tự viết diễn giải mới được thay bằng tài liệu này trong phạm vi doanh nghiệp. Nếu còn mâu thuẫn ảnh hưởng kết quả, hỏi người dùng; không tự chọn cách thuận tiện.
