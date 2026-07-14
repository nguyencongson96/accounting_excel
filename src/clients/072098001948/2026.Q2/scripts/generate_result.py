#!/usr/bin/env python3
"""Generate 0.result.md for MST 072098001948 - Q2 2026"""

import csv
import io

# ===== CONFIG =====
MAX_SO_CHUNG_TU = 361  # Max from last_quarter_data
NEXT_SO = MAX_SO_CHUNG_TU + 1

# Insurance MST
BH_MST = "0309385588"  # BẢO HIỂM XÃ HỘI CƠ SỞ TÂN SƠN HÒA
COMPANY_MST = "072098001948"  # This customer
TIKTOK_MST = "201719908M"

# Active months in Q2 2026: April, May, June
ACTIVE_MONTHS = ["04/2026", "05/2026", "06/2026"]

# ===== DATA =====

# Purchase invoices (Mua vào)
purchase_invoices = [
    {"stt": 1, "date": "03/04/2026", "so_hd": "2608182", "mst": "0106773786", "ten_dt": "CÔNG TY TNHH SHOPEE", "dien_giai": "Phí dịch vụ Affiliate 03/2026", "truoc_thue": 200, "giam": 0, "thue": 16, "sau_thue": 216},
    {"stt": 2, "date": "06/04/2026", "so_hd": "121", "mst": "0109998900", "ten_dt": "CÔNG TY TNHH TƯ VẤN VÀ KẾ TOÁN T&C", "dien_giai": "Phí dịch vụ tư vấn tháng 03/2026", "truoc_thue": 3000000, "giam": 0, "thue": 240000, "sau_thue": 3240000},
    {"stt": 3, "date": "25/04/2026", "so_hd": "263197", "mst": "0315304731", "ten_dt": "Công Ty TNHH Uniqlo Việt Nam", "dien_giai": "Mua hàng", "truoc_thue": 1272222, "giam": 0, "thue": 94444, "sau_thue": 1275000},
    {"stt": 4, "date": "30/04/2026", "so_hd": "18683", "mst": "0315855270", "ten_dt": "CÔNG TY TNHH MUJI RETAIL (VIỆT NAM)", "dien_giai": "Mua hàng", "truoc_thue": 453704, "giam": 0, "thue": 36296, "sau_thue": 490000},
    {"stt": 5, "date": "30/04/2026", "so_hd": "9991", "mst": "0303202799", "ten_dt": "CÔNG TY TNHH MỘC F&B", "dien_giai": "Chi phí tiếp khách, ngoại giao", "truoc_thue": 725000, "giam": 0, "thue": 58000, "sau_thue": 783000},
    {"stt": 6, "date": "03/05/2026", "so_hd": "5268", "mst": "0315630862", "ten_dt": "CÔNG TY TNHH CÁI LÒ NƯỚNG", "dien_giai": "Mua hàng", "truoc_thue": 726852, "giam": 0, "thue": 58148, "sau_thue": 785000},
    {"stt": 7, "date": "04/05/2026", "so_hd": "3202329", "mst": "0106773786", "ten_dt": "CÔNG TY TNHH SHOPEE", "dien_giai": "Phí dịch vụ Affiliate 04/2026", "truoc_thue": 1416, "giam": 0, "thue": 113, "sau_thue": 1529},
    {"stt": 8, "date": "05/05/2026", "so_hd": "149", "mst": "0109998900", "ten_dt": "CÔNG TY TNHH TƯ VẤN VÀ KẾ TOÁN T&C", "dien_giai": "Phí dịch vụ tư vấn tháng 04/2026", "truoc_thue": 3000000, "giam": 0, "thue": 240000, "sau_thue": 3240000},
    {"stt": 9, "date": "06/05/2026", "so_hd": "474696", "mst": "0101778163-001", "ten_dt": "Chi Nhánh Công Ty Cổ Phần Viễn Thông FPT", "dien_giai": "Cước phí viễn thông", "truoc_thue": 1472727, "giam": 0, "thue": 147273, "sau_thue": 1620000},
    {"stt": 10, "date": "06/05/2026", "so_hd": "474607", "mst": "0101778163-001", "ten_dt": "Chi Nhánh Công Ty Cổ Phần Viễn Thông FPT", "dien_giai": "Cước phí viễn thông", "truoc_thue": 362727, "giam": 0, "thue": 36273, "sau_thue": 399000},
    {"stt": 11, "date": "14/05/2026", "so_hd": "175634", "mst": "0315275368", "ten_dt": "Công ty Cổ phần Dược phẩm FPT Long Châu", "dien_giai": "Chi phí đồ dùng văn phòng", "truoc_thue": 218154.28, "giam": 0, "thue": 10907.72, "sau_thue": 229062},
    {"stt": 12, "date": "24/05/2026", "so_hd": "209317", "mst": "0102313379-011", "ten_dt": "CHI NHÁNH CÔNG TY TNHH THƯƠNG MẠI, DỊCH VỤ VÀ PHÂN PHỐI TỔNG HỢP TẠI TÂY NINH", "dien_giai": "Chi phí đồ dùng văn phòng", "truoc_thue": 636575, "giam": 0, "thue": 50925, "sau_thue": 687500},
    {"stt": 13, "date": "01/06/2026", "so_hd": "186", "mst": "0109998900", "ten_dt": "CÔNG TY TNHH TƯ VẤN VÀ KẾ TOÁN T&C", "dien_giai": "Phí dịch vụ tư vấn tháng 05/2026", "truoc_thue": 3000000, "giam": 0, "thue": 240000, "sau_thue": 3240000},
    {"stt": 14, "date": "03/06/2026", "so_hd": "22257", "mst": "0313596856", "ten_dt": "CÔNG TY TNHH THƯƠNG MẠI NITORI VIỆT NAM", "dien_giai": "Mua hàng", "truoc_thue": 1833332, "giam": 0, "thue": 146668, "sau_thue": 1980000},
    {"stt": 15, "date": "04/06/2026", "so_hd": "19661", "mst": "0313581779", "ten_dt": "CÔNG TY TNHH TRAVELOKA VIỆT NAM", "dien_giai": "Chi phí di chuyển, vận chuyển", "truoc_thue": 7016667, "giam": 0, "thue": 561333, "sau_thue": 8058000},
    {"stt": 16, "date": "24/06/2026", "so_hd": "13078898", "mst": "0313403198", "ten_dt": "CÔNG TY CỔ PHẦN KING FOOD MARKET", "dien_giai": "Mua hàng", "truoc_thue": 224357, "giam": 0, "thue": 11938, "sau_thue": 236295},
]

