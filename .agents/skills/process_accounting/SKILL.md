---
name: process_accounting
description: Review source transactions and generate accounting results from customer-specific evidence and rules, using SQL for enterprises and files for household businesses, without an accounting generation script.
---

# Lập kết quả hạch toán

## Phạm vi và phương pháp

Agent trực tiếp xác định từng nghiệp vụ. Không chạy `scripts/process_accounting.js`, `scripts/process.py` hoặc script thay thế để chọn tài khoản/đối tượng, phân loại, ghép hóa đơn/thanh toán hay sinh bút toán định kỳ, kể cả dry-run. Công cụ chỉ đọc/chuyển đổi, tính toán, kiểm tra định dạng và ghi/xuất các dòng đã quyết định.

- Tra MST trong `docs/3tsoft-databases.md`, đọc `src/clients/AGENTS.md` và [verify_data](../verify_data/SKILL.md). Hàng loạt bỏ qua khách đã dừng; yêu cầu đích danh MST/kỳ vẫn xử lý và nêu trạng thái, không suy ngày dừng. Chưa rõ loại thì xác minh trước phần phụ thuộc loại.
- Đọc quy trình, template và quyết định khách hàng còn hiệu lực. Ưu tiên yêu cầu hiện hành → quyết định riêng đã xác nhận → module khách hàng → lịch sử → hướng dẫn chung. Ngoại lệ doanh nghiệp thay chỉ dẫn cũ mâu thuẫn.
- Doanh nghiệp đọc `docs/quy-trinh-doanh-nghiep.md` và module 4–11; dùng `connect-3tsoft` chỉ SELECT đúng database, kiểm tra đơn vị/schema/trạng thái ghi sổ/ngày cuối. Lấy danh mục, số dư/lịch sử từ SQL, chống trùng chứng từ đã ghi; không bắt export hay `last_quarter_data/`, không ghi SQL.
- HKD đọc đủ bốn docs (quy trình, template, danh mục tài khoản/đối tượng) và toàn bộ nguồn kỳ/kỳ trước theo quy trình riêng. Thiếu nguồn cốt lõi thì dừng theo verify, không áp ngoại lệ doanh nghiệp.
- Đọc hết dữ liệu theo lô nếu lớn, không dùng vài dòng mẫu thay toàn nguồn. Kết quả cũ không thay chứng từ. Giữ tham chiếu nguồn và căn cứ nghiệp vụ ngắn, không xuất suy nghĩ nội bộ.

## 1. Công nợ và danh mục

- Trước ghép thanh toán đọc [công nợ đầu kỳ](references/cong_no_dau_ky.md). Dựng đúng cutoff, đối tượng/tài khoản/tiền tệ và tổng kiểm soát. Doanh nghiệp dùng SQL tương đương báo cáo trong hướng dẫn; file cũ chỉ tham khảo. Thiếu căn cứ là chưa xác định, không phải 0.
- Dựng từng hóa đơn còn nợ, điều chỉnh, thanh toán đã phân bổ và dư còn lại; tổng đối tượng không phải một hóa đơn. Giữ riêng ứng trước/cọc/chưa phân bổ. Không bù giữa đối tác hoặc cộng trùng tài khoản mẹ/con.
- Mã đối tượng tra danh mục đúng khách hàng (SQL `DmDt` với doanh nghiệp); MST không mặc nhiên là mã nội bộ. Xác minh đã có trước khi đề nghị mới.
- Đối tượng mới lưu `result/0.danh_muc_doi_tuong.md`: STT, Mã đối tượng, Tên đối tượng, Địa chỉ, Mã số thuế, Nhóm đối tượng, Loại đối tượng. HKD dùng quy tắc riêng, chỉ dùng MST làm mã/nhóm `N002` khi quy trình quy định. Doanh nghiệp chưa xác nhận mã/mapping thì ghi đề nghị/chờ, không tự đặt mã hoặc coi đã có SQL. Không tạo hai mã trùng chỉ vì một đối tác vừa mua vừa bán.

## 2. Xem xét từng nghiệp vụ

- Xác định kỳ, ngày, bản chất, số tiền có dấu, Nợ/Có, đối tượng, nguồn và quan hệ thanh toán. Tách ghi nhận doanh thu/chi phí khỏi thanh toán nợ cũ; không ghi lại hóa đơn đã có trong sổ.
- Hóa đơn hủy/thay thế/điều chỉnh cần trạng thái và liên kết có bằng chứng. Gốc đã bị thay thế không ghi đồng thời bản thay thế; ghi bản thay thế một lần theo quy trình. Gốc đã ghi kỳ trước cần căn cứ điều chỉnh/reversal. Chưa rõ thì giữ chờ, không suy từ số tiền/nội dung giống nhau.
- PT Nợ 1111/Có 131 chỉ khi có bằng chứng rõ tiền mặt thực thu, số tiền/ngày. Hóa đơn, số dư nợ, dự kiến thu hoặc vắng tiền vào ngân hàng không chứng minh thực thu. Không thu trùng hóa đơn đã trả qua ngân hàng.
- Phân bổ theo tham chiếu thanh toán và dư hóa đơn còn lại; xét trả một phần/trả gộp. Chỉ xác định được đối tác thì có thể giảm công nợ khi đủ căn cứ nhưng giữ chưa phân bổ hóa đơn; không đánh dấu hóa đơn đã trả.
- Lương, thuế, lãi, hoàn, cọc, chuyển nội bộ, doanh thu sàn, kho và cuối kỳ cần bằng chứng riêng. Không dùng mã đối tượng/mức tiền/tài khoản cố định từ khách khác; không lặp mức cũ chỉ vì đến tháng/quý.

