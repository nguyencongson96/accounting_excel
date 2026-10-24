---
name: check_result
description: Audit accounting results against customer templates, source evidence and debt allocations, using SQL for enterprises and customer-specific files for household businesses; report errors, warnings and incomplete checks without modifying entries.
---

# Kiểm tra kết quả hạch toán

Chỉ đọc kết quả, ghi báo cáo; không sửa bút toán hoặc ghi SQL. Dùng sau process hoặc khi kiểm tra kết quả lịch sử.

## Chọn đúng bộ và nguồn

- Tra MST trong `docs/3tsoft-databases.md`; đọc `src/clients/AGENTS.md`, quy trình và template khách hàng. Trạng thái đã dừng không chặn audit lịch sử; không suy loại từ độ dài MST. Chưa rõ loại thì xác minh trước phần phụ thuộc loại.
- Kiểm tra file được chỉ định hoặc file process vừa sinh; mặc định `<MST>/<Quarter>/result/0.result.md`. Legacy có thể ở gốc quý/có hậu tố; nhiều bộ chưa rõ thì xác minh, không chọn chỉ theo tên/mtime, không tự di chuyển/xóa trong audit.
- Đọc hóa đơn, sao kê, bảng lương khi có, tham chiếu, danh mục đề nghị, công nợ/ghi chú/phân bổ cùng bộ. Kết quả cũ không thay nguồn.
- Doanh nghiệp đọc `docs/quy-trinh-doanh-nghiep.md`, module 4–11; `connect-3tsoft` chỉ SELECT đúng database. Kiểm tra đơn vị/schema/trạng thái ghi sổ/ngày cuối, danh mục và số dư/lịch sử tại cutoff, chống trùng SQL. Không bắt export hoặc `last_quarter_data/`; SQL chưa đọc được thì ghi chưa xác minh, không dùng export cũ/0 thay hiện hành.
- HKD dùng danh mục file và dữ liệu kỳ trước theo quy trình riêng. Ngoại lệ doanh nghiệp ưu tiên chỉ dẫn cũ mâu thuẫn; quy tắc đặc thù phải có phạm vi/căn cứ, không lấy một khách áp cho tất cả.

## 1. Cấu trúc và trường dữ liệu

- Lấy số cột/thứ tự/tên, tài khoản tách/gộp, kiểu và trường bắt buộc từ template khách hàng. Bộ A–N thông dụng tách Nợ/Có và không có STT; bỏ cấu trúc cũ thêm STT/gộp tài khoản. Legacy khác template thì báo khác biệt/khả năng nhập, không tự đổi file.
- Kiểm tra từng dòng đủ cột, không dòng trắng xen kẽ; ngày hợp lệ/đúng kỳ, ngoại lệ phải có căn cứ.
- Mã chứng từ theo template/mapping đã xác nhận, kể cả PT khi hợp lệ. Không giới hạn chung PK/BN/BC/PC hoặc tự đổi `Ma_Ct` SQL sang mã import.
- Số chứng từ theo quy tắc khách/template/sổ thực tế: định dạng, phạm vi duy nhất, nhóm dòng cùng chứng từ, reset theo kỳ/loại hay tiếp nối. Chỉ bắt số nguyên liên tục MAX_PRIOR+1 khi quy trình quy định. Nhiều dòng cùng chứng từ không mặc nhiên là trùng; chống trùng định danh nguồn và nghiệp vụ.
- Tài khoản/đối tượng/bộ phận/công trình phải hợp danh mục đúng nhánh và yêu cầu khách. MST không mặc nhiên là mã nội bộ. Mã mới cần mapping có căn cứ; chưa chấp nhận phải ghi giới hạn nhập liệu.
- Tiền tệ/tỷ giá/nguyên tệ/thành tiền/dấu theo chứng từ và template; VND tỷ giá 1 thì nguyên tệ bằng thành tiền. Không cấm mọi số âm nếu điều chỉnh/reversal hợp lệ, không mặc định mọi khách chỉ dùng VND.
- Diễn giải theo giới hạn/trường nhập và quy trình khách. Doanh nghiệp theo file 8 và quyết định đã chốt, không tự rút gọn/giữ nguyên hóa đơn để sửa lỗi. HKD giữ nguyên đầu ra ≤200 ký tự, vượt thì chỉnh tối thiểu có căn cứ trừ yêu cầu hiện hành khác. Vi phạm trường nhập bắt buộc là ERROR; chưa xác nhận mapping là chưa hoàn thành kiểm tra.

