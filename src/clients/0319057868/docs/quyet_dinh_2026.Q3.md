# Quyết định phạm vi quý 2026.Q3

Ngày 26/10/2026, khi được thông báo sao kê TCB chỉ đến 14/09/2026, người dùng trả lời: **“tạm thời bỏ qua 15-30/9, tiến hành hạch toán tiếp”**.

Tiếp tục hạch toán hóa đơn quý III đủ căn cứ và đối chiếu sao kê hiện có; tạm bỏ qua phần sao kê 15–30/09/2026. Chỉ dẫn này không xác nhận không phát sinh trong khoảng bị bỏ qua, không xác nhận đã cân ngân hàng đến 30/09 và không bỏ các hóa đơn cuối tháng 9 khỏi phạm vi.

Người dùng tiếp tục xác nhận **“Đồng ý mapping và số đề xuất”** cho mã `PKTK`, bộ phận trống, dùng `Dien_Giai`. Đề xuất ban đầu 997221–997227 đã được agent đính chính trong chat thành **997226–997232**, vì đọc SQL thấy 997221–997225 đã có. Bộ kết quả dùng dải đã đính chính không trùng, không lấy MAX số hóa đơn làm quy tắc đánh số. Đây là dải bổ sung cho riêng bảy hóa đơn lần này, không là quy tắc mặc định cho kỳ sau.

Với câu hỏi HĐ DBV 10437 và HĐ xuất quà 20, người dùng trả lời **“mã đối tượng là 0319057868”**. Áp dụng mã này cho HĐ xuất quà 20; mã đã có trong DmDt. Câu trả lời chưa xác nhận tài sản/thời hạn bảo hiểm DBV, cách hạch toán hay diễn giải HĐ xuất quà. Hai hóa đơn này tiếp tục chờ, không đưa vào kết quả bảy hóa đơn đủ căn cứ.

## Yêu cầu chạy lại ngày 26/10/2026 — thay phạm vi bổ sung

Người dùng phản hồi **“quy trình hạch toán có vấn đề rồi, còn thiếu rất nhiều bút toán, mã loại chứng từ cũng bị sai, chạy lại skill”**. Khi được hỏi rõ phạm vi, người dùng chọn **“Lập lại toàn bộ quý III”**, bao gồm nghiệp vụ đã có SQL để rà soát/lập lại sổ. Vì vậy kết quả mới phải bao phủ nguồn cả quý, không chỉ xuất bảy hóa đơn chưa có SQL. Sổ SQL dùng làm nguồn chứng từ đã ghi và đối chiếu; không nhập chồng toàn bộ kết quả lên database đang có các chứng từ đó.

Đã kiểm tra mẫu `D:\CTKT.xls` dùng PK/BN/BC/PC và `DmCt` H2P dùng mã nội bộ PKTK/NHBN/NHBC/TMPC. Mapping hiện hành ở [template](1.template_output.md) thay đề xuất PKTK trong lần đầu. Giữ nguyên các diễn giải gốc đã ghi trong sổ khi tái lập; không tự rút câu hoặc thay đổi mục đích nghiệp vụ đã ghi.

Với câu hỏi xử lý PKTS/PKKT, người dùng trả lời **“không hạch toán PKTS và PKKT, tôi sẽ tự làm sau”**. Loại khỏi bộ mới cả 15 dòng PKTS/3 chứng từ và 3 dòng PKKT/3 chứng từ Q3; giữ bảng bàn giao trong tracking. Không lặp các khoản này hoặc đổi thành PK.

Phạm vi sao kê vẫn tạm bỏ 15–30/09. Khoản làm tóc 4.800.000 không hóa đơn ngày 20/07 tiếp tục bàn giao theo quy trình doanh nghiệp; không đưa lại vào bộ lập của agent dù đã có SQL. Phiếu chi tiền mặt được tái lập chỉ theo các chứng từ TMPC đã ghi trong SQL; không suy thêm PC từ các hóa đơn chưa thấy thanh toán ngân hàng. Hai hóa đơn DBV và xuất quà nêu trên vẫn chờ thông tin; không coi yêu cầu lập lại cả quý là xác nhận cách hạch toán hai hóa đơn đó.

## Cập nhật sao kê ngày 26/10/2026 — thay phần để ngoài BN 137 ở lượt trước

Người dùng yêu cầu tiếp: **“còn sao kê nữa, sao chưa hạch toán. xem lại data quá khứ của khách hàng này trong trong database rồi update lại docs và update cả result nữa”**. Đã đối chiếu từng mã sao kê với SQL và result: 57 giao dịch đã có, chỉ BN 137 ngày 20/07 còn để ngoài theo quy định bàn giao trước đó.

Trong phạm vi **lập lại lịch sử Q3** mà người dùng yêu cầu, bổ sung lại đúng chứng từ đã có SQL: FT26201262759756, NHBN/137, Stt `EZ000000000000017984`, Nợ 62771/Có 112111, 4.800.000 VND, mã đối tượng trống, diễn giải nguyên văn `Chi phí trang điểm, làm tóc livestream (Không hóa đơn)`. Đây là tái lập một dòng sổ đã có, không phải tự ước tính chi phí hoặc xác nhận điều kiện thuế. Cập nhật này thay việc loại riêng BN 137 trong lượt trước; **không mở rộng thành quy tắc tự hạch toán mọi chi không hóa đơn của kỳ mới**. Quy định chung bàn giao chi không hóa đơn vẫn áp dụng ngoài phạm vi tái lập đã yêu cầu.

Sau cập nhật: 58/58 giao dịch Q3 trên CSV có bút toán trong result, tổng 539 dòng/378 chứng từ, Nợ/Có 9.054.363.951 VND. Phạm vi tạm bỏ sao kê 15–30/09, việc người dùng tự làm PKTS/PKKT và hai hóa đơn còn chờ không thay đổi. Chưa ghi SQL, không nhập thêm BN 137 lên sổ đã có chứng từ này.
