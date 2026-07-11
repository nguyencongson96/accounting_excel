# Danh sách Rule Hạch Toán Theo Khách Hàng

> Tổng hợp từ file `docs/0.quy_trinh_tao_result.md` của từng khách hàng.
> Ngày tạo: 2026-07-11

---

## 1. Rule Chung (Áp dụng cho tất cả KH)

### 1.1. Cấu trúc Output

| Cột | Mô tả |
|:---|:---|
| MÃ CHỨNG TỪ | PK/BN/BC/PC |
| NGÀY GHI SỔ | DD/MM/YYYY |
| SỐ CHỨNG TỪ | Đánh số liên tục, max trong lịch sử + 1 |
| BỘ PHẬN | Để trống |
| HỢP ĐỒNG | Để trống |
| MÃ SẢN PHẨM CÔNG TRÌNH | Để trống |
| MÃ ĐỐI TƯỢNG | MST đối tác |
| DIỄN GIẢI | Max 200 ký tự, xóa ký tự xuống dòng |
| TÀI KHOẢN (NỢ/CÓ) | TK Nợ / TK Có |
| MÃ TIỀN TỆ | VND |
| TỶ GIÁ | 1 |
| NGUYÊN TỆ | Số tiền |
| THÀNH TIỀN | Số tiền VND |

### 1.2. Xử lý Hóa Đơn Mua Vào (PK)

- Nợ **64277** (hoặc TK chi phí tương ứng) / Có **331**
- Chỉ sinh **1 dòng** ghi nhận tổng chi phí (HKD không khấu trừ GTGT)
- `THÀNH TIỀN` = Tổng tiền thanh toán (tiền trước thuế + tiền thuế)

### 1.3. Xử lý Hóa Đơn Bán Ra (PK)

- Nợ **131** / Có **511** (hoặc **5113** tùy KH)
- Thuế khoán giảm trừ doanh thu: Nợ **3338x** / Có **131**

### 1.4. Xử lý Chi Ngân Hàng (BN) - Thứ tự ưu tiên

| # | Loại | Định khoản | Điều kiện |
|:---:|:---|:---|:---|
| 1 | Thanh toán hóa đơn | Nợ 331 / Có 1121 | Số tiền + nội dung khớp hóa đơn |
| 2 | Chi phí bảo hiểm | Nợ 3383 / Có 1121 | Số tiền = 690,300 hoặc bội số |
| 3a | Nộp thuế thường | Nợ 333821 / Có 1121 | Nội dung nộp thuế doanh thu |
| 3b | Nộp thuế TikTok | Nợ 333382 / Có 1121 | Nội dung nộp thuế TikTok/sàn TMĐT |
| 4 | Phí ngân hàng | Nợ 64275 / Có 1121 | Thu phí duy trì, dịch vụ |
| 5 | Phạt/chậm nộp | Nợ 811 / Có 1121 | Nội dung phạt, chậm nộp |
| 6 | Rút tiền/Chi khác | Mặc định | Không thuộc các TH trên |

---

## 2. So Sánh Rule Theo Từng Khách Hàng

| # | MST | Mua vào (Nợ/Có) | Bán ra (Nợ/Có) | TK Thuế khoán | TK TikTok | Có 5113? | Bảo hiểm | TK NH | Phí NH |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | `001196019980` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 2 | `001304004598` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 3 | `010199006750` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 4 | `014198000033` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 5 | `019303002169` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 6 | `031196005568` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 7 | `031196013020` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 8 | `033198001673` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 9 | `051198010997` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 10 | `052300008705` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 11 | `068199000053` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 12 | `072098001948` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 13 | `077300008197` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 14 | `079098009021` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 15 | `079186014383` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 16 | `079195008785` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 17 | `079200020738` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 18 | `079302004855` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 19 | `079302025196` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 20 | `082198013719` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 21 | `089200016993` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 22 | `089202017472` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 23 | `092097002234` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 24 | `8077953218-001` | 1111/331 | 131/5113 | 333821 | 333382 | Có 5113 | 690,300 | 112111, 112121 | 333821 |
| 25 | `8307704000-002` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 26 | `8336384757-001` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 27 | `8339629042-001` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 28 | `8417307084-001` | 1111/331 | 131/5113 | 333821 | 333382 | Có 5113 | 690,300 | 1121 (general) | 64277 |
| 29 | `8423525669-001` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 30 | `8427727031-001` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 31 | `8443847047-001` | 1111/331 | 131/5118 | 333821 | 333382 | Không | 690,300 | 112111, 112121 | 333821 |
| 32 | `8456794480-001` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 33 | `8537932805-001` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 34 | `8568979698-001` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 35 | `8710040770-001` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 36 | `8783523554-001` | 1111/331 | 131/511 | 333821 | 333382 | Có 511 | 690,300 | 1121 (general) | 333821 |
| 37 | `8785516231-001` | 1111/331 | 131/511 | 333821, 333822 | 333382 | Có 511 | 690,300 | 112111 | 333821 |

