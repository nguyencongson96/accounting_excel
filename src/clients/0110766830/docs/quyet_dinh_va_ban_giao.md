# Quyết định và bàn giao — 0110766830

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. 2026.Q3 — 0.dieu_chinh_cong_no.md

Nguồn trước khi dọn: `src/clients/0110766830/2026.Q3/result/0.dieu_chinh_cong_no.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

### Chuyển khoản ứng trước sang đúng đối tượng — Q3/2026

Đây là bút toán đi kèm bắt buộc với `0.result.md`, **chưa nằm trong bảng 14 cột**. Hai phía 331 có hai đối tượng khác nhau nên không ép vào một cột đối tượng. Nhập trên phiếu kế toán hỗ trợ đối tượng riêng từng phía; trong workbook xem sheet `Chuyen_doi_tuong`.

| MÃ CHỨNG TỪ SQL | NGÀY GHI SỔ | SỐ CHỨNG TỪ | TK NỢ | ĐỐI TƯỢNG NỢ | TK CÓ | ĐỐI TƯỢNG CÓ | CÔNG TRÌNH | SỐ TIỀN | DIỄN GIẢI |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| PKTK | 27/08/2026 | 1884 | 331 | 0108657898 | 331 | 0000000001 | CT1 | 20000000 | Chuyển khoản ứng trước 29/04/2026 sang Trường An, thanh toán HĐ số 33 |

Căn cứ: người dùng xác nhận 21/10/2026 khoản ứng 20 triệu ngày 29/04 dùng thanh toán HĐ 33 ngày 27/08. Nguồn cũ NHBN 307 / Stt EZ000000000000018790, Nợ 331/0000000001 Có 112111, 20.000.000; ngân hàng Q2 ngày 29/04 ghi “cửa nhôm kính ct Truong An”. Chuyển đối tượng vào ngày nhận hóa đơn, không ghi thêm tiền chi hoặc chi phí. Chỉ chuyển 20 triệu đã xác nhận, không chuyển cả dư Nợ mã chung.

## 2. 2026.Q3 — 0.ghi_chu.md

Nguồn trước khi dọn: `src/clients/0110766830/2026.Q3/result/0.ghi_chu.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

### Theo dõi hạch toán Ngọc Quang — 2026.Q3

Ngày lập: **21/10/2026**. Đã lập bộ file. **Kiểm tra SQL lúc 22:58 ngày 21/10: đã có phát sinh Q3 của các loại PKTK/NHBN/NHBC/PNMH/PKTS, chưa có 19 phiếu chi 1897–1915. Agent chỉ SELECT, không nhập hay sửa SQL.** File Excel có ba sheet: `But_toan` (69 dòng), `Chuyen_doi_tuong` (1 bút toán có hai đối tượng), `Doi_tuong_moi` (2 mã đề nghị lúc lập file). File 14 cột chính không chứa PNMH và bút toán chuyển đối tượng; các số dư dự kiến tính sau toàn bộ phần liên quan.

| Nội dung | Kết quả |
|---|---:|
| Hóa đơn nguồn đã xem / đã ghi nhận | 22 / 22 |
| Giao dịch ngân hàng Q3 đã ghi nhận | 19 / 19 dòng nhìn thấy trên ảnh |
| Giao dịch tháng 10 giữ ngoài kết quả Q3 | 3 |
| Dòng bút toán chính | 69: PK 31, BN 12, BC 7, PC 19; không có PT |
| Chứng từ chính / chứng từ chuyển đối tượng | 63 / 1 |
| Số chứng từ dùng cho cả bộ | 1851–1915; số 1882 ở PNMH, số 1884 nằm ở sheet chuyển đối tượng |
| Tổng Nợ = Có của file chính | 2.612.515.641 |
| Tổng Nợ = Có của phiếu chuyển đối tượng | 20.000.000 |
| Ngân hàng cuối 30/09 theo nguồn và bộ kết quả | 966.212 |

### Việc cần theo dõi

