# Công nợ đầu kỳ và phân bổ thanh toán

Áp dụng trước khi xác định bút toán thu/chi công nợ. Agent đọc chứng từ, xác định đối tác và quyết định phân bổ từng giao dịch; công cụ chỉ hỗ trợ đọc bảng, tính toán và ghi các quyết định đã xác định.

## 1. Chốt số dư tại đúng ngày đầu kỳ

- Xác định ngày đầu quý và ngày chốt liền trước đó. Đọc ngày bắt đầu/kết thúc của từng báo cáo; tên thư mục `last_quarter_data` không chứng minh báo cáo đã chốt đúng kỳ.
- `2.so_tong_hop_phai_thu_khach_hang.md` cung cấp số dư Nợ/Có theo từng mã đối tượng. Cột “Dư đầu” là đầu khoảng báo cáo, “Dư cuối” là cuối khoảng báo cáo, không mặc nhiên là đầu quý cần xử lý. Bỏ các dòng nhóm (ví dụ N002) và Tổng cộng khi cộng chi tiết để tránh tính hai lần.
- Nếu báo cáo chốt đúng ngày trước quý, dùng số dư cuối theo đối tượng; nếu báo cáo bắt đầu đúng ngày đầu quý, dùng số dư đầu theo đối tượng.
- Nếu ngày báo cáo khác ngày chốt, dựng lại từ một số dư chi tiết đã biết tại một mốc xác định và bảng kê chứng từ đầy đủ giữa mốc đó và ngày chốt. Với TK 131: số dư thuần = số dư thuần tại mốc + phát sinh Nợ - phát sinh Có. Có thể tính lùi từ mốc sau ngày chốt khi có đầy đủ chứng từ khoảng giữa: trừ phát sinh Nợ và cộng phát sinh Có của khoảng sau ngày chốt. Nêu rõ cách tính và nguồn; không cộng phát sinh trước mốc vào số dư đã bao gồm chúng.
- Đọc header nhiều tầng của `1.bang_ke_chung_tu.md`: lấy đối tượng bên Nợ khi TK 131 nằm bên Nợ, đối tượng bên Có khi TK 131 nằm bên Có. Không nhầm mã đối tượng trên chứng từ với đối tượng của từng tài khoản. Nếu cột bên tương ứng trống, chỉ dùng mã trên chứng từ khi có căn cứ xác nhận; nếu không, giữ khoản chưa xác định đối tượng.
- Kiểm tra định dạng ngày của cả nguồn và độ đầy đủ dữ liệu. Không mặc định đầu kỳ bằng 0 chỉ vì không tìm thấy giao dịch cũ. Thiếu số dư tại mốc hoặc thiếu lịch sử thì ghi “chưa xác định” cho phần bị ảnh hưởng.
- Giữ riêng dư Nợ và dư Có theo đối tượng, tài khoản chi tiết và tiền tệ khi nguồn có các cột này. Không bù trừ giữa hai đối tác; số dư thuần chỉ dùng cho phép tính kiểm soát, không thay thế việc trình bày các số dư chi tiết mà nguồn đang theo dõi.
- Đối chiếu tổng chi tiết với TK 131 trong `0.bang_can_doi_phat_sinh.md` tại cùng ngày chốt, cùng phạm vi và tiền tệ. Nếu bảng cân đối cũng chốt ngày khác, kiểm tra tại mốc chung hoặc điều chỉnh bằng chứng từ đầy đủ. Không cộng đồng thời tài khoản tổng hợp và các tài khoản con. Tổng khớp chưa đủ chứng minh từng đối tượng đúng.
- Công nợ phải trả 331 cần sổ phải trả chi tiết hoặc số dư chi tiết tại mốc cộng bảng kê tương ứng; sổ phải thu không cung cấp số dư nhà cung cấp.

## 1.1. Dựng danh sách hóa đơn còn nợ đầu kỳ

Tổng dư theo đối tác là số kiểm soát; không phải một khoản nợ duy nhất. Trước khi phân bổ thu tiền, phải tìm cách tách số dư thành các hóa đơn/hợp đồng còn chưa tất toán tại ngày chốt.

