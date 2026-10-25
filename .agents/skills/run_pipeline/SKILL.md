---
name: run_pipeline
description: Điều phối hạch toán khách hàng theo quý từ kiểm tra nguồn, đọc SQL, chuyển đổi, lập bút toán đến kiểm tra và bàn giao; cũng dùng để chuẩn bị thư mục quý hoặc thống kê khách hàng có kết quả mà không chạy hạch toán.
---

# Điều phối hạch toán

Thực hiện toàn bộ luồng đã được yêu cầu, không chờ nhắc từng bước. Agent đọc chứng từ và xác định từng bút toán; không chạy script tự quyết định nghiệp vụ để chọn tài khoản/đối tượng, phân loại, ghép thanh toán hay sinh bút toán, kể cả dry-run. Công cụ chỉ hỗ trợ đọc/chuyển đổi, tính toán, kiểm tra định dạng và ghi/xuất các dòng đã quyết định.

## Chọn tác vụ

- Hạch toán một khách/kỳ hoặc hàng loạt: theo luồng 0–5 bên dưới; tự tạo thư mục quý còn thiếu trong đúng phạm vi đã yêu cầu.
- Chỉ tạo thư mục quý hoặc xem tiến độ: đọc [hướng dẫn quý](references/quarter-utilities.md), thực hiện trực tiếp thao tác thư mục và thống kê; không chuyển đổi nguồn, lập bút toán hoặc chạy SQL vì yêu cầu tiện ích.
- Cải thiện quy trình dựa trên kết quả lịch sử: chuyển sang [analyze-enterprise-history](../analyze-enterprise-history/SKILL.md), chế độ đối chiếu; không ghi đè kết quả lịch sử.

## Nguồn SQL và lưu trữ dùng chung

Đọc [quy định chung](../../../src/clients/AGENTS.md) trước khi thực hiện. Với mọi khách hàng đã có database, gồm doanh nghiệp và HKD, dùng [connect-3tsoft](../connect-3tsoft/SKILL.md) để đọc danh mục, số dư và lịch sử tại đúng cutoff; không yêu cầu hoặc tạo lại `last_quarter_data/` và bản export danh mục. Khách chưa có database dùng nguồn thay thế được quy trình riêng xác định. Phân biệt nguồn SQL với quy tắc hạch toán: HKD vẫn giữ nghiệp vụ riêng, không áp quy tắc doanh nghiệp.

Thư mục `result/` chỉ giữ file kết quả và Excel/result bổ sung. Báo cáo kiểm tra, bảng công nợ/phân bổ, danh mục đề nghị, ghi chú và bản trích SQL chỉ dùng tạm trong khi xử lý. Bàn giao đầy đủ lỗi, phần chưa kiểm và khoản chờ trong chat/tracking; quyết định lâu dài đã xác nhận lưu vào docs khách hàng trước khi dọn file tạm. Không sửa cấu trúc file import để nhét ghi chú và không xóa nguồn sao kê/hóa đơn. Các yêu cầu lưu báo cáo riêng bên dưới chỉ áp dụng tạm trong phiên, trừ khi người dùng yêu cầu giữ hoặc xuất báo cáo.

## 0. Chọn khách hàng và nhánh

- Tra MST nguyên dạng trong `docs/3tsoft-databases.md`, giữ số 0 đầu: xác định loại theo mục Doanh nghiệp/Hộ kinh doanh, database và trạng thái. Không suy loại theo độ dài MST hoặc tên database.
- Hàng loạt chỉ chọn `Đang tiếp tục`, liệt kê khách `Đã dừng hạch toán` được bỏ qua. Yêu cầu đích danh MST/kỳ vẫn cho phép làm kỳ đó và nêu trạng thái hiện tại; không tự đổi trạng thái hoặc suy ngày dừng cho quá khứ. Kiểm tra lịch sử không bị chặn vì đã dừng. Chưa rõ loại thì xác minh trước phần phụ thuộc loại.
- Đọc `src/clients/AGENTS.md`, quy trình và template khách hàng. Doanh nghiệp đọc thêm `docs/quy-trinh-doanh-nghiep.md` và module 4–11 được liên kết; HKD giữ yêu cầu nguồn và quy trình riêng hiện có.
- Ưu tiên yêu cầu hiện hành → quyết định riêng đã xác nhận còn hiệu lực → module khách hàng → bằng chứng lịch sử → hướng dẫn chung. Ngoại lệ doanh nghiệp về SQL, diễn giải, bảo hiểm, chi không hóa đơn thay chỉ dẫn cũ mâu thuẫn.