| Việc | Đã ghi nhận gì | Bước tiếp theo | Người xử lý | Trạng thái |
|---|---|---|---|---|
| Tạo hai đối tượng mới | Petrolimex Quảng Ninh `5700101690`, Trường An `0108657898` | Bổ sung theo sheet Doi_tuong_moi; lấy địa chỉ từ hóa đơn gốc, chưa có trong bảng nguồn | Kế toán | Trước khi nhập |
| Chuyển 20 triệu ứng trước Trường An | Phiếu **1884 ngày 27/08**, Nợ 331/0108657898, Có 331/0000000001, CT1; đã có xác nhận người dùng | Nhập phiếu có đối tượng riêng từng phía theo bảng chuyển công nợ (nội dung đã chuyển vào hồ sơ này). Không ghi thêm chi ngân hàng và không ép hai đối tượng vào cột G của bảng chính | Kế toán | Có trong file riêng, chưa nhập sổ |
| Công nợ đầu và chi tiết hóa đơn | Lũy kế SQL chốt 30/06 được giữ trong last_quarter_data; CdKT0 trống. Thu/chi đúng đối tượng, chưa phân bổ đầy đủ mọi số dư cũ cho từng hóa đơn/hợp đồng | Đối chiếu sổ khóa kỳ, xác nhận đối tác và các khoản mã chung. Xem công nợ (tài liệu tạm đã dọn) | Kế toán / doanh nghiệp | Đối soát còn mở |
| Hai khoản thu SDVD tổng 1,1 tỷ | 112111/131 tại 0101437389. 500 triệu ghi CT2 theo nội dung Hưng Yên; khoản 600 triệu chưa gắn CT vì nguồn chỉ ghi “XD trạm” | Xác định hợp đồng/công trình của khoản 600 triệu và hóa đơn nghiệm thu nếu có. Không coi cả 1,1 tỷ là thanh toán HĐ1 của CT1 và không tự tạo doanh thu/VAT | Doanh nghiệp | Cần hồ sơ |
| Hai khoản trả Việt Tiệp tổng 1,1 tỷ | 331/112111, giảm dư Có theo nhà cung cấp từ 2.261.406.895 xuống 1.161.406.895 | Xác nhận phân bổ HĐ1056 hoặc chỉ định khác. Sổ chỉ thấy HĐ1056 mở nhưng nội dung chuyển tiền chưa có số hóa đơn; giữ khoản trả chưa phân bổ chi tiết | Doanh nghiệp / kế toán | Đúng đối tác; hóa đơn còn mở |
| Ảnh sao kê và phạm vi kỳ | Đã trích toàn bộ 22 dòng nhìn thấy, tách 19 Q3 và 3 Q4; chuỗi số dư đọc được khớp cả với 482.275 đầu Q3 | Xác nhận đây là toàn bộ sao kê 01/07–30/09; ảnh không có tiêu đề kỳ và số trang. Không suy việc số dư khớp là bằng chứng không còn trang/giao dịch khác | Doanh nghiệp | Chưa xác nhận đủ kỳ |
| HĐ66 — bình/máy nước nóng CT1 | Đã chuyển sang [PNMH 1882](../2026.Q3/result/0.result_PNMH.xls), 2 mặt hàng, net 3.599.074/VAT287.926; bỏ 2 dòng PK | Tạo mã vật tư 0000111/0000112 theo danh mục mới (tài liệu tạm đã dọn), rồi import PNMH; không nhập thêm PK. Chưa có phiếu xuất dùng | Kế toán | File đủ chi tiết; cần tạo danh mục |
| Giá thành và phần phân bổ/kết chuyển | HĐ33 ghi 6277/331 tại CT1; lương 622 đã ghi nhưng chưa phân bổ CT do chưa xác định đội thi công cho CT nào | Đối chiếu công trình của lương, lịch phân bổ 2422, xuất dùng vật tư, dở dang, nghiệm thu và bù VAT/kết chuyển. Chưa tạo số kết chuyển hoặc lịch phân bổ bằng cách lặp số cũ | Kế toán | Ngoài phần đủ hồ sơ hiện tại |
| Nhiên liệu và VAT | Theo cách ghi hiện tại: 6428/331, giữ VAT 0 đúng bảng nguồn. Phí ngân hàng và hai HĐ công trình có VAT theo nguồn | Rà mục đích sử dụng dầu Điêzen/xe/máy; nếu phục vụ trực tiếp công trình thì xem phân loại/phân bổ phù hợp. Kiểm tra hồ sơ khấu trừ và hóa đơn gốc | Doanh nghiệp / kế toán | Áp dụng mẫu lịch sử, cần hồ sơ sử dụng |
| Ánh xạ công cụ nhập | Workbook giữ 14 cột, mã tài khoản/đối tượng dạng text; đã đọc lại kiểm tra | Kiểm tra mã rút gọn PK/BN/BC, trường bộ phận/công trình trên công cụ nhập thực tế; chưa chạy nhập thử vào phần mềm | Kế toán | Chưa xác nhận cấu hình nhập |