---

## 3. Chi Tiết Rule Từng Khách Hàng

### 001196019980

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 001304004598

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 010199006750

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 014198000033

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 019303002169

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 031196005568

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 031196013020

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 033198001673

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 051198010997

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 052300008705

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 068199000053

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 072098001948

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 077300008197

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 079098009021

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 079186014383

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 079195008785

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 079200020738

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 079302004855

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 079302025196

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 082198013719

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 089200016993

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 089202017472

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 092097002234

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8077953218-001

**Đặc thù:** Doanh thu bán ra dùng TK **5113**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK ngân hàng chi tiết: **112111, 112121**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/5113**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán hoặc nộp thuế doanh thu thông thường: Tài khoản 333821. Nộp thuế Tiktok/sàn TMĐT: 333382.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121. (Mã đối tượng: Cơ quan Thuế `0301519977-021` hoặc theo danh mục).*
- Nếu là nộp thuế Tiktok/Affiliate/sàn TMĐT: Hạch toán Nợ 333382 / Có 1121. (Mã đối tượng: `0301519977-021`).*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 (Tiểu khoản tương ứng) / Có 131.*
- *Đặc biệt - Giao dịch từ Tik Tok Shop:** Nếu sao kê có dòng nhận tiền từ "Tik Tok Shop" (dù không có hóa đơn đối ứng), hệ thống tự động sinh 1 Phiếu Kế Toán (**PK**) ghi nhận doanh thu: Nợ `131` / Có `5118` (Mã đối tượng `0000000000`, Diễn giải: "Doanh thu Hoa hồng tiếp thị liên kết") và 1 Báo Có (**BC**) tương ứng: Nợ `1121` / Có `131` (Diễn giải: "Nhận Doanh thu Hoa hồng tiếp thị liên kết").
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty hoặc lấy các mã đặc thù (Khách ngoại MADSQUARE `0000000001`, Cơ quan bảo hiểm `0000000002`...) quét từ file `3.danh_muc_doi_tuong.md`.*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8307704000-002

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8336384757-001

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8339629042-001

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8417307084-001

