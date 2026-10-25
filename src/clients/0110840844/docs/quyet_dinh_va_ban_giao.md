# Quyết định và bàn giao — 0110840844

Chuyển vào docs ngày 25/10/2026 trước khi hoàn tất dọn báo cáo tạm. Hồ sơ này giữ quyết định riêng, căn cứ và khoản còn chờ; không thay chứng từ gốc hoặc lần đọc SQL hiện hành.

## Cách sử dụng

- Giữ ngày và phạm vi từng nguồn dưới đây. Chỉ nội dung được ghi rõ là người dùng xác nhận/chỉ định mới là quyết định; đề nghị, giả định, ngày tạm, mã mới và khoản chưa phân bổ vẫn ở trạng thái chờ.
- Không biến quyết định một giao dịch/kỳ thành quy tắc tự động cho kỳ sau. SQL có thể đã thay đổi; số dư, tình trạng đã nhập và mã đề nghị trong nguồn cũ phải đọc lại khi sử dụng. Không nhập lại bút toán chỉ vì hồ sơ này ghi chưa nhập tại ngày lập.
- Yêu cầu mới hơn được ưu tiên. Với doanh nghiệp, quy định từ 24/10/2026 về bảo hiểm chờ C12 và chi không hóa đơn người dùng tự xử lý thay phần hướng dẫn cũ mâu thuẫn; các ví dụ lịch sử bên dưới không cấp quyền sinh lại những bút toán đó.
- Bút toán/phần import đi kèm còn cần được nhận diện đầy đủ khi nhập cả bộ; giữ các khoản chờ đối chiếu và không coi có kết quả là đã hoàn tất kỳ.

## 1. 2026.Q3 — 0.ghi_chu.md

Nguồn trước khi dọn: `src/clients/0110840844/2026.Q3/result/0.ghi_chu.md`. Phạm vi và ngày trong nội dung gốc được giữ nguyên.

### Theo dõi xử lý kế toán — WNBF — Quý 3/2026

**Công ty:** CÔNG TY TNHH WNBF VIỆT NAM · **MST:** 0110840844 · **Kỳ:** 01/07–30/09/2026 · **Cập nhật:** 20/10/2026.

**Kết quả đang ở trạng thái đã lập file, chưa nhập vào phần mềm.** Bảng bút toán: [0.result.md](../2026.Q3/result/0.result.md) · Đối tượng cần thêm: 0.danh_muc_doi_tuong.md (tài liệu tạm đã dọn).

| Hạng mục | Tình trạng hiện tại |
|---|---|
| Bút toán đã lập | 332 dòng, 281 chứng từ; số 786–1066 |
| Giao dịch ngân hàng quý 3 | Đủ 194/194 giao dịch; không còn dòng sao kê bị bỏ sót |
| Hóa đơn có tiền | Đủ 51/51 hóa đơn: 39 mua vào, 12 bán ra |
| Hóa đơn tổng tiền bằng 0 | Đã kiểm tra 54 hóa đơn; không lập bút toán tiền bằng 0 |
| Trích bảo hiểm và phí kế toán | Đã bổ sung đủ phần quý 3 theo chỉ định |
| Tiền đặt cọc 344 cuối phần đã lập | 640.000.000 đồng; đã lập bù trừ 21.600.000 với 131 |
| Số dư ngân hàng 30/09 | 172.053.863 đồng; khớp sao kê, chênh lệch 0 đồng |

### 1. Việc cần theo dõi

“Chờ thực hiện” là việc chưa làm trên phần mềm. “Cần đối chiếu” và “Cần hồ sơ” là khoản đã ghi nhận trong file nhưng chưa đủ thông tin để chốt chi tiết.