### Những cách xử lý đã chốt

- Người dùng xác nhận **HĐ66 và HĐ33 dùng cho Trạm trộn Đông Anh (CT1)**. HĐ66 là vật tư phục vụ công trình, giữ ở 1521 cho đến khi có hồ sơ xuất/lắp; HĐ33 là dịch vụ thi công lắp đặt cửa, dùng 6277. Không dùng nhà cung cấp làm căn cứ duy nhất cho mọi lần mua sau.
- Người dùng xác nhận **20 triệu chuyển ngày 29/04 dùng thanh toán HĐ33**. Đã lập phiếu chuyển đối tượng **1884** riêng; sau khi thực hiện, dư Có Trường An còn **42.858.912**, dư Nợ mã chung 331 còn **114.590.940**.
- Hai khoản nộp tiền **1 triệu ngày 22/07 và 80 triệu ngày 20/08** được xác nhận từ **tiền mặt sang ngân hàng**: 112111/1111, không phải doanh thu hay vốn góp mới.
- Người dùng xác nhận **41 triệu + 29 triệu ứng tổ đội Lâm là lương**, cùng 10 triệu ứng lương Tiềm: net tháng 8 **80.000.000**; gross **88.888.889**, TNCN **8.888.889**. Ghi hai dòng PK cuối tháng, thanh toán đúng 21/08. 3341 đầu Q3 theo SQL bằng 0 nên không trích trùng khoản lương còn phải trả đầu kỳ.
- Trong nguồn hiện có không thấy chi lương tháng 7 hoặc tháng 9, nên chưa tạo PK lương hai tháng này; điều này không khẳng định doanh nghiệp không có lương ngoài bộ nguồn đã nhận. Chưa tự sinh tiền nộp thuế từ bút toán trích TNCN.
- Người dùng xác nhận tiếp tục thuê văn phòng **7.800.000/tháng** trong Q3: ghi ba PK cuối tháng, tổng **23.400.000**, đối tượng Nguyễn Thị Hồng `001154001434`. Đã được người dùng xác nhận thanh toán tiền mặt, bổ sung 3 PC 331/1111, tổng 23.400.000; ngày tạm cuối tháng.
- Người dùng đã xác nhận nhiên liệu/đi lại thanh toán tiền mặt: tạo 16 PC 331/1111 theo từng HĐ; không tạo PT thu khách; không sao chép bảo hiểm/phí kế toán hoặc chính sách 344 của WNBF.

### Tra cứu khi cần

[Excel](../2026.Q3/result/0.result.xlsx) · [Bút toán 14 cột](../2026.Q3/result/0.result.md) · Chuyển đối tượng 1884 (nội dung đã chuyển vào hồ sơ này) · Đối tượng mới (tài liệu tạm đã dọn) · Công nợ (tài liệu tạm đã dọn) · Phân bổ thanh toán (tài liệu tạm đã dọn) · Tham chiếu từng dòng (tài liệu tạm đã dọn) · Kiểm tra (tài liệu tạm đã dọn).

<details>
<summary>Mốc kiểm soát sau khi nhập đủ bộ, chưa gồm kết chuyển/phân bổ chưa thực hiện</summary>

| Khoản | Số theo bộ dữ liệu đã đọc |
|---|---:|
| 112111 | Dư Nợ 966.212 |
| 3341 | 0 |
| 3335 | Dư Có 33.614.444; gồm đầu kỳ 24.725.555 và Q3 8.888.889 |
| 131 / SDVD | Dư Có 1.449.893.610 |
| 131 / mã chung | Dư Có 850.000.000 |
| 331 / Việt Tiệp | Dư Có 1.161.406.895 |
| 331 / Trường An sau phiếu 1884 | Dư Có 42.858.912 |
| 331 / Bảo An Phát | Dư Nợ 4.813.000; chưa phân bổ ứng 8.700.000 vào HĐ66 |
| 331 / Nguyễn Thị Hồng | 0 sau 3 PC thuê văn phòng |