**Đặc thù:** Doanh thu bán ra dùng TK **5113**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/5113**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nối `" HĐ số [Số HĐ]"`. Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm cả Trước thuế + Thuế, vì hộ kinh doanh không khấu trừ thuế).
- *Dòng 1 (Ghi nhận Doanh thu):** Hạch toán `Nợ 131 / Có 5113` số tiền tổng doanh thu (Trước thuế).
- *Dòng 2 (Ghi nhận Thuế khoán - Nếu có phát sinh tiền thuế):** Tách thành 1 bút toán riêng giảm trừ doanh thu: Hạch toán `Nợ 333821 / Có 131` (đối với hóa đơn doanh thu thông thường). Số tiền bằng đúng số tiền Thuế. Diễn giải ghi: `"Điều chỉnh giảm " + [Diễn giải gốc của dòng doanh thu]`.
- *Ngoại lệ Doanh thu Tiktok/Affiliate:** Đối với các khoản thu nhập từ Tiktok không có hóa đơn trong `1.danh_sach_hoa_don.md`, khi phát hiện khoản thu này trên sao kê, hệ thống phải tự động sinh thêm 2 dòng PK (1 dòng Doanh thu `131/5113`, 1 dòng Thuế khoán `333382/131`) tương tự như một hóa đơn bán ra (Tài khoản thuế khoán Tiktok dùng `333382` thay vì `333821`).

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**, hoặc nội dung giao dịch chứa `"bhxh"`, `"nop bhxh"`, `"nop BHXH"`.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "BẢO HIỂM XÃ HỘI" và trích xuất Mã số thuế (MST) tương ứng. Nếu không tìm thấy, mặc định gán `0000000000`.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- Diễn giải: Luôn chuẩn hóa thành `"Nộp Chi phí bảo hiểm tháng [YYYY.MM]"`. Trích xuất tháng/năm từ nội dung gốc (VD: "nop BHXH 052026" → tháng 05/2026, "nop BHXH 04.2026" → tháng 04/2026, "nop BHXH 03-2026" → tháng 03/2026).*
- 3. **Phí ngân hàng**: Nếu nội dung giao dịch chứa từ khóa `PHI CT`, `THU THUE VAT TU`, `PHI DICH VU SMS`, hoặc giá trị giao dịch là các khoản siêu nhỏ chẵn như `1,000`, `10,000`.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64277 / Có 1121.*
- Diễn giải: `"Phí ngân hàng"`*
- 4. **Thanh toán Lương (Payroll)**: Giao dịch có nội dung chứa `"thanh toan luong"`, `"chuyen luong"`, `"chuyen tien den"`.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 3341 / Có 1121.*
- Diễn giải: `"Thanh toán lương tháng [YYYY.MM] ([Tên cá nhân])"`. Tên cá nhân viết hoa chữ cái đầu (VD: "Nguyen Thi Phuong Trang"), không viết hoa toàn bộ. Trích xuất từ nội dung giao dịch.*
- *Đặc thù khách hàng MST 8417307084-001:** Vào cuối mỗi tháng (30/04, 31/05, 30/06), hệ thống tự động sinh thêm 1 Phiếu Kế Toán (PK) hạch toán chi phí lương:
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày cuối tháng
- `MÃ ĐỐI TƯỢNG`: MST của công ty (`8417307084-001`)
- `DIỄN GIẢI`: `"Chi phí lương tháng [YYYY.MM]"`
- `TÀI KHOẢN NỢ`: `64271` / `TÀI KHOẢN CÓ`: `3341`
- `THÀNH TIỀN`: Tổng số tiền lương đã chi trả qua ngân hàng trong tháng đó (cộng dồn tất cả các giao dịch lương trong tháng).
- 5. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch có nội dung chứa `"nop thue"`, `"tien cham nop thue"`.
- Định khoản:*
- Nếu nội dung là tiền phạt/chậm nộp (VD: `Tiền chậm nộp thuế...`): Hạch toán `Nợ 811 / Có 1121`.
- Nếu nội dung liên quan đến nộp thuế kỳ quý trước (VD: `Nộp thuế GTGT, TNCN 2025/Q4`): Hạch toán `Nợ 333821 / Có 1121`.
- Nếu nội dung chung chung hoặc liên quan đến Tiktok/Affiliate (VD: `Nộp Thuế GTGT, TNCN`): Hạch toán `Nợ 333382 / Có 1121`.
- Mã đối tượng: Cơ quan Thuế tương ứng (Tìm MST có chứa chữ "Thuế" trong danh mục).*
- Diễn giải: Cố gắng rút gọn thành `"Tiền chậm nộp thuế" / "Nộp Thuế GTGT, TNCN" / "Nộp Thuế GTGT, TNCN [Kỳ]"` tuỳ theo nội dung thực tế.*
- 6. **Hoàn trả chuyển khoản nhầm**: Giao dịch hoàn lại tiền khách chuyển nhầm (chứa chữ `"hoan tra"` kết hợp `"nham"`).
- Mã đối tượng: Gán là `0000000001` (Khách lẻ).*
- Định khoản: Nợ 3388 / Có 1121.*
- Diễn giải: `"Hoàn trả chuyển khoản nhầm"`.*
- 7. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn tất cả các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Gán MST của chính công ty.*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- *Đặc biệt với doanh thu Tiktok:** Khi nhận tiền từ Tiktok (không có hóa đơn), ngoài bút toán Báo Có (Nợ 1121 / Có 131), hệ thống phải kích hoạt luồng tự động sinh Phiếu Kế Toán (PK) ghi nhận Doanh thu và Thuế khoán (như mô tả ở phần 3.2). Mã đối tượng gắn với TIKTOK PTE. LTD.
- *Nhận tiền chuyển khoản nhầm**: Giao dịch khách hàng chuyển nhầm, không rõ mục đích.
- Định khoản: Nợ 1121 / Có 3388.*
- Mã đối tượng: Gán là `0000000001` (Khách lẻ).*
- Diễn giải: `"Nhận tiền chuyển khoản nhầm"`.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn (và không phải doanh thu Tiktok):
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*
- (Lưu ý: Đối với thu lãi ngân hàng, diễn giải nên được ghi là `"Lãi tiền gửi ngân hàng"`, định khoản Nợ 1121 / Có 5154).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- Hệ thống tự động sinh Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383.
- 1. **Khoản cố định:** `2,950,000` (Nợ 64271 / Có 3383)
- 2. **Khoản biến động:** Số tiền còn lại từ giao dịch ngân hàng (tổng tiền BHXH đã nộp trong tháng trừ đi `2,950,000`). Nếu chưa có giao dịch ngân hàng cho tháng đó, chỉ ghi nhận khoản cố định.
- Tháng 04/2026: Ngân hàng nộp 11,446,000 (gồm 8,496,000 + 2,950,000) → Sinh 2 PK: 2,950,000 + 8,496,000
- Tháng 05/2026: Ngân hàng nộp 9,985,750 (gồm 7,035,750 + 2,950,000) → Sinh 2 PK: 2,950,000 + 7,035,750
- Tháng 06/2026: Chưa có giao dịch ngân hàng → Chỉ sinh 1 PK: 2,950,000
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý. Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (nội dung chứa `"bhxh"`, `"nop BHXH"`), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8423525669-001

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8427727031-001

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8443847047-001