- Đọc sổ công nợ chi tiết nếu có, hóa đơn lịch sử và các dòng ghi nhận/điều chỉnh/thanh toán trong bảng kê. Với từng đối tác, lập một hồ sơ cho mỗi hóa đơn: mã đối tác, ký hiệu + số + ngày hóa đơn, hợp đồng nếu có, tiền tệ, số phải thu đã ghi nhận, giảm trừ/điều chỉnh, các lần thanh toán đã xác định và số còn nợ đầu kỳ. Không dùng riêng số hóa đơn làm khóa vì số có thể lặp theo năm/ký hiệu/đối tác; số chứng từ kế toán cũng không mặc nhiên là số hóa đơn.
- Ghép các dòng định khoản của cùng hóa đơn thành một nghĩa vụ phải thu; nhiều dòng PK không phải nhiều hóa đơn. Tính phần còn nợ từ các biến động 131 thực tế liên quan hóa đơn, gồm giảm trừ/điều chỉnh và tiền đã thu. Không mặc định số còn phải thu bằng doanh thu trước thuế hoặc toàn bộ tổng tiền gốc của hóa đơn.
- Truy lại các khoản thu trước ngày chốt, kể cả trả một phần, trả gộp, thu tiền mặt có chứng từ và ứng trước đã được phân bổ có căn cứ. Khoản thu chưa xác định hóa đơn phải giữ ở danh sách chưa phân bổ; không tự trừ vào hóa đơn đầu tiên và không dùng cùng một khoản thu để tất toán nhiều lần.
- Kiểm soát: tổng phần còn nợ đã xác định theo hóa đơn, cùng các khoản điều chỉnh/ứng trước/chưa phân bổ được trình bày riêng, phải giải thích được số dư Nợ/Có của đối tác tại ngày chốt. Nếu còn chênh lệch, nêu đúng phần chưa giải thích; không tạo một “hóa đơn còn lại” giả để làm khớp tổng.
- Nếu lịch sử chỉ có tổng theo đối tác hoặc nội dung thiếu số HĐ/hợp đồng, chỉ xác nhận được tổng nợ, chưa xác nhận được thành phần hóa đơn. Ghi rõ mức dữ liệu này và phần cần sổ chi tiết/chứng từ bổ sung; không báo đã xác định đầy đủ hóa đơn còn nợ.

## 2. Phân bổ từng khoản thanh toán

1. Xác định người trả/nhận từ nội dung đầy đủ, mã đối tượng/MST, số tài khoản, hợp đồng hoặc xác nhận thanh toán. Số tiền trùng công nợ là gợi ý, không đủ để quyết định đối tác. Nếu tên đơn vị chuyển tiền khác đối tác công nợ, cần căn cứ trả hộ/ủy quyền; không tự đổi đối tác.
2. Đưa từng hóa đơn còn nợ đầu kỳ và từng hóa đơn phát sinh trong kỳ của đúng đối tác vào danh sách đối chiếu, với số còn nợ tại thời điểm thu. Không coi toàn bộ dư đầu là một hóa đơn hoặc luôn trừ nợ cũ trước nợ mới: khoản thanh toán có thể chỉ định một hóa đơn cụ thể của bất kỳ kỳ nào. Không yêu cầu phải có hóa đơn trong quý mới hạch toán thu nợ cũ. Không phát hành lại bút toán doanh thu hay bút toán số dư đầu kỳ đã có trên sổ.
3. Ưu tiên số/ký hiệu HĐ hoặc hợp đồng, đề nghị thanh toán và chỉ định của người trả; kiểm tra thêm đúng đối tác, ngày, tiền tệ và số còn phải thu sau các giảm trừ. Thông thường khách hàng trả theo hóa đơn, nên cần kiểm tra ở cấp hóa đơn trước khi chấp nhận phân bổ. Số tiền bằng tổng nợ của đối tác hoặc bằng một hóa đơn chỉ là gợi ý; khi có nhiều hóa đơn cùng số tiền, không chọn dòng đầu tiên. Nếu đã biết đúng đối tác nhưng chưa đủ chi tiết hóa đơn, vẫn có thể xác định thu công nợ ở cấp đối tác khi bản chất thu nợ đã rõ; ghi “đã xác định đối tác, chưa phân bổ chi tiết hóa đơn”, giữ khoản thu này riêng và không tự đánh dấu hóa đơn nào đã tất toán. Chỉ dùng FIFO trong cùng đối tác khi quy trình/chính sách đã cho phép và không trái chỉ định thanh toán; ghi rõ phân bổ theo chính sách, không trình bày như chỉ định đã xác nhận của khách hàng.
4. Với khoản nhận đã xác định là thu nợ 131, ghi BC Nợ tài khoản ngân hàng thực tế / Có 131 đúng mã đối tượng. Cập nhật số dư và số tiền còn lại ngay sau khi phân bổ; không dùng lại phần nợ đã thanh toán cho giao dịch sau. Dư đầu kỳ 20 triệu, thu nợ cũ 8 triệu thì phần nợ cũ còn 12 triệu, không sinh thêm doanh thu 8 triệu.
5. Xử lý thanh toán một phần và thanh toán gộp nhiều hóa đơn/cả nợ cũ lẫn nợ mới của cùng đối tác. Tổng phân bổ không vượt số tiền giao dịch hoặc phần nợ còn lại được xác nhận. Một giao dịch có thể cần nhiều dòng nhưng tổng số tiền ngân hàng chỉ được ghi một lần theo tổng các dòng phân tách.
6. Tiền vượt phần công nợ đã xác nhận phải được giải thích riêng theo chứng từ và quy trình (ví dụ ứng trước, đặt cọc, trả hộ hoặc hoàn tiền). Không ép toàn bộ vào nợ cũ, không tự gán mã của chính khách hàng hoặc mặc định đây là doanh thu mới. Dư Có 131 có thể là ứng trước; không coi đó là khoản còn phải thu.
7. Không sinh PT để thu lại hóa đơn đã tất toán bằng khoản ngân hàng phân bổ cho công nợ đầu kỳ. Các hóa đơn chưa ghép được không chứng minh đã thu tiền mặt; thiếu căn cứ thanh toán phải giữ trạng thái cần xác minh.