| STT | Việc cần theo dõi | Hiện đã ghi nhận | Việc tiếp theo | Người xử lý | Trạng thái |
|---:|---|---|---|---|---|
| 1 | Nhập bộ kết quả vào phần mềm | 332 dòng / 281 chứng từ mới nằm trong file Markdown | Thêm đối tượng còn thiếu, kiểm tra số chứng từ khi nhập, tránh nhập lại chứng từ đã có | Kế toán | Chờ nhập |
| 2 | Phân bổ chi phí trả trước, CCDC, tiền thuê văn phòng | Chưa lập các dòng phân bổ trong file này | Thực hiện phân bổ trên phần mềm theo bảng theo dõi của công ty | Người dùng | Tự thực hiện |
| 3 | Xuất dùng túi vải và ghi nhận giá vốn sự kiện | HĐ 2090 đã ghi Nợ 1561: 5.850.000; chưa xuất dùng | Xuất dùng theo thực tế; tập hợp và kết chuyển chi phí/giá vốn đúng kỳ | Người dùng | Tự thực hiện |
| 4 | Bù trừ VAT và kết chuyển lãi/lỗ | Đã lập 4 bút toán 344/131 cho HĐ 79, 80, 81, 84 trong PK 1063–1066; không cần lập lại phần này. Chưa lập bù trừ VAT/kết chuyển | Người dùng thực hiện bù trừ VAT và kết chuyển sau khi hoàn tất các bút toán kỳ | Người dùng | Tự thực hiện phần còn lại |
| 5 | Ghép tiền nhận với hóa đơn | 149 khoản thu, tổng 646.800.000 đã ghi Có 344; chưa xác định hóa đơn tương ứng. Đã hoàn cọc 9.500.000, còn giữ 637.300.000 | Đối chiếu danh sách đăng ký và hóa đơn; không gán lại hóa đơn đã thanh toán | Công ty / kế toán | Cần đối chiếu |
| 6 | Xác định người mua HĐ 83 | PK 802: KH240, phải thu 5.900.000; BC 798: KH162 / Doan Trong Sang, nhận cọc tại 344: 5.900.000 | Xác nhận hai khoản có liên quan không; hiện chưa bù trừ vì hóa đơn không có tên người mua | Công ty | Cần xác nhận |
| 7 | Hóa đơn cho tiền SOMERSET | BN 1027 / B331: trả trước 37.308.600, mã 0102064683, Nợ 331 | Bổ sung hóa đơn/hợp đồng đúng khoản thanh toán; chưa ghi chi phí/VAT | Công ty | Cần hồ sơ |
| 8 | Chứng từ khoản KHAC trả Trần Như Thuyết | BN 1030 / B330: Nợ 331, mã KHAC, 403.000 | Bổ sung hóa đơn hoặc hồ sơ công nợ; chưa ghi chi phí/VAT mới | Công ty | Cần hồ sơ |
| 9 | Nghĩa vụ và tiền nộp bảo hiểm | Tiền nộp 8.619.900 ghi hết vào 3383 theo chỉ định; đã trích quý 3 | Đối chiếu thông báo thu/kỳ nộp. Hiện 3383 dư Nợ 6.864.900; 3384 dư Có 315.900; chưa bù trừ hai quỹ | Công ty / kế toán | Cần đối chiếu |
| 10 | Hóa đơn dịch vụ kế toán T&C | Đã trích quý 3: 9.000.000; tổng dư Có 335/T&C: 27.000.000 | Khi hóa đơn về, đối chiếu kỳ và số đã trích; tránh ghi chi phí lần hai | Kế toán | Theo dõi hóa đơn |
| 11 | Công nợ đầu vào và ngày chi tiền mặt | Đã lập PC cho 28 HĐ đi lại/vé máy bay: 4.383.181 theo chỉ định. Còn dư Có 331 của PIZZA 4PS: 858.600 | Kiểm tra ngày thực chi trên chứng từ quỹ; PC hiện tạm lấy ngày hóa đơn. Đối chiếu riêng HĐ PIZZA 4PS, chưa lập chi tiền mặt cho khoản này | Công ty / kế toán | Cần đối chiếu |
| 12 | Số dư công nợ chuyển từ kỳ trước | KH70 còn Nợ 131: 6.100.000; 6 khách còn Có 131: 19.400.000; cọc KH102 tại 344: 2.700.000 | Xác nhận chi tiết từng khách/hóa đơn; chưa coi số dư sổ là công nợ đã được xác nhận | Công ty / kế toán | Cần đối chiếu |
| 13 | Danh mục trước khi nhập | Có 81 đối tượng đề xuất mới. KH99, KH77, KH89, KH40 đã có nhưng cờ loại cần kiểm tra; mã 0110759569 có tên cũ TÂN SƠN, hóa đơn ghi KIM SAM SOLUTION | Rà mã, loại đối tượng và tên pháp lý; không tạo thêm mã trùng MST | Kế toán | Kiểm tra khi nhập |