### Doanh nghiệp

- Diễn giải theo `8.dien_giai.md`, kể cả đầu ra. Chọn mẫu đúng khách và quyết định đã chốt; không tự dùng nguyên văn hóa đơn/sao kê hoặc rút gọn cho vừa 200 ký tự nếu chưa có căn cứ. Thiếu mẫu/cần câu mới/mẫu trống/chưa chọn được biến thể thì hỏi, lưu chờ và làm tiếp phần độc lập.
- Bảo hiểm chờ C12 và chi không hóa đơn do người dùng tự hạch toán. Không tự trích/phân bổ/khấu trừ bảo hiểm hoặc gán chi phí/công nợ để khép số. Ghi ngày, tiền, mã giao dịch và nguyên văn vào `result/0.ghi_chu.md` để bàn giao/chống trùng.
- Lương/thuế có thể làm khi đủ căn cứ kể cả chỉ có sao kê; thiếu người nhận, kỳ, gross/net hoặc nghĩa vụ đã trích thì hỏi, không tự gross-up/tỷ lệ/thuế 0.

### Hộ kinh doanh

- Giữ quy trình riêng về đầu vào, tài khoản, bảo hiểm, thuế, doanh thu sàn và đánh số chứng từ; không lấy quy tắc một HKD làm quy tắc chung.
- Diễn giải đầu ra giữ nguyên văn khi ≤200 ký tự; vượt thì chỉnh tối thiểu giữ bản chất/chi tiết phân biệt, không thêm từ không có căn cứ, trừ yêu cầu hiện hành khác. Dòng điều chỉnh theo nguồn riêng.

## 3. Lập kết quả

- Template `1.template_output.md` quyết định số cột, thứ tự, tên, kiểu và định dạng; không yêu cầu cùng tên mục. Bộ A–N thông dụng tách Nợ/Có; không thêm STT hoặc gộp tài khoản nếu template không quy định.
- Doanh nghiệp: cấu trúc lưu workspace chưa xác nhận mọi mapping workbook nhập 3TSoft. Xác minh mã chứng từ/bộ phận/trường diễn giải và số chứng từ trước khi gọi là sẵn sàng nhập; không tự đổi mã SQL sang PK/BN/BC.
- Mọi đầu ra tại `<Quarter>/result/`, tuân thủ [quản lý kết quả của run_pipeline](../run_pipeline/SKILL.md): tên chuẩn, một bộ hiện hành, không hậu tố phiên bản. Chuẩn bị bộ mới nhất quán trước ghi đè; chưa có bộ thay thế thì giữ kết quả cũ. Không xóa nguồn/docs/kỳ trước.
- `0.result.md` chỉ gồm dòng đủ căn cứ. `0.doi_chieu_cong_no.md` có dư đầu/phát sinh/dư cuối và tình trạng từng phân bổ. Tham chiếu nguồn và bàn giao/chờ ở báo cáo cùng thư mục, không chèn trạng thái vào diễn giải chính thức.
- Bao phủ toàn nguồn bằng trạng thái: đã lập, đã có SQL, ngoài kỳ/hủy/thay thế có lý do, bàn giao, chờ. Không mất dấu giao dịch không sinh bút toán; đối chiếu số lượng và tổng tiền vào/ra, tránh đếm đôi nguồn có nhiều dòng.
- Link từ result: nguồn kỳ `../`, docs khách `../../docs/`, kỳ trước `../../<PriorQuarter>/`; giữ số dòng và định danh SQL khi có.

## 4. Kiểm tra và trình kết quả

Tự chạy [check_result](../check_result/SKILL.md) đúng bộ vừa lập. Khi pipeline gọi, trả báo cáo cho pipeline dùng lại, không kiểm tra hai lần bộ không đổi. Check chỉ đọc; process sửa lỗi do agent tạo đã đủ căn cứ rồi kiểm tra lại. Dừng vòng sửa nếu không tiến triển/cần thông tin mới; hỏi phần thiếu, tiếp tục phần độc lập.

Trình số dòng/số chứng từ theo loại (PT nếu có), tổng Nợ/Có, đối tượng mới, tối đa 10 dòng xem trước và link kết quả/kiểm tra/đối chiếu. Phân biệt đã lập phần agent, kiểm tra đạt, sẵn sàng nhập và hoàn tất toàn kỳ; còn thiếu nguồn, mapping chưa chốt, bàn giao/chờ thì nêu rõ giới hạn.