Ví dụ: đối tác A còn ba hóa đơn đầu kỳ: HĐ 01 = 10 triệu, HĐ 02 = 15 triệu, HĐ 03 = 5 triệu. Khoản thu 15 triệu ghi rõ trả HĐ 02 chỉ tất toán HĐ 02; HĐ 01 và 03 vẫn còn nợ. Khoản thu 8 triệu tiếp theo ghi rõ trả một phần HĐ 01 làm HĐ 01 còn 2 triệu, HĐ 03 còn 5 triệu. Nếu khoản thu đầu chỉ ghi “thanh toán” và thiếu thông tin đối chiếu khác, không khẳng định đã trả HĐ 02 chỉ vì trùng 15 triệu.

## 3. Bảng đối chiếu phải lưu cùng phiên bản kết quả

Lưu `0.doi_chieu_cong_no.md`; nếu đã có file hoặc kết quả là `0.result_N.md`, dùng tên phiên bản tương ứng chưa tồn tại, không ghi đè. Ghi rõ file kết quả được kiểm tra, ngày chốt, nguồn dữ liệu và mức đủ căn cứ.

- Bảng đầu kỳ: tài khoản, mã/tên đối tác, tiền tệ, dư Nợ đầu kỳ, dư Có đầu kỳ, nguồn file/dòng, ngày mốc và cách chuyển về ngày chốt.
- Bảng hóa đơn tồn đầu kỳ: mã đối tác, định danh hóa đơn/hợp đồng, ngày, tiền tệ, số phải thu đã ghi nhận, giảm trừ/điều chỉnh, đã thu trước kỳ, còn nợ tại ngày chốt, nguồn file/dòng và mức xác định. Có danh sách riêng các khoản lịch sử chưa phân bổ; không gán giả vào hóa đơn.
- Bảng phân bổ: giao dịch ngân hàng/file/dòng/ngày/số tiền, đối tác, bút toán/số chứng từ, định danh từng hóa đơn được trả, số tiền phân bổ, số còn nợ trước/sau mỗi lần thu, phần thu nợ đầu kỳ, phần thu nợ phát sinh trong kỳ, phần ứng trước/khác/chưa xác định và căn cứ ghép. Nếu chỉ biết số dư tổng theo đối tác, nêu rõ giới hạn chi tiết hóa đơn.
- Bảng cuối kỳ: dư đầu theo đối tác + phát sinh Nợ 131 - phát sinh Có 131 = dư cuối thuần; trình bày dư Nợ/Có và các khoản còn chưa xác định. Phát sinh Có gồm cả thu nợ và các giảm trừ/điều chỉnh có căn cứ, không chỉ tiền ngân hàng.

Không báo hoàn thành đối soát chi tiết nếu thiếu số dư đầu kỳ, chưa dựng/giải thích được thành phần hóa đơn, có chênh lệch chưa giải thích hoặc khoản thu chưa xác định đối tác/hóa đơn. Phân biệt kết quả đúng ở cấp đối tác với đối soát đã hoàn thành ở cấp hóa đơn. Có thể tiếp tục các nghiệp vụ độc lập đủ căn cứ và báo rõ phần còn thiếu.