## 2. Độ phủ và nghiệp vụ

### Hóa đơn

- Đối chiếu từng hóa đơn theo đối tác, ký hiệu/số/ngày, trạng thái, kỳ, tham chiếu; không chỉ ghép bằng tiền. Phân loại đã lập/đã có SQL/ngoài kỳ/hủy-thay thế/bàn giao/chờ, đối chiếu lượng/tiền và nêu thiếu sót chưa giải thích.
- Kiểm tra tài khoản, VAT/giảm trừ, tổng tiền, ngày và đối tượng theo khách; một hóa đơn có thể nhiều dòng. Không bắt mọi mua vào có một PK bằng tổng sau thuế, không cố định bán ra là 131/5118 và 333821/131.
- Gốc bị thay thế không ghi trùng bản thay thế; gốc ghi kỳ trước cần bằng chứng điều chỉnh. Chưa rõ liên kết thì giữ chờ, không đoán từ tiền/nội dung.

### Sao kê và bàn giao

- Đối chiếu từng tài khoản ngân hàng, tiền vào/ra và dòng kết quả. Một giao dịch có thể nhiều dòng phân bổ, kiểm tổng không bỏ/nhân đôi. Giao dịch đã có SQL cần định danh/bằng chứng, không tái hạch toán.
- Doanh nghiệp: bảo hiểm chờ C12 và chi không hóa đơn có trong ghi chú bàn giao, không ép sinh BN/BC. Kiểm ngày, tiền, mã giao dịch, nguyên văn. Tổng sao kê phải được giải thích bởi đã lập + đã có SQL + bàn giao + chờ, các nhóm không chồng lấn.
- Bàn giao có dấu vết không phải lỗi bỏ sót bút toán agent nhưng toàn kỳ còn mở khi chưa xác nhận xử lý. Khoản chờ không được gán tài khoản/đối tượng để báo cân.
- PT 1111/131 cần chứng từ thực thu, không suy từ hóa đơn hoặc thiếu tiền vào ngân hàng; không thu trùng hóa đơn đã trả qua ngân hàng.
- Lương/thuế/bảo hiểm/TikTok/hoàn/chuyển nội bộ theo chứng từ và quy trình riêng; không hard-code đối tượng `0000000001/2/3`, mức 690.300 hoặc định khoản chỉ từ từ khóa.

### Ngân hàng và cân đối

- Kiểm running balance riêng từng tài khoản/tiền tệ/khoảng liên tục. Xác định chiều thời gian, thứ tự cùng ngày, đầu/cuối kỳ; không nối hai tài khoản hoặc đoạn thiếu nguồn. STT reset không tự ngắt chuỗi.
- Nhận diện cột số dư/balance và thu-chi hoặc tiền có dấu; tiền ròng = vào - ra theo góc nhìn sao kê. Parse phân cách theo nguồn, giữ thập phân; chỉ coi ô thu/chi trống là 0 khi định dạng xác nhận, không biến số dư trống/không đọc được thành 0.
- Theo thứ tự tăng: dư sau = dư trước + tiền vào - tiền ra. Có dư đầu thì kiểm cả dòng đầu, thiếu thì ghi dòng đầu chưa kiểm. Dung sai có căn cứ, mặc định ±1 VND cho nguồn VND; sai lệch lặp lại cần giải thích.
- Thiếu cột số dư thì ghi phép kiểm không thực hiện được. Khớp running balance chỉ chứng minh nhất quán nội bộ phần có nguồn, không chứng minh đủ mọi giao dịch/tài khoản.
- Tổng Nợ=Có là kiểm cấu trúc, đặc biệt mỗi dòng đã có cả Nợ/Có cùng tiền. Kiểm thêm phát sinh, số dư, độ phủ; không ép Nợ từng tài khoản bằng Có của chính tài khoản đó.

## 3. Công nợ và phân bổ bắt buộc

Đọc [hướng dẫn công nợ](../process_accounting/references/cong_no_dau_ky.md); doanh nghiệp dùng SQL tương đương báo cáo được nhắc, HKD dùng nguồn file.