**Đặc thù:** Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK ngân hàng chi tiết: **112111, 112121**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/5118**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Chuyển tiền nội bộ (Giữa các ngân hàng):** Nếu phát hiện nội dung "Chuyen tien noi bo", nhận diện đây là luồng chuyển từ ngân hàng này sang ngân hàng khác.
- Mã đối tượng: Lấy MST của chính công ty.*
- Định khoản: Nợ 1121xx (Tài khoản ngân hàng nhận) / Có 1121yy (Tài khoản ngân hàng chuyển).*
- 4. **Hoàn trả tiền khách chuyển nhầm:** Nếu phát hiện nội dung "hoan lai tien chuyen khoan nham".
- Mã đối tượng: Gán MST là `0000000002`.*
- Định khoản: Nợ 3388 / Có 1121.*
- Diễn giải: `"Hoàn tiền khách hàng chuyển nhầm"`.*
- 5. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 6. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- *Trường hợp thu tiền khách hàng (thanh toán hóa đơn):** Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ. Định khoản: Nợ 1121 / Có 131.
- *Trường hợp thu tiền từ TikTok Shop (Doanh thu Affiliate):** Nhận diện từ khóa "TikTok Shop". Dù không có hóa đơn, tự động sinh 1 Phiếu Kế Toán (PK) Nợ 131 / Có 5118 (Doanh thu Hoa hồng tiếp thị liên kết) gán MST TikTok. Đồng thời ghi nhận Báo Có (BC) thu tiền Nợ 1121 / Có 131.
- *Trường hợp thu lãi ngân hàng:**
- Mã đối tượng: Gán MST của chính Ngân hàng đó (VD: Techcombank là `0101653171`).*
- Định khoản: Nợ 1121 / Có 5154.*
- *Trường hợp nhận tiền khách chuyển nhầm:**
- Nhận diện:* Khi có khoản thu vào nhưng nội dung thuộc về khoản tiền "chuyen khoan nham".
- Mã đối tượng: Gán MST là `0000000002`.*
- Định khoản: Nợ 1121 / Có 3388.*
- Diễn giải: `"Nhận tiền khách hàng chuyển nhầm"`.*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý Nộp Thuế và Chi phí khác**

- *Thuế GTGT, TNCN sàn TMĐT:** Nếu có khoản nộp thuế sàn TMĐT, tự động sinh Phiếu Chi (PC) Nợ 333382 / Có 1111. Mã đối tượng là cơ quan Thuế quản lý (VD: Chi cục Thuế Quận Tân Bình `0301519977-021`).

**### 3.6. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8456794480-001

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8537932805-001

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8568979698-001

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8710040770-001

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Số tiền **Sau Thuế**). Không hạch toán tách riêng dòng thuế GTGT 1331.
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8783523554-001

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333382 dành cho doanh thu Tiktok.*)

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333382 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

### 8785516231-001

**Đặc thù:** Doanh thu bán ra dùng TK **511**; Có doanh thu **TikTok** (TK 333382); Có doanh thu **Affiliate**; TK ngân hàng chi tiết: **112111**; TK chi phí mua vào: **1111/331**; TK bán ra: **131/511**