Các mốc này là số dư theo lũy kế SQL cộng bộ kết quả, chưa thay xác nhận công nợ hay số dư mở sổ được duyệt. Không đưa lại số dư đầu kỳ vào file nhập.

</details>


### Tách nhập kho theo kiểm tra SQL ngày 21/10/2026

[File PNMH riêng](../2026.Q3/result/0.result_PNMH.xls): 1 phiếu số **1882**, 2 mặt hàng; net **3.599.074**, VAT **287.926**, tổng **3.887.000**. Người dùng xác nhận mỗi mặt hàng số lượng 1, đơn giá 2.300.000 và 1.299.074. File chính đã bỏ hai dòng PK của HĐ66. 69 dòng chính + PNMH + chuyển đối tượng 1884 vẫn có tổng Nợ/Có **2.636.402.641** và dãy số 1851–1915. Công nợ dự kiến được tính trên cả ba phần.

**Trước khi import PNMH, tạo hai mã vật tư 0000111/0000112 (tài liệu tạm đã dọn) với Tk_Vt=1521.** Chưa tạo mã hoặc nhập dữ liệu vào SQL; chưa kiểm thử trình import 3TSoft. Mẫu giữ đúng 26 cột, hai hàng tiêu đề và ô gộp D:\PNMH.xls; dùng 331TN (mua trong nước), không chép 331NK trong dòng ví dụ. Kho HH theo lịch sử bình nước nóng cùng NCC. Diễn giải PNMH chỉ ghi tên mặt hàng theo yêu cầu người dùng; CT1 lưu ở hồ sơ tham chiếu, không điền vào cột Hợp đồng. Chi tiết luồng và cấu hình tại báo cáo kho (nội dung đã chuyển vào hồ sơ này).


### Bổ sung chi tiền mặt theo xác nhận 21/10/2026

19 PC số 1897–1915, tổng **44.922.007đ**, Nợ331/Có1111, gồm 16 HĐ nhiên liệu/đi lại 21.522.007 và 3 tháng thuê VP 23.400.000. Ngày tạm theo ngày HĐ/cuối tháng; cần đối chiếu sổ quỹ nếu khác. Công nợ các khoản này về 0; quỹ dự kiến **6.618.480.789**. HĐ33 còn 42.858.912 chưa trả theo xác nhận mới; không thêm PC. Phí ngân hàng, lương chuyển khoản, PNMH và phiếu chuyển ứng cũ giữ nguyên. Xem Xác nhận chi tiền mặt (nội dung đã chuyển vào hồ sơ này).

## 3. 2026.Q3 — 0.luong_xuat_nhap_kho.md