- Xác minh cutoff từ ngày báo cáo/sổ, không từ tên thư mục; thiếu dư là chưa xác định, không phải 0. Tách dư Nợ/Có theo đối tượng/tài khoản/tiền tệ; không bù giữa đối tác hoặc cộng trùng mẹ/con.
- Kiểm từng hóa đơn còn nợ: gốc, điều chỉnh, thanh toán đã phân bổ, dư còn lại. Không dùng một hóa đơn giả thay tổng dư. Xét số lặp theo năm/ký hiệu, trả gộp/một phần.
- Phân bổ cần chứng từ thanh toán, hóa đơn cụ thể, dư trước/sau; bằng tổng dư/tiền hóa đơn chưa chứng minh phân bổ. Không phân bổ trùng/vượt dư chưa giải thích; ứng trước/cọc/hoàn/chưa phân bổ tách riêng.
- Thu nợ cũ giảm đúng công nợ, không sinh lại doanh thu. Biết đối tác chưa biết hóa đơn thì giữ chưa phân bổ, không đánh dấu hóa đơn đã trả dù tổng đối tượng khớp.
- Dư thuần đầu + Nợ - Có = dư thuần cuối cùng cutoff/phạm vi; đối chiếu chi tiết và tổng kiểm soát. Sổ phải thu không chứng minh dư phải trả.
- Legacy thiếu báo cáo thì tái dựng phép kiểm từ nguồn nếu có và ghi giới hạn. Thiếu bằng chứng trọng yếu là đối chiếu chưa hoàn thành, không PASS đầy đủ.

## 4. Đối tượng mới

Đối chiếu danh mục hiện hành và đề nghị cùng bộ: mã, MST, tên, nhóm/loại theo khách. Tránh tạo trùng đối tượng đã có. Mọi mã trong kết quả cần căn cứ, không chỉ tên trong danh sách tự sinh. Đề nghị chưa dùng có thể giữ khi ghi rõ lý do/chờ; mã chưa xác nhận ảnh hưởng nhập phải nêu rõ.

## Báo cáo và chuyển điều phối

Ghi `result/0.check_result.md` cho bộ chuẩn. Với legacy chỉ định, ghi rõ file/bộ nguồn đang kiểm, không gắn nhầm báo cáo cho bộ khác. Báo cáo gồm:

- MST, loại, kỳ, file kiểm, thời điểm; nguồn SQL/file, cutoff, template/mapping.
- Số dòng/số chứng từ theo loại (PT nếu có), tổng Nợ/Có, lượng hóa đơn và giao dịch đã kiểm.
- Kết quả cấu trúc, trường, độ phủ, chống trùng, ngân hàng, công nợ/phân bổ và đối tượng mới.
- Từng lỗi/cảnh báo/kiểm tra chưa thực hiện: dòng kết quả, nguồn/SQL, tiền, căn cứ; phân biệt lỗi nguồn/lỗi agent/quyết định còn thiếu.
- Lượng/tiền theo nhóm đã lập/đã có SQL/loại trừ có lý do/bàn giao/chờ; chênh chưa giải thích, tình trạng đối chiếu hóa đơn/công nợ.
- Kết luận riêng chất lượng phần đã lập (`PASS`, `PASS WITH WARNINGS`, `FAIL WITH ERRORS`, `INCOMPLETE`), sẵn sàng nhập và hoàn tất toàn kỳ. Thiếu kiểm tra trọng yếu dùng INCOMPLETE; có lỗi xác định vẫn FAIL kèm phần chưa kiểm. Không có lỗi không tự nghĩa đủ bằng chứng.

ERROR là sai dữ liệu/định khoản/định dạng hoặc bỏ sót đã xác định cần sửa; WARN cần xem nhưng chưa chứng minh sai; thiếu căn cứ trọng yếu là chưa hoàn thành kiểm tra. Nêu phát hiện chính trong chat và link báo cáo đầy đủ.

Trong pipeline, trả phát hiện cho điều phối/process sửa lỗi agent đã đủ căn cứ rồi kiểm tra lại bộ thay đổi. Nếu chỉ audit thì dừng ở báo cáo, không sửa kết quả. Không đổi nguồn/quy tắc để làm kiểm tra đạt.