**### 3.1. Xử lý Thời gian và Phạm vi dữ liệu (Active Months)**

- *Chuẩn hóa ngày tháng:** Cần kiểm tra kiểu dữ liệu của cột ngày tháng.
- Do dữ liệu đã được chuyển đổi sang định dạng Markdown, thông thường ngày tháng đã ở dạng chuỗi văn bản (String). Tuy nhiên, nếu phát hiện dữ liệu ngày tháng đang hiển thị dưới dạng chuỗi số nguyên thủy của Excel (ví dụ `46027`), hệ thống vẫn cần có cơ chế parse ngược về định dạng `DD/MM/YYYY`.
- *Khoanh vùng tháng:** Hệ thống tự động thu thập tất cả các tháng (MM/YYYY) có xuất hiện trong dữ liệu đầu vào. Phạm vi thời gian nào có phát sinh hóa đơn hoặc giao dịch ngân hàng sẽ được coi là "Active Months" (Tháng có dữ liệu) để làm căn cứ sinh các loại chi phí định kỳ (như Bảo hiểm).

**### 3.2. Luồng xử lý Hóa Đơn (Sinh Phiếu Kế Toán - PK)**

- *Ghi nhận chi phí**
- `MÃ CHỨNG TỪ`: `"PK"`
- `NGÀY GHI SỔ`: Ngày lập hóa đơn
- `SỐ CHỨNG TỪ`: Tự động tăng (tiếp nối từ số lớn nhất trong lịch sử, xem mục 2.1)
- `MÃ ĐỐI TƯỢNG`: Lấy trực tiếp từ Mã số thuế
- `DIỄN GIẢI`: Xóa bỏ các ký tự xuống dòng (`\n`). Nếu là hóa đơn ăn uống, viết gọn thành `"Chi phí tiếp khách, ngoại giao HĐ số [Số HĐ]"`. Giới hạn diễn giải tối đa **200 ký tự**.
- `TÀI KHOẢN NỢ`: `64277` (hoặc TK chi phí tương ứng) / `TÀI KHOẢN CÓ`: `331`.
- `THÀNH TIỀN`: Tổng tiền thanh toán (Bao gồm tiền trước thuế + Tiền thuế).
- Nếu có phát sinh thuế khoán giảm trừ doanh thu: Tài khoản 333821 dành cho hóa đơn doanh thu thông thường, tài khoản 333822 dành cho doanh thu Tiktok/Affiliate.*)

**### 3.2.1. Luồng xử lý Doanh thu TikTok (Không cần hóa đơn đầu vào)**

- 1. **Ghi nhận doanh thu**:
- `MÃ CHỨNG TỪ`: `PK`
- `NGÀY GHI SỔ`: Ngày giao dịch
- `MÃ ĐỐI TƯỢNG`: `201719908M`
- `DIỄN GIẢI`: `"Doanh thu Hoa hồng tiếp thị liên kết Tiktok"`
- `TÀI KHOẢN NỢ`: `131` / `TÀI KHOẢN CÓ`: `5118`
- `THÀNH TIỀN`: Số tiền nhận được từ TikTok
- 2. **Trích thuế GTGT, TNCN sàn TMĐT**:
- `MÃ CHỨNG TỪ`: `PK`
- `NGÀY GHI SỔ`: Ngày giao dịch
- `MÃ ĐỐI TƯỢNG`: `201719908M`
- `DIỄN GIẢI`: `"Thuế GTGT, TNCN sàn TMĐT " + [ngày giao dịch]`
- `TÀI KHOẢN NỢ`: `6425` / `TÀI KHOẢN CÓ`: `333822`
- `THÀNH TIỀN`: `Số tiền nhận * 6%` (thuế suất GTGT + TNCN trên doanh thu TikTok)
- 3. **Thu tiền ngân hàng**:
- `MÃ CHỨNG TỪ`: `BC`
- `NGÀY GHI SỔ`: Ngày giao dịch
- `MÃ ĐỐI TƯỢNG`: `201719908M`
- `DIỄN GIẢI`: Nội dung gốc từ sao kê
- `TÀI KHOẢN NỢ`: `112111` / `TÀI KHOẢN CÓ`: `131`
- `THÀNH TIỀN`: Số tiền nhận được từ TikTok