Nguồn trước khi dọn: `src/clients/0110766830/2026.Q3/result/0.luong_xuat_nhap_kho.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

### Luồng nhập xuất kho đang sử dụng trong database Ngọc Quang

Đọc trực tiếp bằng SELECT ngày 21/10/2026, database `DB3TSOFT_V200_NGOCQUANG`. Sổ đọc được kết thúc 30/06/2026, chưa có Q3. Chỉ khảo sát và lập file, chưa sửa database.

| Nghiệp vụ thực tế | Mã chứng từ | Mã nhập xuất | Định khoản đã ghi | Số chứng từ / dòng vật tư |
|---|---|---|---|---|
| Mua vật tư/CCDC trong nước, công nợ | PNMH | 331TN | 1521 hoặc 1531 / 331; VAT 1331 / 331 | 69 / 153 |
| Xuất nguyên vật liệu cho công trình | PXCT | 621 | 621 / 1521 | 44 / 69 |
| Xuất CCDC đưa vào chi phí trả trước | PXNB | 2422 | 2422 / 1531 | 4 / 4 |
| Phân bổ chi phí CCDC sau xuất dùng | PKTS | Theo chứng từ phân bổ | 6273 hoặc 6423 / 2422 | 24 / 45 dòng kế toán |

PNMH phát sinh 20/07/2024–20/03/2026; PXCT 29/07/2024–07/12/2025; PXNB 20/07/2024–20/03/2026. PNXT (nhập xuất thẳng) và PNCT (nhập lại từ công trình) có cấu hình nhưng chưa thấy phát sinh trong tập sổ đã đọc. Không tự chọn hai loại này chỉ vì hàng mua phục vụ công trình.

PNMH có **306 dòng sổ cái**, gồm 149 dòng vật tư 1521/331, 4 dòng CCDC 1531/331 và 153 dòng thuế 1331/331. Có **153 dòng vật tư** trong SoCaiVT, không phải 306 dòng nhập hàng. Toàn bộ 69 phiếu đã đọc có PostedGL=true, Ma_Nx=331TN. Kho HH có 18 phiếu/67 dòng hàng; kho VT có 51 phiếu/86 dòng hàng. DmKho còn có TP (thành phẩm) và GB (gửi bán).

### Cấu trúc và cách chống ghi trùng

- `DmCt`: loại chứng từ; `DmNx`: nghiệp vụ nhập xuất và tài khoản đối ứng; `DmVt`: mã hàng, đơn vị và tài khoản tồn kho; `DmKho`: mã kho.
- `CtMH`/`CtMH0`: đầu phiếu và chi tiết nhập mua; `CtNX`/`CtNX0`: đầu phiếu và chi tiết xuất/nhập kho khác. Liên kết bằng Stt; dòng chi tiết có Stt0, Ma_Vt, Ma_Kho, So_Luong, Gia, Tien và tài khoản.
- `SoCaiVT`: số lượng, giá trị theo vật tư/kho; `SoCaiKT`: định khoản tài chính. Khi PNMH được ghi sổ, cấu hình hiện tại sinh cả kho và kế toán. **Không tạo thêm PK cùng hóa đơn**. PKTK không thay phiếu nhập/xuất có số lượng.
- Ma_Nx **331TN** là mua công nợ trong nước, VAT 1331/331. **331NK** trong dữ liệu mẫu D:\PNMH.xls là mua nhập khẩu, có cấu hình thuế khác; không chép vào HĐ66.
- Điểm cần rà trước khi dùng PXNB kỳ sau: DmNx có mã/tên 2422 nhưng trường Tk hiện là **2421**, trong khi lịch sử CtNX0/SoCaiKT ghi **2422/1531**. Cần kiểm tra cách phần mềm lấy tài khoản khi lập phiếu, không tự sửa cấu hình hay khẳng định mã 2422 chắc chắn sinh tài khoản 2422. Q3 chưa tạo PXNB.

### Sửa kết quả Q3/2026

HĐ66/C26TAP ngày 25/08 của Bảo An Phát, MST/mã đối tượng 0901160087, mua bình và máy nước nóng lắp Trạm trộn Đông Anh. Người dùng xác nhận mỗi mặt hàng số lượng 1, đơn giá trước thuế 2.300.000 và 1.299.074. Tổng net 3.599.074, VAT 287.926, thanh toán 3.887.000.

Đã tách thành [0.result_PNMH.xls](../2026.Q3/result/0.result_PNMH.xls), một phiếu số **00001882** (1882), hai dòng mặt hàng. Giữ Sheet1, **26 cột, hai hàng tiêu đề và vùng ô gộp** theo D:\PNMH.xls; xóa toàn bộ dòng dữ liệu ví dụ năm 2011 và công thức mẫu. Giá trị tiền là số cố định, mã vật tư/đối tượng giữ dạng text.

Mã nhập **331TN**, kho **HH** tham chiếu các PNMH mua bình nước nóng cùng NCC tháng 3/2026; tài khoản tồn **1521** theo hàng lắp công trình. Hai mẫu hàng mới không trùng mã cũ: 0000111 và 0000112 (tài liệu tạm đã dọn) là mã đề nghị cần tạo trước khi import. Không dùng mã bình 20L hay bình QQ-AE cho hàng QQ EVO 30L ME. Chưa tạo danh mục trong SQL.

Mẫu không có cột công trình Ma_Sp. Theo yêu cầu người dùng, diễn giải PNMH chỉ ghi tên mặt hàng, không thêm CT1/tên công trình; thông tin CT1 lưu trong hồ sơ tham chiếu, không điền vào cột Hợp đồng. Chưa có phiếu xuất dùng nên chưa tạo PXCT hay chi phí 621. Khi có hồ sơ xuất, lập PXCT và gắn CT1 tại trường công trình đúng của nghiệp vụ xuất; giá xuất theo phần mềm/sổ kho, không tự lấy giá nhập thay giá xuất.

HĐ33 là **dịch vụ thi công lắp đặt cửa**, tiếp tục PK 6277/331 và 1331/331 tại CT1; không chuyển mọi hóa đơn có nhắc vật tư thành nhập kho.

Hai dòng PK của HĐ66 đã loại khỏi [file chính](../2026.Q3/result/0.result.xlsx). File chính còn **69 dòng/63 chứng từ**, Nợ = Có **2.612.515.641**. Cộng PNMH 3.887.000 và phiếu chuyển đối tượng 1884/20 triệu, cả bộ giữ **2.636.402.641**, số 1851–1915 không đổi. Công nợ dự kiến tính sau khi nhập cả ba phần. Chưa thử nhập vào giao diện phần mềm.

Nguồn kiểm tra còn giữ: danh mục và phiếu chi tiết (tài liệu tạm đã dọn), mã nhập xuất và tổng hợp kho (tài liệu tạm đã dọn). Cấu trúc bảng và mẫu PNMH đã được tổng hợp trong báo cáo này và tài liệu template; các bản xuất schema/template tạm đã dọn.


Các số tổng trên đã cập nhật sau khi bổ sung 19 PC/44.922.007 theo xác nhận tiền mặt; file PNMH và HĐ66 không đổi.

## 4. 2026.Q3 — 0.xac_nhan_thanh_toan_tien_mat.md

Nguồn trước khi dọn: `src/clients/0110766830/2026.Q3/result/0.xac_nhan_thanh_toan_tien_mat.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