### 2. Những cách xử lý đã chốt

Các dòng này đã có trong file bút toán; chỉ theo dõi tiếp nếu cột “Việc cần theo dõi” ở trên yêu cầu hồ sơ.

| Nội dung | Đã xử lý | Chứng từ / nguồn |
|---|---|---|
| Hermès HĐ 7946, gym HĐ 59, iPhone HĐ 256554 | Công ty chịu chi cá nhân: 210.286.000 vào 8118/331; không ghi VAT đầu vào 15.659.030, không ghi phải thu cá nhân | PK 956, 957, 1013; thanh toán BN 949, 941, 1012 |
| Thanh toán tiền mặt đi lại và vé máy bay | Theo chỉ định người dùng: 28 PC, Nợ 331/Có 1111, tổng 4.383.181; thanh toán cả VAT theo tổng hóa đơn. Ngày PC tạm lấy ngày HĐ, cần đối chiếu ngày thực chi; không ghi thêm chi phí/VAT | PC 1035–1062; bảng đối chiếu tiền mặt trong phần tra cứu |
| Tiền gửi kỳ hạn 03 tháng | 500.000.000 vào 12811/112111; không ghi chi phí hoặc tự ghi lãi chưa có chứng từ | BN 904 / B228 |
| Thanh toán PHÚ GIA và MUJI | HĐ 8813: 1.080.000; HĐ 125159: 844.000. Đã ghi 331/112111, không ghi thêm chi phí/VAT | BN 1024 / B149; BN 1026 / B300 |
| Khoản nhận và khoản chi dùng mã KHAC | Nhận cọc 9.100.000 vào 112111/344; chi 403.000 vào 331/112111 theo chỉ định | BC 1025 / B243; BN 1030 / B330 |
| SOMERSET | B331 theo dõi tại 0102064683 / SOMERSET theo xác nhận dù tên sao kê là NOVOTEL; Nợ 331: 37.308.600 | BN 1027 / B331 |
| Bảo hiểm đã nộp | B328: 4.141.800 và B329: 4.478.100, toàn bộ Nợ 3383/Có 112111 theo chỉ định | BN 1028, 1029 |
| Trích bảo hiểm tháng 7–9 | Mỗi tháng 6421/3383: 585.000 và 6421/3384: 105.300; tổng quý 2.070.900. Theo mẫu lịch sử, không thêm khoản trích 3386 | PK 1031–1033 |
| Trích trước phí kế toán quý 3 | 64273/335: 9.000.000, đối tượng T&C; chưa ghi VAT/thanh toán | PK 1034 |
| Hóa đơn hội thảo của GM Group Media | Chi phí 64171; dùng khoản trả trước 8.640.000 chuyển từ kỳ trước, không chi tiền thêm | PK 839 / I30 / HĐ 71 |
| Túi vải WNBF HĐ 2090 | Giá nhập 1561: 5.850.000; VAT 468.000. Đã trả 6.318.000; phần xuất dùng do người dùng thực hiện | PK 1021; BN 972, 1019 |
| Nhận tiền trước hoặc sau ngày hóa đơn | Trước ngày hóa đơn hoặc chưa xác định hóa đơn tương ứng: 112111/344. Cùng ngày hoặc sau ngày hóa đơn tương ứng: 112111/131. Doanh thu/VAT chỉ ghi theo hóa đơn | 155 khoản nhận cọc: 670.000.000; 10 khoản thu công nợ: 49.100.000 |
| Bù trừ tiền cọc với hóa đơn | Đã lập Nợ 344/Có 131: 21.600.000 cho KH166/HĐ 79, KH167/HĐ 81, KH159/HĐ 80, KH171/HĐ 84; ngày ghi sổ theo ngày hóa đơn. Chưa nhập phần mềm | PK 1063–1066 |
| Hoàn tiền đặt cọc | 8 khoản hoàn tổng 11.100.000 chuyển sang 344/112111, theo đúng khoản nhận gốc | BN 788, 870, 908, 909, 930, 931, 979, 1008 |
| Diễn giải thu/chi | Nhận cọc ghi “Nhận đặt cọc …”; thu công nợ ghi “Nhận …”; thanh toán ghi “Thanh toán …”. Đã đối chiếu hóa đơn thì ghi HĐ số, chưa xác định thì không thêm | BC 837: “Nhận đặt cọc phí thành viên”; BC 844: “Nhận đặt cọc phí phân hạng MEN”; BC 815: “Nhận phí thành viên HĐ số 86” |