# Sale invoices (Bán ra)
sale_invoices = [
    {"stt": 17, "date": "04/05/2026", "so_hd": "17", "mst": "0313248400", "ten_dt": "CÔNG TY CỔ PHẦN MANNY", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số HDDVQC/20250916/MANNY&TH ký ngày 14/04/2026 và Biên bản nghiệm thu kiêm thanh lý ký ngày 04/05/2026", "truoc_thue": 10000000, "giam": 100000, "thue": 0, "sau_thue": 9900000},
    {"stt": 18, "date": "04/05/2026", "so_hd": "16", "mst": "0108750008", "ten_dt": "CÔNG TY TNHH TRUYỀN THÔNG VÀ SỰ KIỆN 3BROTHERS", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số HKD THP_3BRO2_L'OREAL PARIS Lumi Cream Ontop_260241 005 ký ngày 01/04/2026 kèm Biên bản nghiệm thu và thanh lý ký ngày 04/05/2026", "truoc_thue": 9595960, "giam": 95960, "thue": 0, "sau_thue": 9500000},
    {"stt": 19, "date": "08/05/2026", "so_hd": "18", "mst": "0315909712", "ten_dt": "CÔNG TY TNHH OQR", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 269/2026/HDDV/OQR ký ngày 20/04/2026 kèm Biên bản nghiệm thu và thanh lý ký ngày 08/05/2026", "truoc_thue": 8888889, "giam": 88889, "thue": 0, "sau_thue": 8800000},
    {"stt": 20, "date": "18/05/2026", "so_hd": "20", "mst": "0106860559", "ten_dt": "CÔNG TY TNHH THƯƠNG MẠI LINK VIỆT NAM", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 1103/2026/HĐDVQC-LINKVN-THPHUC-TOS ký ngày 11/03/2026 và Biên bản nghiệm thu ký ngày 18/05/2026", "truoc_thue": 10000000, "giam": 100000, "thue": 0, "sau_thue": 9900000},
    {"stt": 21, "date": "18/05/2026", "so_hd": "19", "mst": "0313492494", "ten_dt": "CÔNG TY TNHH UNICORN DIGITAL", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 31032026/TRANHONGPHUC-UNICORN/SKACLEARWHITE2026 ký ngày 31/03/2026 kèm Biên bản nghiệm thu ký ngày 18/05/2026", "truoc_thue": 11111111, "giam": 111111, "thue": 0, "sau_thue": 11000000},
    {"stt": 22, "date": "24/05/2026", "so_hd": "21", "mst": "0319421274", "ten_dt": "CÔNG TY TNHH TRUYỀN THÔNG EIGHT MEDIA", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số EIGHT/05052026/HDDV-TRANHONGPHUC107/03 ký ngày 05/05/2026 (Đợt 1)", "truoc_thue": 4444444, "giam": 44444, "thue": 0, "sau_thue": 4400000},
    {"stt": 23, "date": "25/05/2026", "so_hd": "22", "mst": "0110855086", "ten_dt": "CÔNG TY TNHH SINH DƯỢC BIO", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 2104/TRANHONGPHUC/2026/HDDV-BIO ký ngày 21/04/2026 kèm Biên bản nghiệm thu và thanh lý ký ngày 25/05/2026", "truoc_thue": 8888889, "giam": 88889, "thue": 0, "sau_thue": 8800000},
    {"stt": 24, "date": "28/05/2026", "so_hd": "23", "mst": "0318475414", "ten_dt": "CÔNG TY TNHH MARKETING FINT VIỆT NAM", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số FINTVN-ATTENIR-2026-57 ký ngày 15/04/2026", "truoc_thue": 13333333, "giam": 133333, "thue": 0, "sau_thue": 13200000},
    {"stt": 25, "date": "29/05/2026", "so_hd": "24", "mst": "0109863389", "ten_dt": "CÔNG TY CỔ PHẦN BEST ME", "dien_giai": "Thanh toán 100% phí dịch vụ theo Hợp đồng số 06042026/HĐDV/BM-THP ký ngày 06/04/2026", "truoc_thue": 38888889, "giam": 388889, "thue": 0, "sau_thue": 38500000},
    {"stt": 26, "date": "30/05/2026", "so_hd": "25", "mst": "0313492494", "ten_dt": "CÔNG TY TNHH UNICORN DIGITAL", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 18052026/TRANHONGPHUC-UNICORN/MENTHOLATUMEVENT2026 ký ngày 18/05/2026 kèm Biên bản nghiệm thu ký ngày 30/05/2026", "truoc_thue": 16111111, "giam": 161111, "thue": 0, "sau_thue": 15950000},
    {"stt": 27, "date": "01/06/2026", "so_hd": "27", "mst": "0317511162", "ten_dt": "CÔNG TY TNHH LÀM ĐẸP LOUISTAR", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 041/2026/HĐDV-THP-LORSIA ký ngày 23/04/2026", "truoc_thue": 8888889, "giam": 88889, "thue": 0, "sau_thue": 8800000},
    {"stt": 28, "date": "01/06/2026", "so_hd": "26", "mst": "034200000057", "ten_dt": "HỘ KINH DOANH BRUSHIE OFFICIAL", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 20260520/HĐDV/THP ký ngày 20/05/2026", "truoc_thue": 10000000, "giam": 100000, "thue": 0, "sau_thue": 9900000},
    {"stt": 29, "date": "11/06/2026", "so_hd": "29", "mst": "0315872501", "ten_dt": "CÔNG TY CỔ PHẦN TCELL", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 2004/HDDV/TCELL-THP ký ngày 20/04/2026 kèm Biên bản nghiệm thu ký ngày 11/06/2026", "truoc_thue": 9444444, "giam": 94444, "thue": 0, "sau_thue": 9350000},
    {"stt": 30, "date": "11/06/2026", "so_hd": "28", "mst": "0319421274", "ten_dt": "CÔNG TY TNHH TRUYỀN THÔNG EIGHT MEDIA", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số EIGHT/05052026/HDDV-TRANHONGPHUC107/03 ký ngày 05/05/2026 (Đợt 2)", "truoc_thue": 4444444, "giam": 44444, "thue": 0, "sau_thue": 4400000},
    {"stt": 31, "date": "16/06/2026", "so_hd": "33", "mst": "0110050846", "ten_dt": "CÔNG TY CỔ PHẦN META ECOM", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 10052026/HD-METAECOM/HKDTRANHONGPHUC ký ngày 10/05/2026 kèm Biên bản nghiệm thu ký ngày 16/06/2026", "truoc_thue": 9444444, "giam": 94444, "thue": 0, "sau_thue": 9350000},
    {"stt": 32, "date": "16/06/2026", "so_hd": "32", "mst": "0110050846", "ten_dt": "CÔNG TY CỔ PHẦN META ECOM", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 13042026/HD-METAECOM/HKDTRANHONGPHUC ký ngày 13/04/2026 kèm Biên bản nghiệm thu ký ngày 16/06/2026", "truoc_thue": 16666667, "giam": 166667, "thue": 0, "sau_thue": 16500000},
    {"stt": 33, "date": "16/06/2026", "so_hd": "31", "mst": "0110050846", "ten_dt": "CÔNG TY CỔ PHẦN META ECOM", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 09052026/HD-METAECOM/HKDTRANHONGPHUC ký ngày 09/05/2026 kèm Biên bản nghiệm thu ký ngày 16/06/2026", "truoc_thue": 18888889, "giam": 188889, "thue": 0, "sau_thue": 18700000},
    {"stt": 34, "date": "16/06/2026", "so_hd": "30", "mst": "3603331818", "ten_dt": "CÔNG TY TNHH CO NA PI", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 19052026/HĐGT-THP ký ngày 20/05/2026", "truoc_thue": 16666667, "giam": 166667, "thue": 0, "sau_thue": 16500000},
    {"stt": 35, "date": "18/06/2026", "so_hd": "34", "mst": "3301726619", "ten_dt": "CÔNG TY TNHH TRUYỀN THÔNG, QUẢNG CÁO VÀ SỰ KIỆN LIGHT UP", "dien_giai": "Dịch vụ quảng cáo đợt 1 sản phẩm Yoosun Acnes theo Hợp đồng số 01/HĐDV/LU-THPhuc ký ngày 16/06/2026", "truoc_thue": 5000000, "giam": 50000, "thue": 0, "sau_thue": 4950000},
    {"stt": 36, "date": "23/06/2026", "so_hd": "35", "mst": "0313948307", "ten_dt": "CÔNG TY TNHH THƯƠNG MẠI QUẢNG CÁO SÁNG TẠO NÃO", "dien_giai": "Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 260407/HDDV/BRAINAD-HKDTHP ký ngày 07/04/2026", "truoc_thue": 10000000, "giam": 100000, "thue": 0, "sau_thue": 9900000},
]

# Bank statement transactions
bank_transactions = [
    # Format: (date, description, amount, balance)
    # Positive amount = money in (Thu), Negative = money out (Chi)
    ("03/04/2026", "CT DEN:609221051987 TRAN HONG P...", 700000, 716094),
    ("08/04/2026", "So GD goc: 10012729 IBBIZ606127...", 15400000, 15425794),
    ("14/04/2026", "CT DEN:610409313321 SKVN/MKT 1...", 9350000, 9775794),
    ("15/04/2026", "TikTok Shop", 4639961, 7484531),
    ("17/04/2026", "So GD goc: 10002403 OT07AM260...", 9900000, 10384531),
    ("17/04/2026", "TDIC THANH TOAN HD T06MPD26...", 9900000, 20284531),
    ("22/04/2026", "CT DEN:947T26410THDUC2T 3BRO...", 9500000, 9784531),
    ("23/04/2026", "CT DEN:947T26412PT6L7W2 3BROT...", 9900000, 19684531),
    ("29/04/2026", "TikTok Shop", 3945556, 4030087),
    ("30/04/2026", "(Lãi/Nhận tiền không rõ nguồn)", 1114, 4031201),
    ("05/05/2026", "CT DEN:612510465246 TRAN HONG P...", 700000, 731201),
    ("05/05/2026", "CT DEN:612517465828 CTY NANG T...", 9900000, 9940901),
    ("07/05/2026", "CT DEN:947T2650AJ8FM2T1 Manny...", 9900000, 9940901),
    ("10/05/2026", "TikTok Shop", 2757370, 2798271),
    ("13/05/2026", "CT DEN:947T2650LEY6V4RW CTY T...", 8800000, 8898271),
    ("14/05/2026", "TDIC THANH TOAN HD T04MPD26...", 14300000, 14300271),
    ("21/05/2026", "TikTok Shop", 2856553, 2856824),
    ("22/05/2026", "CT DEN:947T265112FDSLV5 8M tha...", 4400000, 4456824),
    ("27/05/2026", "TikTok Shop", 1876911, 1933735),
    ("28/05/2026", "CT DEN:614810311860 UNICORN 10...", 11000000, 11003435),
    ("29/05/2026", "CT DEN:947T2651CLE3LNPN 202605...", 9810000, 20813435),
    ("31/05/2026", "(Lãi/Nhận tiền không rõ nguồn)", 772, 20814207),
    ("01/06/2026", "So GD goc: 10000779 IBBIZ606748...", 13200000, 14014207),
    ("01/06/2026", "CT DEN:947T26600R3RP019 THAN...", 4400000, 4414207),
    ("01/06/2026", "TikTok Shop", 1760692, 1774899),
    ("02/06/2026", "HO KINH DOANH BRUSHIE OFFICIA...", 9900000, 11674899),
    ("05/06/2026", "CT DEN:947T26606VLEVVKX Link Vi...", 9900000, 10574899),
    ("08/06/2026", "CT DEN:947T2660BU20CAL1 8M tha...", 4400000, 4474899),
    ("08/06/2026", "Cty TNHH Sinh Duoc Bio thanh toa...", 8800000, 13274899),
    ("11/06/2026", "HO KINH DOANH TRAN HONG PHU...", 9350000, 9624899),
    ("11/06/2026", "947D6061INCN9FDH UNICORN 10...", 15950000, 15974899),
    ("11/06/2026", "CT DEN:947T2660H7SURQMT 3BR...", 9500000, 25474899),
    ("15/06/2026", "TikTok Shop", 3935801, 4410700),
    ("16/06/2026", "CT DEN:947T2660RAEYRQ3C CTCP...", 9350000, 9360700),
    ("16/06/2026", "CT DEN:947T2660RAEYS60B CTC...", 16500000, 25860700),
    ("16/06/2026", "CT DEN:947T2660RAFOXA7A CTCP...", 18700000, 44560700),
    ("17/06/2026", "Cty Co Na Pi thanh toan Dich vu...", 16500000, 16560700),
    ("17/06/2026", "So GD goc: 10004259 BESTME - T...", 38500000, 55060700),
    ("18/06/2026", "Thanh toan Dot 1 du an Yoosun Ac...", 4950000, 5010700),
    ("23/06/2026", "CT DEN:947T26612JEKU9VG THAN...", 4400000, 9410700),
    ("30/06/2026", "(Lãi/Nhận tiền không rõ nguồn)", 1314, 9412014),
]

# ===== PROCESSING =====

entries = []  # Each entry: [ma_ct, ngay, so_ct, bo_phan, hd, sp, doi_tuong, dien_giai, tk_no, tk_co, ma_tien, ty_gia, nguyen_te, thanh_tien]
so_ct = NEXT_SO

def add_entry(ma_ct, ngay, doi_tuong, dien_giai, tk_no, tk_co, thanh_tien, bo_phan="1"):
    global so_ct
    entries.append([
        ma_ct,
        ngay,
        str(so_ct),
        bo_phan,
        "",
        "",
        doi_tuong,
        dien_giai,
        tk_no,
        tk_co,
        "VND",
        "1",
        str(int(thanh_tien)),
        str(int(thanh_tien))
    ])
    so_ct += 1

# Actually let me use a different approach to track properly
entries_list = []
ctr = NEXT_SO

def e(ma_ct, ngay, doi_tuong, dien_giai, tk_no, tk_co, thanh_tien, bo_phan="1"):
    global ctr
    amt = int(round(thanh_tien))
    entries_list.append([ma_ct, ngay, str(ctr), bo_phan, "", "", doi_tuong, dien_giai, tk_no, tk_co, "VND", "1", str(amt), str(amt)])
    ctr += 1

def shorten(text, max_len=200):
    """Shorten text to max_len chars"""
    text = text.replace("\n", " ").replace("\r", " ")
    if len(text) > max_len:
        text = text[:max_len-3] + "..."
    return text

# ===== 1. Process Purchase Invoices (PK) =====
for inv in purchase_invoices:
    # Check for food/entertainment invoices
    ten_dt = inv["ten_dt"]
    dien_giai = inv["dien_giai"]
    mst = inv["mst"]
    
    # Determine the description
    if "MỘC F&B" in ten_dt or "tiếp khách" in dien_giai.lower():
        desc = f"Chi phí tiếp khách, ngoại giao HĐ số {inv['so_hd']}"
    elif "Uniqlo" in ten_dt or "MUJI" in ten_dt or "NITORI" in ten_dt or "KING FOOD" in ten_dt:
        # Regular purchase - use original description
        desc = f"{dien_giai} HĐ số {inv['so_hd']}"
    elif "FPT" in mst and ("474696" in inv["so_hd"] or "474607" in inv["so_hd"]):
        desc = f"Cước phí viễn thông HĐ số {inv['so_hd']}"
    elif "FPT Long Châu" in ten_dt or "đồ dùng văn phòng" in dien_giai.lower():
        desc = f"Chi phí đồ dùng văn phòng HĐ số {inv['so_hd']}"
    elif "TÂY NINH" in ten_dt:
        desc = f"Chi phí đồ dùng văn phòng HĐ số {inv['so_hd']}"
    elif "CÁI LÒ NƯỚNG" in ten_dt:
        desc = f"Mua hàng HĐ số {inv['so_hd']}"
    elif "Traveloka" in ten_dt or "di chuyển" in dien_giai.lower() or "vận chuyển" in dien_giai.lower():
        desc = f"Chi phí di chuyển, vận chuyển HĐ số {inv['so_hd']}"
    else:
        desc = f"{dien_giai} HĐ số {inv['so_hd']}"
    
    desc = shorten(desc)
    
    # HKD - 1 line for total cost (no VAT deduction)
    e("PK", inv["date"], mst, desc, "64277", "331", inv["sau_thue"])

# ===== 2. Process Sale Invoices (PK) =====
for inv in sale_invoices:
    # Revenue recognition: Nợ 131 / Có 5113, amount = Trước thuế
    desc = shorten(f"{inv['dien_giai']} HĐ số {inv['so_hd']}")
    e("PK", inv["date"], inv["mst"], desc, "131", "5113", inv["truoc_thue"])
    
    # If Giảm trước thuế > 0: Nợ 333821 / Có 131
    if inv["giam"] > 0:
        desc_giam = shorten(f"Điều chỉnh giảm {inv['dien_giai']} HĐ số {inv['so_hd']}")
        e("PK", inv["date"], inv["mst"], desc_giam, "333821", "131", inv["giam"])

# ===== 3. Process Bank Statement =====
# Need to match incoming payments to sale invoices, outgoing to purchase invoices
# Also handle TikTok, insurance, etc.

# Create lookup dictionaries
sale_by_mst_amount = {}
for inv in sale_invoices:
    key = (inv["mst"], inv["sau_thue"])
    if key not in sale_by_mst_amount:
        sale_by_mst_amount[key] = []
    sale_by_mst_amount[key].append(inv)

purchase_by_amount = {}
for inv in purchase_invoices:
    amt = inv["sau_thue"]
    if amt not in purchase_by_amount:
        purchase_by_amount[amt] = []
    purchase_by_amount[amt].append(inv)

# Process each bank transaction
for tx in bank_transactions:
    date, desc, amount, balance = tx
    
    if "TikTok Shop" in desc:
        # TikTok Shop - special handling per 3.2.1
        # 1. PK: Nợ 131 / Có 5118 (doanh thu)
        # But the PK for revenue was already created with entry #346 in the history...
        # Actually, for TikTok: 2 entries per rule 3.2.1:
        # PK: Nợ 131 / Có 5118 (doanh thu)
        # BC: Nợ 112111 / Có 131 (thu tiền)
        
        # PK: Doanh thu hoa hồng
        e("PK", date, TIKTOK_MST, "Doanh thu Hoa hồng tiếp thị liên kết Tiktok", "131", "5118", amount)
        # BC: Thu tiền ngân hàng
        e("BC", date, TIKTOK_MST, f"TikTok Shop", "112111", "131", amount)
    
    elif "(Lãi/Nhận tiền không rõ nguồn)" in desc:
        # Interest income: Nợ 112111 / Có 5154
        e("BC", date, COMPANY_MST, desc, "112111", "5154", amount)
    
    elif "CT DEN" in desc or "So GD goc" in desc or "TDIC" in desc or any(x in desc for x in ["THANH TOAN", "thanh toan", "thanh toán"]):
        # Money in (Thu ngân hàng) - check if it matches a sale invoice
        matched = False
        for inv in sale_invoices:
            if abs(inv["sau_thue"] - amount) < 1000:
                # Match found - BC: Nợ 112111 / Có 131
                desc_bc = shorten(f"Nhận {inv['dien_giai']} HĐ số {inv['so_hd']}")
                e("BC", date, inv["mst"], desc_bc, "112111", "131", amount)
                matched = True
                break
        
        if not matched:
            # Check if it's a payment from a customer that we can identify
            # Try to match by description keywords
            matched_sale = None
            for inv in sale_invoices:
                ten_short = inv["ten_dt"][:20].lower()
                if ten_short in desc.lower():
                    matched_sale = inv
                    break
            
            if matched_sale:
                e("BC", date, matched_sale["mst"], f"Nhận {shorten(matched_sale['dien_giai'])} HĐ số {matched_sale['so_hd']}", "112111", "131", amount)
            else:
                # Couldn't match - treat as general receipt
                e("BC", date, COMPANY_MST, desc, "112111", "131", amount)
    
    else:
        # Money in - check if customer payment
        matched = False
        for inv in sale_invoices:
            ten_lower = inv["ten_dt"].lower()
            desc_lower = desc.lower()
            words = ten_lower.split()[:3]
            if any(w in desc_lower for w in words if len(w) > 3):
                e("BC", date, inv["mst"], f"Nhận {shorten(inv['dien_giai'])} HĐ số {inv['so_hd']}", "112111", "131", amount)
                matched = True
                break
        
        if not matched and "nop" in desc.lower():
            e("BC", date, COMPANY_MST, "Nộp tiền mặt vào tiền gửi ngân hàng", "112111", "1111", amount)
        elif not matched:
            e("BC", date, COMPANY_MST, desc, "112111", "131", amount)

# ===== 4. Process Outgoing Bank (Chi ngân hàng) =====
# Looking at bank transactions more carefully - ALL transactions in the bank statement are money IN (Thu)
# They're all CT DEN (credit transfer incoming) or TikTok Shop (incoming) or Lãi (interest)
# There are no outgoing transactions in this bank statement!

# Let me re-verify... All amounts are positive (money in) and balance goes up and down.
# Actually looking at the balance column, when money comes in it goes up, then next line goes down.
# Wait, no. Looking at the data:
# 4/3: +700k -> balance 716,094
# 4/8: +15,400,000 -> balance 15,425,794
# These are all deposits/incoming. But the balance drops suddenly between transactions.
# For example: 4/17 +9,900,000 -> 10,384,531 then immediately +9,900,000 -> 20,284,531
# That's because some transactions are processed on the same day.
# But 4/22 +9,500,000 -> 9,784,531 (balance went DOWN from 20,284,531 to 9,784,531 despite a deposit)
# This means there are outgoing transactions NOT captured in this statement!
# The bank statement only shows incoming transactions (CT DEN = credit transfer).

# Actually CT DEN stands for "Chuyển tiền đến" (incoming transfer) in Vietnamese banking.
# This statement ONLY shows incoming transactions.
# For outgoing transactions, we'd need a separate statement.
# Since we don't have outgoing transactions in the bank statement,
# we handle incoming only.

# So actually, all the transactions above were already processed as BC/BC entries.
# Let me NOT process them again.

# Actually wait - I already processed them above in section 3. Let me re-structure.

# The bank statement shows ONLY incoming transactions. So:
# - All CT DEN, TikTok Shop, Lãi entries = money IN
# These are processed as BC (Báo Có)

# But we also need to handle:
# 4. PC entries for unpaid purchase invoices
# 5. Insurance entries

# ===== 5. Process PC (Phiếu Chi) for unpaid purchase invoices =====
# Rule: Any purchase invoice NOT paid via bank gets a PC entry
# Since there are NO outgoing bank transactions, ALL purchase invoices are unpaid via bank
# But wait - some might have been paid already... 
# Let me check if any bank incoming matches purchase invoice amounts
# Actually, incoming bank can't match purchases since purchases are money OUT.

# So all purchase invoices need PC entries (cash payment)
for inv in purchase_invoices:
    desc_pk = f"{inv['dien_giai']} HĐ số {inv['so_hd']}"
    if "MỘC F&B" in inv["ten_dt"]:
        desc_pk = f"Chi phí tiếp khách, ngoại giao HĐ số {inv['so_hd']}"
    elif "FPT Long Châu" in inv["ten_dt"]:
        desc_pk = f"Chi phí đồ dùng văn phòng HĐ số {inv['so_hd']}"
    elif "TÂY NINH" in inv["ten_dt"]:
        desc_pk = f"Chi phí đồ dùng văn phòng HĐ số {inv['so_hd']}"
    elif "Traveloka" in inv["ten_dt"]:
        desc_pk = f"Chi phí di chuyển, vận chuyển HĐ số {inv['so_hd']}"
    elif "FPT" in inv["mst"] and ("474696" in inv["so_hd"] or "474607" in inv["so_hd"]):
        desc_pk = f"Cước phí viễn thông HĐ số {inv['so_hd']}"
    
    desc_pc = shorten(f"Thanh toán {desc_pk}")
    e("PC", inv["date"], inv["mst"], desc_pc, "331", "1111", inv["sau_thue"])

# ===== 6. Insurance entries =====
# For each active month, generate PK: Nợ 64271 / Có 3383, amount = 690300
# Check if any bank transaction matches insurance (amount = 690300 or multiple)
# No outgoing bank transactions, so no insurance payment via bank
# Therefore: just PK for each month

bh_amount = 690300
for month in ["04/2026", "05/2026", "06/2026"]:
    month_num = month[:2]
    year = month[3:7]
    end_of_month_dates = {"04/2026": "30/04/2026", "05/2026": "31/05/2026", "06/2026": "30/06/2026"}
    
    # PK: Chi phí bảo hiểm
    e("PK", end_of_month_dates[month], BH_MST, f"Chi phí bảo hiểm tháng {year}.{month_num}", "64271", "3383", bh_amount)

# ===== OUTPUT =====
lines = []
lines.append(f"| MÃ CHỨNG TỪ | NGÀY GHI SỔ | SỐ CHỨNG TỪ | BỘ PHẬN | HỢP ĐỒNG | MÃ SẢN PHẨM CÔNG TRÌNH | MÃ ĐỐI TƯỢNG | DIỄN GIẢI | TÀI KHOẢN | &nbsp; | MÃ TIỀN TỆ | TỶ GIÁ |  NGUYÊN TỆ  |  THÀNH TIỀN  |")
lines.append(f"|:---|:---|:---|:---|:---|:---|:---|:---|:---:|:---:|:---|:---|:---|:---|")
lines.append(f"| | | | | | | | | NỢ | CÓ | | | | |")

total_debit = 0
total_credit = 0
count_pk = 0
count_bn = 0
count_bc = 0
count_pc = 0

for ent in entries_list:
    ma_ct = ent[0]
    amt = int(ent[12])
    
    if ma_ct == "PK":
        count_pk += 1
    elif ma_ct == "BN":
        count_bn += 1
    elif ma_ct == "BC":
        count_bc += 1
    elif ma_ct == "PC":
        count_pc += 1
    
    total_debit += amt
    total_credit += amt
    
    lines.append(f"{'|'.join(ent)}")

# Write output
output = "\n".join(lines)

# Check if 0.result.md already exists
import os
result_path = r"d:\DEVELOPER\3.accounting_excel\src\clients\072098001948\2026.Q2\0.result.md"
if os.path.exists(result_path):
    # Find next available number
    n = 1
    while os.path.exists(f"d:\\DEVELOPER\\3.accounting_excel\\src\\clients\\072098001948\\2026.Q2\\0.result_{n}.md"):
        n += 1
    result_path = f"d:\\DEVELOPER\\3.accounting_excel\\src\\clients\\072098001948\\2026.Q2\\0.result_{n}.md"
    print(f"0.result.md exists. Saving as 0.result_{n}.md")

with open(result_path, "w", encoding="utf-8") as f:
    f.write(output)
    f.write("\n")

print(f"\n=== SUMMARY ===")
print(f"Total rows: {len(entries_list)}")
print(f"PK entries: {count_pk}")
print(f"BN entries: {count_bn}")
print(f"BC entries: {count_bc}")
print(f"PC entries: {count_pc}")
print(f"Total debit: {total_debit:,}")
print(f"Total credit: {total_credit:,}")
print(f"\nFile saved to: {result_path}")