### Xác nhận và phân bổ chi tiền mặt Q3/2026

Ngày cập nhật: 21/10/2026. Người dùng xác nhận: “các chi phí đầu vào, như xăng xe, đi lại, thuê văn phòng đều thanh toán bằng tiền mặt”. Đồng thời xác nhận **HĐ33 chưa trả phần còn lại 42.858.912đ, giữ công nợ**.

Đã xác định 16 HĐ nhiên liệu/đi lại của Q3, tổng **21.522.007đ**, và thuê văn phòng 3 tháng × 7.800.000 = **23.400.000đ**; bổ sung **19 PC / 44.922.007đ**, Nợ 331/Có 1111 đúng mã nhà cung cấp. Giữ các bút toán ghi chi phí ban đầu, không ghi thêm 6428/64272 hoặc VAT ở phiếu chi.

**Ngày hạch toán tạm:** ngày hóa đơn đối với nhiên liệu và cuối mỗi tháng đối với thuê văn phòng. Người dùng mới xác nhận phương thức thanh toán, chưa cung cấp ngày thực chi; cần đối chiếu sổ quỹ và điều chỉnh ngày nếu khác.

| Số PC | Ngày hạch toán tạm | Nguồn chi phí | Đối tượng | Nợ | Có | Số tiền |
|:---|:---|:---|:---|:---|:---|:---|
| 1897 | 02/07/2026 | I01 | 0901146759 | 331 | 1111 | 1,030,127 |
| 1898 | 05/07/2026 | I02 | 0901146759 | 331 | 1111 | 830,062 |
| 1899 | 07/07/2026 | I03 | 2800114779 | 331 | 1111 | 900,095 |
| 1900 | 08/07/2026 | I04 | 0901146759 | 331 | 1111 | 870,019 |
| 1901 | 14/07/2026 | I05 | 2800114779 | 331 | 1111 | 950,089 |
| 1902 | 18/07/2026 | I07 | 0100107564 | 331 | 1111 | 1,840,027 |
| 1903 | 24/07/2026 | I09 | 5700101690 | 331 | 1111 | 1,570,106 |
| 1904 | 31/07/2026 | I10 | 2800114779 | 331 | 1111 | 1,350,371 |
| 1905 | 31/07/2026 | R07 | 001154001434 | 331 | 1111 | 7,800,000 |
| 1906 | 07/08/2026 | I11 | 2800114779 | 331 | 1111 | 2,180,006 |
| 1907 | 14/08/2026 | I12 | 0100107564 | 331 | 1111 | 1,830,016 |
| 1908 | 16/08/2026 | I13 | 0100107564 | 331 | 1111 | 1,900,144 |
| 1909 | 24/08/2026 | I15 | 2800114779 | 331 | 1111 | 1,750,094 |
| 1910 | 28/08/2026 | I18 | 2800114779 | 331 | 1111 | 1,280,075 |
| 1911 | 31/08/2026 | R08 | 001154001434 | 331 | 1111 | 7,800,000 |
| 1912 | 02/09/2026 | I19 | 5700101690 | 331 | 1111 | 1,240,080 |
| 1913 | 06/09/2026 | I20 | 0100107564 | 331 | 1111 | 900,143 |
| 1914 | 18/09/2026 | I22 | 0100107564 | 331 | 1111 | 1,100,553 |
| 1915 | 30/09/2026 | R09 | 001154001434 | 331 | 1111 | 7,800,000 |