### Tiền cọc đã bù trừ với hóa đơn trong file

Đã bổ sung các bút toán sau vào bảng kết quả theo yêu cầu mới của người dùng. **Chưa nhập vào phần mềm; khi nhập bộ kết quả không lập lại bốn khoản này.** Ngày bù trừ theo ngày hóa đơn; không ghi thêm thu tiền, doanh thu hoặc VAT.

| Khách hàng | Hóa đơn / ngày | Chứng từ nhận / hoàn cọc | Số đã lập bù trừ | PK bù trừ 344/131 |
|---|---|---|---:|---|
| KH166 / Ta Thuy Duong | 79 / 04/07/2026 | BC 786, 787; BN 788 | 6.600.000 | 1063 |
| KH167 / Bui Quang Linh | 81 / 07/07/2026 | BC 790, 791 | 8.400.000 | 1064 |
| KH159 / Ngo Anh Dung | 80 / 07/07/2026 | BC 792 | 3.900.000 | 1065 |
| KH171 / Nguyen Quang Giang | 84 / 15/07/2026 | BC 811 | 2.700.000 | 1066 |
| Tổng | | | 21.600.000 | Đã có trong file kết quả |

Tiền cọc 344 cuối phần đã lập: **640.000.000** = đầu kỳ 2.700.000 + nhận 670.000.000 − hoàn 11.100.000 − bù trừ 21.600.000. Gồm 637.300.000 cọc ròng quý 3 chưa xác định hóa đơn tương ứng và 2.700.000 cọc KH102 chuyển từ kỳ trước.

TK 131 sau bù trừ: tổng dư Nợ theo khách **12.000.000**, tổng dư Có theo khách **19.400.000**. Dư Nợ gồm HĐ 83 chưa xác định người mua 5.900.000 và nợ KH70 đầu kỳ 6.100.000. Chưa ghép HĐ 83/KH240 với tiền cọc KH162 vì chưa đủ căn cứ cùng người mua.


### Phiếu chi tiền mặt theo chỉ định người dùng

Phạm vi: 28 hóa đơn đi lại/vé máy bay quý 3 đã ghi công nợ, chưa có khoản thanh toán đối ứng trong bộ kết quả. Lập Nợ 331/Có 1111 theo tổng phải trả, không ghi thêm chi phí hoặc VAT. **Ngày PC tạm lấy ngày hóa đơn vì chưa có ngày thực chi riêng; cần đối chiếu chứng từ quỹ trước khi nhập.** Đây là chỉ định cho các khoản cụ thể trong quý 3, không phải quy tắc tự động thanh toán tiền mặt cho mọi hóa đơn tương lai.