**### 3.3. Luồng xử lý Sao kê Ngân Hàng**

- 1. **Thanh toán hóa đơn**: Kiểm tra xem số tiền và nội dung có khớp với một hóa đơn đầu vào nào không.
- Định khoản: Nợ 331 / Có 1121.*
- 2. **Chi phí bảo hiểm**: Nếu số tiền bằng đúng **`690,300`** hoặc là **bội số của `690,300`**.
- Mã đối tượng: Hệ thống tự động quét file `3.danh_muc_doi_tuong.md`, tìm dòng có chữ "bảo hiểm" và trích xuất Mã số thuế (MST) tương ứng.*
- Sinh BN thanh toán tiền qua ngân hàng: Nợ 3383 / Có 1121.*
- 3. **Nộp Thuế và Phạt (Tax payments)**: Giao dịch nộp thuế hoặc có nội dung phạt/chậm nộp.
- Nếu là tiền phạt/chậm nộp (VD: Tiền chậm nộp thuế...): Hạch toán Nợ 811 / Có 1121.*
- Nếu là nộp thuế doanh thu thông thường: Hạch toán Nợ 333821 / Có 1121.*
- Nếu là nộp thuế Tiktok/Affiliate: Hạch toán Nợ 333822 / Có 1121.*
- 4. **Phí ngân hàng**: Nếu nội dung sao kê là thu phí ngân hàng (VD: Thu phí duy trì, phí dịch vụ, phí mở TK...).
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty.*
- Định khoản: Nợ 64275 / Có 1121.*
- 5. **Rút tiền nhập quỹ hoặc Chi khác**: Nếu không thỏa mãn các điều kiện trên, hệ thống mặc định hiểu đây là khoản rút tiền mặt từ ngân hàng về quỹ công ty hoặc chi phí nội bộ khác.
- Mã đối tượng: Hệ thống tự động quét file `Danh mục` để lấy MST của chính công ty (dựa theo mã thư mục của khách hàng).*
- Định khoản: Nợ 1111 / Có 1121.*
- Trích xuất thông tin khách hàng thanh toán để hạch toán giảm trừ công nợ.
- Định khoản: Nợ 1121 / Có 131.*
- Nếu là thu lãi ngân hàng hoặc khoản tiền vào không khớp hóa đơn:
- Mã đối tượng: Gán MST của chính công ty (quét từ `Danh mục`).*

**### 3.4. Luồng xử lý Thanh toán (Sinh Phiếu Chi - PC)**

- *Quy tắc**: Bất kỳ hóa đơn mua vào nào **KHÔNG** được thanh toán qua ngân hàng (không tìm thấy giao dịch khớp) sẽ được **mặc định là chi bằng tiền mặt**.
- *Hành động**: Tự động sinh thêm 1 dòng **Phiếu Chi (PC)** cho mỗi hóa đơn đó.
- `MÃ CHỨNG TỪ`: `"PC"`
- `NGÀY GHI SỔ`: (Ngày tương ứng trong tháng hoặc ngày hóa đơn)
- `DIỄN GIẢI`: `"Thanh toán " + [Diễn giải gốc của hóa đơn]`
- `TÀI KHOẢN NỢ`: `331`
- `TÀI KHOẢN CÓ`: `1111`
- `THÀNH TIỀN`: Tổng tiền thanh toán của hóa đơn.

**### 3.5. Luồng xử lý chi phí Bảo Hiểm (Định kỳ hàng tháng)**

- *Hạch toán chi phí (PK):** Cuối mỗi tháng có phát sinh dữ liệu, hệ thống luôn tự động sinh 1 Phiếu Kế Toán (PK) ghi nhận chi phí: Nợ 64271 / Có 3383 (Số tiền: `690,300`).
- *Thanh toán bằng Tiền mặt (PC):** KHÔNG hạch toán vội Phiếu Chi tiền mặt hàng tháng. Hệ thống phải rà soát TOÀN BỘ giao dịch ngân hàng trong cả kỳ/quý (vì khách hàng có thể chuyển khoản trả tiền bảo hiểm cho nhiều tháng). Nếu tìm thấy giao dịch ngân hàng thanh toán tiền bảo hiểm (số tiền là `690,300` hoặc là bội số của nó, hoặc nội dung nộp BHXH), thì sẽ **KHÔNG** tiến hành hạch toán phiếu chi tiền mặt (PC).

---