Số PC bổ sung **1897–1915**, giữ số cũ 1851–1896; bảng chính sắp theo ngày rồi số CT nên số chứng từ không tăng đơn điệu theo thứ tự dòng. Cả bộ không trùng/khuyết số. Chưa nhập hoặc sửa SQL.

Phí ngân hàng đã thanh toán qua sao kê, lương 80 triệu cũng đã chuyển ngân hàng: không tạo thêm PC. Hai khoản nộp quỹ vào ngân hàng 81 triệu giữ nguyên. HĐ66 là nhập kho, có ứng trước cũ chưa phân bổ; không tự thêm chi tiền mặt cho HĐ66 hoặc trả hết các khoản nợ cũ.

Quỹ dự kiến: 6,744,402,796 + 0 - 125,922,007 = **6,618,480,789đ** (chỉ theo lũy kế SQL và bộ chứng từ đã đọc, chưa thay xác nhận quỹ thực tế).

## 5. Bàn giao từ tracking 2026.Q3

Nguồn trước khi dọn: `docs/tracking/2026.Q3.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

Ngày 21/10/2026 đã lập [Excel](../2026.Q3/result/0.result.xlsx), [69 dòng bút toán chính](../2026.Q3/result/0.result.md) (PK 31, BN 12, BC 7, PC 19, không có PT), 63 chứng từ chính và 1 phiếu chuyển đối tượng 1884 (nội dung đã chuyển vào hồ sơ này), cả bộ số 1851–1915. Tổng Nợ/Có chính 2.612.515.641; cộng PNMH 3.887.000 và phiếu chuyển công nợ 20.000.000 là 2.636.402.641. Xử lý 22 HĐ mua vào và 19 giao dịch Q3 trên ảnh, giữ riêng 3 giao dịch Q4; đầu ngân hàng 482.275, thu 1.181.000.937, chi 1.180.517.000, cuối 966.212. Có 2 MST mới cần thêm. Kiểm tra (tài liệu tạm đã dọn): PASS WITH WARNINGS về kỹ thuật, 0 lỗi, 6 nhóm cảnh báo; **đối soát chi tiết còn mở, chưa nhập SQL**. Thuê VP 23.400.000, lương tháng 8 net 80.000.000/gross 88.888.889/TNCN 8.888.889 và liên kết ứng Trường An 20 triệu/HĐ33 theo xác nhận người dùng. Thiếu xác nhận phạm vi cả quý của ảnh, chi tiết phân bổ công nợ cũ/hợp đồng, kho và giá thành. Ghi chú (nội dung đã chuyển vào hồ sơ này) · Công nợ (tài liệu tạm đã dọn). Trạng thái Hoàn tất chỉ theo quy ước đã có kết quả. Backup Chưa xác định; kết nối được database không đồng nghĩa có file backup.


Đã sửa luồng kho: [PNMH 1882](../2026.Q3/result/0.result_PNMH.xls) theo mẫu D:\PNMH.xls, 2 vật tư/3.887.000đ, bỏ hai PK của HĐ66. Cần tạo 2 mã vật tư mới (tài liệu tạm đã dọn) trước khi import. Đã xác nhận đủ số lượng và đơn giá; chưa có phiếu xuất dùng.


Đã thêm19PC/44.922.007 theo xác nhận chi tiền mặt cho nhiên liệu/đi lại và thuê VP; quỹ cuối dự kiến6.618.480.789. Ngày chi tạm theo ngày HĐ/cuối tháng, cần đối chiếu quỹ. HĐ33 giữ công nợ42.858.912 theo xác nhận chưa trả.