| PC | Ngày tạm ghi | PK hóa đơn | Nhà cung cấp | Diễn giải | Tổng thanh toán |
|---:|---|---:|---|---|---:|
| 1035 | 07/07/2026 | 794 | 0110269067 | Thanh toán chi phí đi lại HĐ số 96319964 | 316.000 |
| 1036 | 08/07/2026 | 799 | 0110269067 | Thanh toán chi phí đi lại HĐ số 97119658 | 210.000 |
| 1037 | 08/07/2026 | 800 | 0110269067 | Thanh toán chi phí đi lại HĐ số 96935789 | 133.000 |
| 1038 | 09/07/2026 | 803 | 0100107518 | Thanh toán chi phí vé máy bay HĐ số 1333139 | 2.186.181 |
| 1039 | 09/07/2026 | 804 | 0110269067 | Thanh toán chi phí đi lại HĐ số 97816312 | 116.000 |
| 1040 | 09/07/2026 | 805 | 0110269067 | Thanh toán chi phí đi lại HĐ số 97553020 | 100.000 |
| 1041 | 09/07/2026 | 806 | 0110269067 | Thanh toán chi phí đi lại HĐ số 97540557 | 51.000 |
| 1042 | 09/07/2026 | 807 | 0101108585-001 | Thanh toán chi phí đi lại HĐ số 74915 | 79.000 |
| 1043 | 10/07/2026 | 808 | 0110269067 | Thanh toán chi phí đi lại HĐ số 98160652 | 232.000 |
| 1044 | 13/07/2026 | 810 | 0110269067 | Thanh toán chi phí đi lại HĐ số 343294 | 118.000 |
| 1045 | 15/07/2026 | 819 | 0110269067-001 | Thanh toán chi phí đi lại HĐ số 63249978 | 84.000 |
| 1046 | 22/07/2026 | 831 | 0110269067-001 | Thanh toán chi phí đi lại HĐ số 65661915 | 7.000 |
| 1047 | 22/07/2026 | 832 | 0110269067-001 | Thanh toán chi phí đi lại HĐ số 65626637 | 2.000 |
| 1048 | 22/07/2026 | 833 | 0110269067-001 | Thanh toán chi phí đi lại HĐ số 65621894 | 11.000 |
| 1049 | 23/07/2026 | 834 | 0110269067-001 | Thanh toán chi phí đi lại HĐ số 66004556 | 12.000 |
| 1050 | 24/07/2026 | 835 | 0110269067-001 | Thanh toán chi phí đi lại HĐ số 66397976 | 2.000 |
| 1051 | 25/07/2026 | 836 | 0110269067-001 | Thanh toán chi phí đi lại HĐ số 66601853 | 6.000 |
| 1052 | 08/09/2026 | 937 | 0110269067 | Thanh toán chi phí đi lại HĐ số 43454969 | 41.000 |
| 1053 | 08/09/2026 | 938 | 0110269067 | Thanh toán chi phí đi lại HĐ số 43382583 | 111.000 |
| 1054 | 09/09/2026 | 952 | 0110269067 | Thanh toán chi phí đi lại HĐ số 44277261 | 28.000 |
| 1055 | 09/09/2026 | 953 | 0110269067-010 | Thanh toán chi phí đi lại HĐ số 2362496 | 117.000 |
| 1056 | 09/09/2026 | 954 | 0110269067-008 | Thanh toán chi phí đi lại HĐ số 1240430 | 153.000 |
| 1057 | 11/09/2026 | 976 | 0110269067 | Thanh toán chi phí đi lại HĐ số 45819111 | 31.000 |
| 1058 | 11/09/2026 | 977 | 0110269067 | Thanh toán chi phí đi lại HĐ số 45755596 | 130.000 |
| 1059 | 23/09/2026 | 1015 | 0110269067 | Thanh toán chi phí đi lại HĐ số 56160830 | 15.000 |
| 1060 | 26/09/2026 | 1016 | 2400927184 | Thanh toán chi phí đi lại HĐ số 531511 | 20.000 |
| 1061 | 28/09/2026 | 1017 | 0110269067 | Thanh toán chi phí đi lại HĐ số 60443361 | 47.000 |
| 1062 | 30/09/2026 | 1022 | 0110269067 | Thanh toán chi phí đi lại HĐ số 62065666 | 25.000 |
| Tổng | | | | | 4.383.181 |