## 1. Kiểm tra và chuyển đổi nguồn

Thực hiện [verify_data](../verify_data/SKILL.md) theo nhánh. Loại `result/`, kết quả cũ và workbook xuất khỏi đầu vào.

- Luôn quét Excel chưa chuyển đổi hoặc đã thay đổi dù đủ tên Markdown; kiểm tra nội dung/phạm vi, không chỉ tồn tại file. Có Excel bất kỳ không chứng minh có nguồn tương ứng phần thiếu.
- Tự dùng [excel-to-md](../excel_to_md/SKILL.md) trên từng workbook/thư mục nguồn đã xác minh, lưu cạnh nguồn. Không quét chuyển đổi thư mục quý nếu có thể kéo theo workbook kết quả; không ghi đè phần người dùng bổ sung mà chưa giữ được nội dung đó.
- Xem log integrity và đối chiếu sheet/dòng/cột, ngày, MST. File tồn tại hoặc exit code 0 chưa đủ. Có `Integrity Check FAILED` thì xác định nguyên nhân; chỉ tiếp tục nếu đối chiếu trực tiếp chứng minh dữ liệu dùng để xử lý còn nguyên vẹn và ghi giới hạn. Sai khác chưa giải quyết thì chặn phần phụ thuộc.
- Re-verify sau chuyển đổi. Thiếu nguồn cốt lõi mà quy trình nhánh bắt buộc thì dừng, nêu chính xác phần thiếu. Không coi thiếu nguồn là không phát sinh hoặc dư 0.
- Doanh nghiệp không bị chặn bởi thiếu danh mục export hoặc `last_quarter_data/`; SQL lỗi thì ghi phần chưa xác minh, nguồn thay thế cần thiết và chỉ làm phần độc lập đủ căn cứ.

## 2. Chuẩn bị dữ liệu và lập bút toán

Thực hiện [process_accounting](../process_accounting/SKILL.md).

- Doanh nghiệp dùng `connect-3tsoft`, chỉ SELECT đúng database; kiểm tra đơn vị/schema/trạng thái ghi sổ/ngày cuối, đọc danh mục, số dư, lịch sử và chống trùng SQL. Pipeline không ghi SQL.
- HKD giữ quy tắc nghiệp vụ riêng; danh mục và lịch sử đọc SQL khi có database, chỉ yêu cầu nguồn file thay thế khi chưa có database.
- Dựng công nợ đúng cutoff và từng hóa đơn còn nợ theo [hướng dẫn công nợ](../process_accounting/references/cong_no_dau_ky.md); doanh nghiệp dùng SQL tương đương báo cáo, không yêu cầu xuất file. Giữ ứng trước/cọc/thanh toán một phần/chưa phân bổ; thiếu căn cứ không phải dư 0.
- Đọc hết từng nguồn, tách ghi nhận hóa đơn và thanh toán, kiểm tra hủy/thay thế/điều chỉnh và chứng từ đã ghi sổ. Không tạo PT 1111/131 nếu chưa có bằng chứng thực thu tiền mặt.
- Diễn giải doanh nghiệp theo `8.dien_giai.md`, kể cả đầu ra; thiếu mẫu/cần câu mới/rút gọn/chưa chọn được biến thể thì hỏi và lưu chờ, tiếp tục phần độc lập. HKD giữ nguyên đầu ra ≤200 ký tự; vượt thì chỉnh tối thiểu có căn cứ, trừ yêu cầu hiện hành khác.
- Bảo hiểm chờ C12 và chi không hóa đơn doanh nghiệp bàn giao người dùng, không tự sinh bút toán. Ghi ngày, tiền, mã giao dịch và nguyên văn vào `result/0.ghi_chu.md`; đối chiếu đủ phần đã lập, đã có SQL, bàn giao và chờ.

## 3. Quản lý kết quả