### Vì sao không gán khoản thu mới vào hóa đơn cũ cùng khách

Các hóa đơn trong bảng dưới đã có khoản thanh toán/bù trừ khác. Không dùng chúng lần nữa để giải thích tiền nhận mới. Riêng HĐ 83 không có tên người mua nên chưa gán B148 chỉ vì cùng số tiền.

| Mã khách | Hóa đơn đã tìm thấy | Căn cứ đã thanh toán/bù trừ hóa đơn đó | Chứng từ thu quý 3 còn theo dõi riêng |
|---|---|---|---|
| KH162 | HĐ 73 ngày 15/06/2026, 2.700.000 | Đã thu 2.700.000 ngày 13/06, diễn giải SQL tham chiếu HĐ 73. | 798: 5.900.000; chưa đồng nhất với HĐ 83 vì hóa đơn không có tên người mua. |
| KH99 | HĐ 39 ngày 24/05/2026, 7.900.000; HĐ 86 ngày 15/07/2026, 2.700.000 | HĐ 39: thu 8.100.000, hoàn 200.000 ngày 25/05; HĐ 86: B154 / BC 815 thu đủ 2.700.000 ngày 15/07. | 845, 854, 862, 899: tổng 22.900.000 trong tháng 8. |
| KH144 | HĐ 54 ngày 29/05/2026, 6.100.000 | Hai khoản thu 2.700.000 và 3.400.000 ngày 29/05 cùng tham chiếu HĐ 54. | 861: 1.800.000. |
| KH127 | HĐ 23 ngày 18/05/2026, 4.900.000 | Hai khoản thu 2.700.000 và 2.200.000 ngày 18/05 cùng tham chiếu HĐ 23. | 863: 1.200.000. |
| KH161 | HĐ 74 ngày 15/06/2026, 2.700.000 | Đã thu 2.700.000 ngày 13/06, diễn giải SQL tham chiếu HĐ 74. | 864: 5.900.000. |
| KH172 | HĐ 89 ngày 17/07/2026, 2.700.000 | B158 / BC 825 thu đủ 2.700.000 ngày 17/07, đã đối chiếu HĐ 89. | 865: 5.900.000 ngày 11/08. |
| KH158 | HĐ 69 ngày 01/06/2026, 6.100.000 | Hai khoản thu 2.700.000 và 3.400.000 ngày 01/06 cùng tham chiếu HĐ 69. | 885: 3.600.000. |
| KH163 | HĐ 77 ngày 23/06/2026, 2.700.000 | Đã thu 2.700.000 ngày 23/06, diễn giải SQL tham chiếu HĐ 77. | 887: 7.700.000. |
| KH40 | HĐ 48: 7.000.000; HĐ 112: 1.400.000; điều chỉnh HĐ 112 theo HĐ 146: 6.600.000, tháng 9/2025 | Các chứng từ tương ứng có bù trừ Nợ 344/Có 131 đủ 7.000.000, 1.400.000 và 6.600.000. | 900: 8.400.000; không phân bổ lại cho hóa đơn đã bù trừ. |
| KH89 | HĐ 127 ngày 10/09/2025: 7.120.000; HĐ 24 ngày 19/05/2026: 5.800.000 | HĐ 127 đã bù trừ 344/131 đủ 7.120.000; HĐ 24 đã thu 5.800.000 ngày 19/05. | 928: 4.100.000. |
| KH112 | HĐ 11 ngày 15/05/2026, 2.700.000 | Đã thu 2.700.000 ngày 15/05, diễn giải SQL tham chiếu HĐ 11. | 929: 1.800.000. |
| KH77 | HĐ 94 ngày 09/09/2025: 7.960.000; HĐ 129 ngày 10/09/2025: 1.800.000 | Có bù trừ Nợ 344/Có 131 đủ 7.960.000 và 1.800.000 tại các chứng từ tương ứng. | 935, 936: tổng 9.100.000. |
| KH148 | HĐ 50 ngày 29/05/2026, 4.900.000 | Hai khoản thu 2.700.000 và 2.200.000 ngày 28/05 cùng tham chiếu HĐ 50. | 990: 1.200.000. |
| KH147 | HĐ 51 ngày 29/05/2026, 4.900.000 | Hai khoản thu 2.700.000 và 2.200.000 ngày 28/05 cùng tham chiếu HĐ 51. | 991: 1.200.000. |
| KH156 | HĐ 66 ngày 31/05/2026: 2.700.000; HĐ 70 ngày 02/06/2026: 2.200.000 | Đã thu 2.700.000 ngày 01/06 cho HĐ 66 và 2.200.000 ngày 02/06 cho HĐ 70, theo diễn giải SQL. | 1010: 1.200.000. |


### Căn cứ bảy dòng ngân hàng người dùng xác nhận

| Nguồn | Số chứng từ | Đối tượng | Bút toán | Số tiền | Căn cứ |
|---|---|---|---|---:|---|
| B149 | 1024 | 0100106627 / PHÚ GIA | Nợ 331 / Có 112111 | 1.080.000 | Người dùng xác nhận thanh toán PHÚ GIA; đối chiếu I4, C26MPG / HĐ 8813, đã có PK 801. Không ghi thêm chi phí/VAT. |
| B243 | 1025 | KHAC / Khác | Nợ 112111 / Có 344 | 9.100.000 | Nội dung WNBF sign up; người dùng chỉ định mã KHÁC. Chưa xác định hóa đơn tương ứng nên theo dõi tiền đặt cọc tại 344 theo chính sách mới; không tự ghi số HĐ/doanh thu. |
| B300 | 1026 | 0315855270-002 / MUJI | Nợ 331 / Có 112111 | 844.000 | Người dùng xác nhận thanh toán MUJI qua AEON; đối chiếu I51, C26MLB / HĐ 125159, đã có PK 984. Không ghi thêm chi phí/VAT. |
| B331 | 1027 | 0102064683 / SOMERSET HÒA BÌNH | Nợ 331 / Có 112111 | 37.308.600 | Người dùng xác nhận theo dõi tại SOMERSET dù tên người nhận trên sao kê là NOVOTEL. Mã SOMERSET đã có trong SQL, dư 331 đầu quý bằng 0; chưa có hóa đơn tương ứng trong bộ quý 3 nên theo dõi trả trước, chưa ghi chi phí/VAT. |
| B328 | 1028 | 0000000000 / BẢO HIỂM XÃ HỘI | Nợ 3383 / Có 112111 | 4.141.800 | Người dùng xác nhận nộp BHXH/BHYT/BHTN và chỉ định ghi toàn bộ vào 3383. Giữ ngày chi 21/09; không tự chia 3384/3386 hoặc ghi thêm chi phí. Nội dung kỳ trên sao kê là 01.06.2025, còn phải đối chiếu thông báo thu. |
| B329 | 1029 | 0000000000 / BẢO HIỂM XÃ HỘI | Nợ 3383 / Có 112111 | 4.478.100 | Người dùng chỉ định ghi toàn bộ vào 3383, không tách quỹ. Giữ ngày chi 21/09; nội dung kỳ trên sao kê là 07.12.2026, còn phải đối chiếu thông báo thu và phần nghĩa vụ từng kỳ. |
| B330 | 1030 | KHAC / Khác | Nợ 331 / Có 112111 | 403.000 | Người dùng xác nhận đây là công nợ 331 và chỉ định mã KHAC. Theo dõi khoản thanh toán theo đối tượng, chưa gán hóa đơn và chưa ghi chi phí/VAT mới. Người nhận trên sao kê là TRAN NHU THUYET. |