- Đầu ra lưu lâu dài ở `src/clients/<MST>/<Quarter>/result/`: `0.result.md` và các file kết quả Excel/result bổ sung cần thiết. Báo cáo kiểm tra, công nợ, ghi chú, đề nghị đối tượng mới, tham chiếu và phân bổ chỉ dùng tạm. Nguồn/Markdown chuyển đổi giữ tại vị trí nguồn.
- Chỉ một bộ hiện hành tên chuẩn, không hậu tố phiên bản. Chuẩn bị bộ thay thế nhất quán trước khi ghi đè; chưa có bộ mới thì giữ kết quả cũ, ghi lần chạy mới bị dừng. Không gắn báo cáo lần chạy mới cho kết quả cũ như thể đã kiểm tra nó.
- Legacy ở gốc quý/có hậu tố: xác định bộ kết quả và báo cáo nhất quán, đưa vào `result/` tên chuẩn, xác minh và cập nhật link trước khi xóa bản sinh ra đã thay thế. Chỉ xóa file đã nhận diện trong đúng khách/kỳ; không dọn đệ quy, không xóa nguồn/docs/kỳ trước.
- Template khách hàng quyết định cấu trúc. Link từ result: nguồn kỳ `../`, docs khách `../../docs/`, kỳ trước `../../<PriorQuarter>/`, báo cáo cùng thư mục dùng tên file. Giữ số dòng nguồn và định danh SQL khi có.

## 4. Kiểm tra và sửa lỗi

- Tự chạy [check_result](../check_result/SKILL.md) trên đúng bộ vừa lập. Process đã kiểm tra bộ không đổi thì dùng báo cáo đó, không chạy trùng.
- Check chỉ đọc. Điều phối quay lại process sửa lỗi do agent tạo đã đủ căn cứ, cập nhật báo cáo/phân bổ liên quan rồi kiểm tra lại bộ đã sửa.
- Dừng vòng sửa nếu không tiến triển/lỗi không đổi hoặc cần thông tin mới. Thiếu nguồn, mapping chưa xác nhận, quyết định nghiệp vụ cần người dùng thì ghi dòng bị ảnh hưởng và hỏi cụ thể; tiếp tục phần độc lập. Không đẩy lỗi cơ học của agent cho người dùng sửa.
- Tách lỗi, cảnh báo, kiểm tra chưa thực hiện, nghiệp vụ chờ/bàn giao. Không dùng Nợ=Có để kết luận nghiệp vụ đúng hoặc báo PASS đầy đủ khi thiếu kiểm tra trọng yếu.

## 5. Tracking và báo cáo

- Tự cập nhật `docs/tracking/<Quarter>.md` sau kiểm tra; dừng sớm cũng ghi bằng chứng/nguyên nhân cho khách đang xử lý. Đọc quy ước trước, cập nhật đúng MST, giữ dữ liệu khách khác và backup đã xác nhận. Thiếu file/dòng thì tạo theo định dạng hiện hành bằng thông tin đã xác minh.
- Link kết quả cùng bộ từ tracking; lưu kết luận kiểm tra, số liệu kiểm soát và khoản chờ trực tiếp trong tracking, không link file tạm sẽ xóa; cập nhật ngày, đếm lại tổng toàn bảng, kiểm tra link. Không tự đưa khách đã dừng vào tracking kỳ mới khi chỉ quét hàng loạt.
- Trạng thái dịch vụ khác tiến độ kỳ; không dùng ngày dừng chưa biết để xóa/sửa hồi tố lịch sử. Nếu `Hoàn tất` chỉ nghĩa có file không rỗng, giữ quy ước nhưng ghi riêng đã có kết quả, kết luận kiểm tra và phần chờ/bàn giao; không gọi toàn kỳ đã xong chỉ vì có file.
- Doanh nghiệp ghi nguồn SQL/cutoff/mức xác minh thay vì báo thiếu dữ liệu chỉ vì không có `last_quarter_data/`; giữ cột tracking lịch sử theo đúng nghĩa hiện có.
- Báo số file chuyển đổi, hóa đơn/giao dịch đã xem, số dòng và số chứng từ theo loại (PT nếu có), tổng Nợ/Có, đối tượng mới, link kết quả/kiểm tra/tracking và phần tồn. Có thể trình tối đa 10 dòng xem trước; phát hiện và khoản chờ đầy đủ trong bàn giao/tracking; chỉ giữ báo cáo riêng khi người dùng yêu cầu.
- Chỉ xác nhận hoàn tất toàn kỳ khi kiểm tra đạt và không còn nghiệp vụ chưa xử lý, kể cả phần bàn giao chưa xác nhận xong. Có thể xác nhận riêng phần agent đã lập và kiểm tra đạt khi toàn kỳ còn mở.