### Căn cứ trích bảo hiểm và phí kế toán

| Số chứng từ | Ngày | Nội dung | Bút toán | Số tiền | Căn cứ lịch sử |
|---|---|---|---|---:|---|
| 1031 | 31/07/2026 | Trích bảo hiểm tháng 07.2026 | Nợ 6421/Có 3383: 585.000; Nợ 6421/Có 3384: 105.300 | 690.300 | Theo hai dòng PK263 ngày 30/04, PK264 ngày 31/05 và PK265 ngày 30/06/2026; người dùng yêu cầu tiếp tục như quá khứ. |
| 1032 | 31/08/2026 | Trích bảo hiểm tháng 08.2026 | Nợ 6421/Có 3383: 585.000; Nợ 6421/Có 3384: 105.300 | 690.300 | Cùng mức và tài khoản đã kiểm tra trong SQL. |
| 1033 | 30/09/2026 | Trích bảo hiểm tháng 09.2026 | Nợ 6421/Có 3383: 585.000; Nợ 6421/Có 3384: 105.300 | 690.300 | Cùng mức và tài khoản đã kiểm tra trong SQL. |
| 1034 | 30/09/2026 | Trích trước phí dịch vụ tư vấn kế toán 2026.Q3 | Nợ 64273/Có 335, đối tượng 0109998900 / T&C | 9.000.000 | Theo PK267 ngày 30/06/2026, Stt EZ000000000000024469; kỳ trước cũng trích 9.000.000/quý tại PK058, Stt EZ000000000000024466. |


### Hóa đơn tổng tiền bằng 0

**54 hóa đơn tổng tiền 0, đã xem và không sinh bút toán:** I10 (HĐ 98388210); I12 (HĐ 99136894); I13 (HĐ 99068004); I14 (HĐ 579016); I15 (HĐ 549924); I16 (HĐ 541587); I20 (HĐ 1672128); I26 (HĐ 66639230); I27 (HĐ 66612977); I29 (HĐ 66877646); I31 (HĐ 42911183); I32 (HĐ 43526498); I34 (HĐ 43398318); I36 (HĐ 1861986); I37 (HĐ 44468947); I38 (HĐ 44446734); I45 (HĐ 46106135); I46 (HĐ 45997420); I49 (HĐ 47647593); I50 (HĐ 47540629); I53 (HĐ 51795298); I54 (HĐ 51656583); I56 (HĐ 54017332); I57 (HĐ 53889696); I58 (HĐ 53713272); I59 (HĐ 53695583); I60 (HĐ 53564361); I61 (HĐ 54594082); I62 (HĐ 54501201); I63 (HĐ 55349818); I64 (HĐ 55309489); I65 (HĐ 56327708); I66 (HĐ 56249503); I67 (HĐ 56168792); I69 (HĐ 56153713); I70 (HĐ 56121591); I71 (HĐ 57901528); I72 (HĐ 57869023); I73 (HĐ 57855700); I74 (HĐ 57767074); I75 (HĐ 57713187); I77 (HĐ 60789945); I78 (HĐ 60560534); I79 (HĐ 60527402); I81 (HĐ 60430575); I82 (HĐ 60366846); I83 (HĐ 61319068); I84 (HĐ 61136283); I86 (HĐ 62404753); I87 (HĐ 62331425); I88 (HĐ 62305713); I89 (HĐ 62252827); I90 (HĐ 62211966); I91 (HĐ 62127654). Không tự tạo chi phí hoặc phiếu chi theo giá trị chuyến xe suy đoán.

</details>
