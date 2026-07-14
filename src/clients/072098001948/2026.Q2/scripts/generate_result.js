#!/usr/bin/env node
/**
 * Generate 0.result.md for MST 072098001948 - Q2 2026
 */

const fs = require('fs');
const path = require('path');

// ===== CONFIG =====
const MAX_SO_CHUNG_TU = 361;
let NEXT_SO = MAX_SO_CHUNG_TU + 1;

const BH_MST = "0309385588";
const COMPANY_MST = "072098001948";
const TIKTOK_MST = "201719908M";

// ===== DATA =====

const purchase_invoices = [
  {stt:1, date:"03/04/2026", so_hd:"2608182", mst:"0106773786", ten_dt:"CÔNG TY TNHH SHOPEE", dien_giai:"Phí dịch vụ Affiliate 03/2026", truoc_thue:200, giam:0, thue:16, sau_thue:216},
  {stt:2, date:"06/04/2026", so_hd:"121", mst:"0109998900", ten_dt:"CÔNG TY TNHH TƯ VẤN VÀ KẾ TOÁN T&C", dien_giai:"Phí dịch vụ tư vấn tháng 03/2026", truoc_thue:3000000, giam:0, thue:240000, sau_thue:3240000},
  {stt:3, date:"25/04/2026", so_hd:"263197", mst:"0315304731", ten_dt:"Công Ty TNHH Uniqlo Việt Nam", dien_giai:"Mua hàng", truoc_thue:1272222, giam:0, thue:94444, sau_thue:1275000},
  {stt:4, date:"30/04/2026", so_hd:"18683", mst:"0315855270", ten_dt:"CÔNG TY TNHH MUJI RETAIL (VIỆT NAM)", dien_giai:"Mua hàng", truoc_thue:453704, giam:0, thue:36296, sau_thue:490000},
  {stt:5, date:"30/04/2026", so_hd:"9991", mst:"0303202799", ten_dt:"CÔNG TY TNHH MỘC F&B", dien_giai:"Chi phí tiếp khách, ngoại giao", truoc_thue:725000, giam:0, thue:58000, sau_thue:783000},
  {stt:6, date:"03/05/2026", so_hd:"5268", mst:"0315630862", ten_dt:"CÔNG TY TNHH CÁI LÒ NƯỚNG", dien_giai:"Mua hàng", truoc_thue:726852, giam:0, thue:58148, sau_thue:785000},
  {stt:7, date:"04/05/2026", so_hd:"3202329", mst:"0106773786", ten_dt:"CÔNG TY TNHH SHOPEE", dien_giai:"Phí dịch vụ Affiliate 04/2026", truoc_thue:1416, giam:0, thue:113, sau_thue:1529},
  {stt:8, date:"05/05/2026", so_hd:"149", mst:"0109998900", ten_dt:"CÔNG TY TNHH TƯ VẤN VÀ KẾ TOÁN T&C", dien_giai:"Phí dịch vụ tư vấn tháng 04/2026", truoc_thue:3000000, giam:0, thue:240000, sau_thue:3240000},
  {stt:9, date:"06/05/2026", so_hd:"474696", mst:"0101778163-001", ten_dt:"Chi Nhánh Công Ty Cổ Phần Viễn Thông FPT", dien_giai:"Cước phí viễn thông", truoc_thue:1472727, giam:0, thue:147273, sau_thue:1620000},
  {stt:10, date:"06/05/2026", so_hd:"474607", mst:"0101778163-001", ten_dt:"Chi Nhánh Công Ty Cổ Phần Viễn Thông FPT", dien_giai:"Cước phí viễn thông", truoc_thue:362727, giam:0, thue:36273, sau_thue:399000},
  {stt:11, date:"14/05/2026", so_hd:"175634", mst:"0315275368", ten_dt:"Công ty Cổ phần Dược phẩm FPT Long Châu", dien_giai:"Chi phí đồ dùng văn phòng", truoc_thue:218154.28, giam:0, thue:10907.72, sau_thue:229062},
  {stt:12, date:"24/05/2026", so_hd:"209317", mst:"0102313379-011", ten_dt:"CHI NHÁNH CÔNG TY TNHH THƯƠNG MẠI, DỊCH VỤ VÀ PHÂN PHỐI TỔNG HỢP TẠI TÂY NINH", dien_giai:"Chi phí đồ dùng văn phòng", truoc_thue:636575, giam:0, thue:50925, sau_thue:687500},
  {stt:13, date:"01/06/2026", so_hd:"186", mst:"0109998900", ten_dt:"CÔNG TY TNHH TƯ VẤN VÀ KẾ TOÁN T&C", dien_giai:"Phí dịch vụ tư vấn tháng 05/2026", truoc_thue:3000000, giam:0, thue:240000, sau_thue:3240000},
  {stt:14, date:"03/06/2026", so_hd:"22257", mst:"0313596856", ten_dt:"CÔNG TY TNHH THƯƠNG MẠI NITORI VIỆT NAM", dien_giai:"Mua hàng", truoc_thue:1833332, giam:0, thue:146668, sau_thue:1980000},
  {stt:15, date:"04/06/2026", so_hd:"19661", mst:"0313581779", ten_dt:"CÔNG TY TNHH TRAVELOKA VIỆT NAM", dien_giai:"Chi phí di chuyển, vận chuyển", truoc_thue:7016667, giam:0, thue:561333, sau_thue:8058000},
  {stt:16, date:"24/06/2026", so_hd:"13078898", mst:"0313403198", ten_dt:"CÔNG TY CỔ PHẦN KING FOOD MARKET", dien_giai:"Mua hàng", truoc_thue:224357, giam:0, thue:11938, sau_thue:236295},
];

const sale_invoices = [
  {stt:17, date:"04/05/2026", so_hd:"17", mst:"0313248400", ten_dt:"CÔNG TY CỔ PHẦN MANNY", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số HDDVQC/20250916/MANNY&TH ký ngày 14/04/2026 và Biên bản nghiệm thu kiêm thanh lý ký ngày 04/05/2026", truoc_thue:10000000, giam:100000, thue:0, sau_thue:9900000},
  {stt:18, date:"04/05/2026", so_hd:"16", mst:"0108750008", ten_dt:"CÔNG TY TNHH TRUYỀN THÔNG VÀ SỰ KIỆN 3BROTHERS", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số HKD THP_3BRO2_L'OREAL PARIS Lumi Cream Ontop_260241 005 ký ngày 01/04/2026 kèm Biên bản nghiệm thu và thanh lý ký ngày 04/05/2026", truoc_thue:9595960, giam:95960, thue:0, sau_thue:9500000},
  {stt:19, date:"08/05/2026", so_hd:"18", mst:"0315909712", ten_dt:"CÔNG TY TNHH OQR", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 269/2026/HDDV/OQR ký ngày 20/04/2026 kèm Biên bản nghiệm thu và thanh lý ký ngày 08/05/2026", truoc_thue:8888889, giam:88889, thue:0, sau_thue:8800000},
  {stt:20, date:"18/05/2026", so_hd:"20", mst:"0106860559", ten_dt:"CÔNG TY TNHH THƯƠNG MẠI LINK VIỆT NAM", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 1103/2026/HĐDVQC-LINKVN-THPHUC-TOS ký ngày 11/03/2026 và Biên bản nghiệm thu ký ngày 18/05/2026", truoc_thue:10000000, giam:100000, thue:0, sau_thue:9900000},
  {stt:21, date:"18/05/2026", so_hd:"19", mst:"0313492494", ten_dt:"CÔNG TY TNHH UNICORN DIGITAL", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 31032026/TRANHONGPHUC-UNICORN/SKACLEARWHITE2026 ký ngày 31/03/2026 kèm Biên bản nghiệm thu ký ngày 18/05/2026", truoc_thue:11111111, giam:111111, thue:0, sau_thue:11000000},
  {stt:22, date:"24/05/2026", so_hd:"21", mst:"0319421274", ten_dt:"CÔNG TY TNHH TRUYỀN THÔNG EIGHT MEDIA", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số EIGHT/05052026/HDDV-TRANHONGPHUC107/03 ký ngày 05/05/2026 (Đợt 1)", truoc_thue:4444444, giam:44444, thue:0, sau_thue:4400000},
  {stt:23, date:"25/05/2026", so_hd:"22", mst:"0110855086", ten_dt:"CÔNG TY TNHH SINH DƯỢC BIO", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 2104/TRANHONGPHUC/2026/HDDV-BIO ký ngày 21/04/2026 kèm Biên bản nghiệm thu và thanh lý ký ngày 25/05/2026", truoc_thue:8888889, giam:88889, thue:0, sau_thue:8800000},
  {stt:24, date:"28/05/2026", so_hd:"23", mst:"0318475414", ten_dt:"CÔNG TY TNHH MARKETING FINT VIỆT NAM", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số FINTVN-ATTENIR-2026-57 ký ngày 15/04/2026", truoc_thue:13333333, giam:133333, thue:0, sau_thue:13200000},
  {stt:25, date:"29/05/2026", so_hd:"24", mst:"0109863389", ten_dt:"CÔNG TY CỔ PHẦN BEST ME", dien_giai:"Thanh toán 100% phí dịch vụ theo Hợp đồng số 06042026/HĐDV/BM-THP ký ngày 06/04/2026", truoc_thue:38888889, giam:388889, thue:0, sau_thue:38500000},
  {stt:26, date:"30/05/2026", so_hd:"25", mst:"0313492494", ten_dt:"CÔNG TY TNHH UNICORN DIGITAL", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 18052026/TRANHONGPHUC-UNICORN/MENTHOLATUMEVENT2026 ký ngày 18/05/2026 kèm Biên bản nghiệm thu ký ngày 30/05/2026", truoc_thue:16111111, giam:161111, thue:0, sau_thue:15950000},
  {stt:27, date:"01/06/2026", so_hd:"27", mst:"0317511162", ten_dt:"CÔNG TY TNHH LÀM ĐẸP LOUISTAR", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 041/2026/HĐDV-THP-LORSIA ký ngày 23/04/2026", truoc_thue:8888889, giam:88889, thue:0, sau_thue:8800000},
  {stt:28, date:"01/06/2026", so_hd:"26", mst:"034200000057", ten_dt:"HỘ KINH DOANH BRUSHIE OFFICIAL", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 20260520/HĐDV/THP ký ngày 20/05/2026", truoc_thue:10000000, giam:100000, thue:0, sau_thue:9900000},
  {stt:29, date:"11/06/2026", so_hd:"29", mst:"0315872501", ten_dt:"CÔNG TY CỔ PHẦN TCELL", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 2004/HDDV/TCELL-THP ký ngày 20/04/2026 kèm Biên bản nghiệm thu ký ngày 11/06/2026", truoc_thue:9444444, giam:94444, thue:0, sau_thue:9350000},
  {stt:30, date:"11/06/2026", so_hd:"28", mst:"0319421274", ten_dt:"CÔNG TY TNHH TRUYỀN THÔNG EIGHT MEDIA", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số EIGHT/05052026/HDDV-TRANHONGPHUC107/03 ký ngày 05/05/2026 (Đợt 2)", truoc_thue:4444444, giam:44444, thue:0, sau_thue:4400000},
  {stt:31, date:"16/06/2026", so_hd:"33", mst:"0110050846", ten_dt:"CÔNG TY CỔ PHẦN META ECOM", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 10052026/HD-METAECOM/HKDTRANHONGPHUC ký ngày 10/05/2026 kèm Biên bản nghiệm thu ký ngày 16/06/2026", truoc_thue:9444444, giam:94444, thue:0, sau_thue:9350000},
  {stt:32, date:"16/06/2026", so_hd:"32", mst:"0110050846", ten_dt:"CÔNG TY CỔ PHẦN META ECOM", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 13042026/HD-METAECOM/HKDTRANHONGPHUC ký ngày 13/04/2026 kèm Biên bản nghiệm thu ký ngày 16/06/2026", truoc_thue:16666667, giam:166667, thue:0, sau_thue:16500000},
  {stt:33, date:"16/06/2026", so_hd:"31", mst:"0110050846", ten_dt:"CÔNG TY CỔ PHẦN META ECOM", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 09052026/HD-METAECOM/HKDTRANHONGPHUC ký ngày 09/05/2026 kèm Biên bản nghiệm thu ký ngày 16/06/2026", truoc_thue:18888889, giam:188889, thue:0, sau_thue:18700000},
  {stt:34, date:"16/06/2026", so_hd:"30", mst:"3603331818", ten_dt:"CÔNG TY TNHH CO NA PI", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 19052026/HĐGT-THP ký ngày 20/05/2026", truoc_thue:16666667, giam:166667, thue:0, sau_thue:16500000},
  {stt:35, date:"18/06/2026", so_hd:"34", mst:"3301726619", ten_dt:"CÔNG TY TNHH TRUYỀN THÔNG, QUẢNG CÁO VÀ SỰ KIỆN LIGHT UP", dien_giai:"Dịch vụ quảng cáo đợt 1 sản phẩm Yoosun Acnes theo Hợp đồng số 01/HĐDV/LU-THPhuc ký ngày 16/06/2026", truoc_thue:5000000, giam:50000, thue:0, sau_thue:4950000},
  {stt:36, date:"23/06/2026", so_hd:"35", mst:"0313948307", ten_dt:"CÔNG TY TNHH THƯƠNG MẠI QUẢNG CÁO SÁNG TẠO NÃO", dien_giai:"Dịch vụ quảng cáo và truyền thông theo Hợp đồng số 260407/HDDV/BRAINAD-HKDTHP ký ngày 07/04/2026", truoc_thue:10000000, giam:100000, thue:0, sau_thue:9900000},
];

// Bank statement - only incoming transactions (CT DEN = Chuyển Tiền Đến)
const bank_tx = [
  {date:"03/04/2026", desc:"CT DEN:609221051987 TRAN HONG P...", amount:700000},
  {date:"08/04/2026", desc:"So GD goc: 10012729 IBBIZ606127...", amount:15400000},
  {date:"14/04/2026", desc:"CT DEN:610409313321 SKVN/MKT 1...", amount:9350000},
  {date:"15/04/2026", desc:"TikTok Shop", amount:4639961},
  {date:"17/04/2026", desc:"So GD goc: 10002403 OT07AM260...", amount:9900000},
  {date:"17/04/2026", desc:"TDIC THANH TOAN HD T06MPD26...", amount:9900000},
  {date:"22/04/2026", desc:"CT DEN:947T26410THDUC2T 3BRO...", amount:9500000},
  {date:"23/04/2026", desc:"CT DEN:947T26412PT6L7W2 3BROT...", amount:9900000},
  {date:"29/04/2026", desc:"TikTok Shop", amount:3945556},
  {date:"30/04/2026", desc:"(Lãi/Nhận tiền không rõ nguồn)", amount:1114},
  {date:"05/05/2026", desc:"CT DEN:612510465246 TRAN HONG P...", amount:700000},
  {date:"05/05/2026", desc:"CT DEN:612517465828 CTY NANG T...", amount:9900000},
  {date:"07/05/2026", desc:"CT DEN:947T2650AJ8FM2T1 Manny...", amount:9900000},
  {date:"10/05/2026", desc:"TikTok Shop", amount:2757370},
  {date:"13/05/2026", desc:"CT DEN:947T2650LEY6V4RW CTY T...", amount:8800000},
  {date:"14/05/2026", desc:"TDIC THANH TOAN HD T04MPD26...", amount:14300000},
  {date:"21/05/2026", desc:"TikTok Shop", amount:2856553},
  {date:"22/05/2026", desc:"CT DEN:947T265112FDSLV5 8M tha...", amount:4400000},
  {date:"27/05/2026", desc:"TikTok Shop", amount:1876911},
  {date:"28/05/2026", desc:"CT DEN:614810311860 UNICORN 10...", amount:11000000},
  {date:"29/05/2026", desc:"CT DEN:947T2651CLE3LNPN 202605...", amount:9810000},
  {date:"31/05/2026", desc:"(Lãi/Nhận tiền không rõ nguồn)", amount:772},
  {date:"01/06/2026", desc:"So GD goc: 10000779 IBBIZ606748...", amount:13200000},
  {date:"01/06/2026", desc:"CT DEN:947T26600R3RP019 THAN...", amount:4400000},
  {date:"01/06/2026", desc:"TikTok Shop", amount:1760692},
  {date:"02/06/2026", desc:"HO KINH DOANH BRUSHIE OFFICIA...", amount:9900000},
  {date:"05/06/2026", desc:"CT DEN:947T26606VLEVVKX Link Vi...", amount:9900000},
  {date:"08/06/2026", desc:"CT DEN:947T2660BU20CAL1 8M tha...", amount:4400000},
  {date:"08/06/2026", desc:"Cty TNHH Sinh Duoc Bio thanh toa...", amount:8800000},
  {date:"11/06/2026", desc:"HO KINH DOANH TRAN HONG PHU...", amount:9350000},
  {date:"11/06/2026", desc:"947D6061INCN9FDH UNICORN 10...", amount:15950000},
  {date:"11/06/2026", desc:"CT DEN:947T2660H7SURQMT 3BR...", amount:9500000},
  {date:"15/06/2026", desc:"TikTok Shop", amount:3935801},
  {date:"16/06/2026", desc:"CT DEN:947T2660RAEYRQ3C CTCP...", amount:9350000},
  {date:"16/06/2026", desc:"CT DEN:947T2660RAEYS60B CTC...", amount:16500000},
  {date:"16/06/2026", desc:"CT DEN:947T2660RAFOXA7A CTCP...", amount:18700000},
  {date:"17/06/2026", desc:"Cty Co Na Pi thanh toan Dich vu...", amount:16500000},
  {date:"17/06/2026", desc:"So GD goc: 10004259 BESTME - T...", amount:38500000},
  {date:"18/06/2026", desc:"Thanh toan Dot 1 du an Yoosun Ac...", amount:4950000},
  {date:"23/06/2026", desc:"CT DEN:947T26612JEKU9VG THAN...", amount:4400000},
  {date:"30/06/2026", desc:"(Lãi/Nhận tiền không rõ nguồn)", amount:1314},
];

// ===== HELPERS =====
const entries = [];
let ctr = NEXT_SO;

function shorten(text, maxLen) {
  maxLen = maxLen || 200;
  text = text.replace(/\n/g, ' ').replace(/\r/g, ' ');
  if (text.length > maxLen) text = text.substring(0, maxLen - 3) + '...';
  return text;
}

function e(maCt, ngay, doiTuong, dienGiai, tkNo, tkCo, thanhTien, boPhan) {
  boPhan = boPhan || "";
  const amt = Math.round(thanhTien);
  entries.push([maCt, ngay, String(ctr), boPhan, "", "", doiTuong, dienGiai, tkNo, tkCo, "VND", "1", String(amt), String(amt)]);
  ctr++;
}

function getEndOfMonth(monthYear) {
  const map = {"04/2026":"30/04/2026","05/2026":"31/05/2026","06/2026":"30/06/2026"};
  return map[monthYear];
}

// ===== 1. PURCHASE INVOICES (PK) =====
for (const inv of purchase_invoices) {
  let desc;
  const ten = inv.ten_dt;
  const mst = inv.mst;

  if (ten.includes("MỘC F&B") || ten.includes("CÁI LÒ NƯỚNG")) {
    desc = `Chi phí tiếp khách, ngoại giao HĐ số ${inv.so_hd}`;
  } else if (ten.includes("Uniqlo") || ten.includes("MUJI") || ten.includes("NITORI") || ten.includes("KING FOOD")) {
    desc = `Mua hàng HĐ số ${inv.so_hd}`;
  } else if (mst === "0101778163-001" && (inv.so_hd === "474696" || inv.so_hd === "474607")) {
    desc = `Cước phí viễn thông HĐ số ${inv.so_hd}`;
  } else if (ten.includes("FPT Long Châu")) {
    desc = `Chi phí đồ dùng văn phòng HĐ số ${inv.so_hd}`;
  } else if (ten.includes("TÂY NINH")) {
    desc = `Chi phí đồ dùng văn phòng HĐ số ${inv.so_hd}`;
  } else if (ten.includes("Traveloka")) {
    desc = `Chi phí di chuyển, vận chuyển HĐ số ${inv.so_hd}`;
  } else {
    desc = `${inv.dien_giai} HĐ số ${inv.so_hd}`;
  }

  desc = shorten(desc);
  // HKD: 1 line for total cost
  e("PK", inv.date, mst, desc, "64277", "331", inv.sau_thue);
}

// ===== 2. SALE INVOICES (PK) =====
for (const inv of sale_invoices) {
  const desc = shorten(`${inv.dien_giai} HĐ số ${inv.so_hd}`);
  e("PK", inv.date, inv.mst, desc, "131", "5113", inv.truoc_thue);
  
  if (inv.giam > 0) {
    const descGiam = shorten(`Điều chỉnh giảm ${inv.dien_giai} HĐ số ${inv.so_hd}`);
    e("PK", inv.date, inv.mst, descGiam, "333821", "131", inv.giam);
  }
}

// ===== 3. BANK TRANSACTIONS (BC - incoming) =====
// All transactions are incoming (CT DEN = credit transfer)
for (const tx of bank_tx) {
  if (tx.desc.includes("TikTok Shop")) {
    // Per rule 3.2.1: PK for revenue + BC for collection
    // But for Q2, TikTok was ALREADY handled above via bank matching
    // Actually per rule 3.2.1, TikTok generates:
    // 1. PK: Nợ 131 / Có 5118 (doanh thu)
    // 2. BC: Nợ 112111 / Có 131 (thu tiền)
    e("PK", tx.date, TIKTOK_MST, "Doanh thu Hoa hồng tiếp thị liên kết Tiktok", "131", "5118", tx.amount);
    e("BC", tx.date, TIKTOK_MST, `TikTok Shop`, "112111", "131", tx.amount);
  } else if (tx.desc.includes("Lãi/Nhận tiền không rõ nguồn")) {
    // Interest income
    e("BC", tx.date, COMPANY_MST, tx.desc, "112111", "5154", tx.amount);
  } else {
    // Incoming payment - match to sale invoice by amount
    let matched = false;
    for (const inv of sale_invoices) {
      if (Math.abs(inv.sau_thue - tx.amount) < 1000) {
        const descBc = shorten(`Nhận ${inv.dien_giai} HĐ số ${inv.so_hd}`);
        e("BC", tx.date, inv.mst, descBc, "112111", "131", tx.amount);
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      // Try matching by name in description
      let matchedSale = null;
      for (const inv of sale_invoices) {
        const tenParts = inv.ten_dt.toLowerCase().substring(0, 15);
        if (tx.desc.toLowerCase().includes(tenParts)) {
          matchedSale = inv;
          break;
        }
      }
      
      if (matchedSale) {
        const descBc = shorten(`Nhận ${matchedSale.dien_giai} HĐ số ${matchedSale.so_hd}`);
        e("BC", tx.date, matchedSale.mst, descBc, "112111", "131", tx.amount);
      } else {
        // Try matching by remaining amount after previous payments
        // For now, use generic description
        e("BC", tx.date, COMPANY_MST, tx.desc, "112111", "131", tx.amount);
      }
    }
  }
}

// ===== 4. PC for unpaid purchase invoices =====
// Since bank statement has only incoming, all purchases are unpaid via bank -> PC
for (const inv of purchase_invoices) {
  let descPk;
  const ten = inv.ten_dt;
  const mst = inv.mst;
  
  if (ten.includes("MỘC F&B") || ten.includes("CÁI LÒ NƯỚNG")) {
    descPk = `Chi phí tiếp khách, ngoại giao HĐ số ${inv.so_hd}`;
  } else if (ten.includes("Uniqlo") || ten.includes("MUJI") || ten.includes("NITORI") || ten.includes("KING FOOD")) {
    descPk = `Mua hàng HĐ số ${inv.so_hd}`;
  } else if (mst === "0101778163-001" && (inv.so_hd === "474696" || inv.so_hd === "474607")) {
    descPk = `Cước phí viễn thông HĐ số ${inv.so_hd}`;
  } else if (ten.includes("FPT Long Châu")) {
    descPk = `Chi phí đồ dùng văn phòng HĐ số ${inv.so_hd}`;
  } else if (ten.includes("TÂY NINH")) {
    descPk = `Chi phí đồ dùng văn phòng HĐ số ${inv.so_hd}`;
  } else if (ten.includes("Traveloka")) {
    descPk = `Chi phí di chuyển, vận chuyển HĐ số ${inv.so_hd}`;
  } else {
    descPk = `${inv.dien_giai} HĐ số ${inv.so_hd}`;
  }
  
  const descPc = shorten(`Thanh toán ${descPk}`);
  e("PC", inv.date, inv.mst, descPc, "331", "1111", inv.sau_thue);
}

// ===== 5. INSURANCE (PK) =====
const bhAmount = 690300;
const months = ["04/2026", "05/2026", "06/2026"];
for (const m of months) {
  const eom = getEndOfMonth(m);
  const monthNum = m.substring(0, 2);
  const year = m.substring(3, 7);
  e("PK", eom, BH_MST, `Chi phí bảo hiểm tháng ${year}.${monthNum}`, "64271", "3383", bhAmount);
}

// ===== OUTPUT =====
const lines = [];
lines.push("| MÃ CHỨNG TỪ | NGÀY GHI SỔ | SỐ CHỨNG TỪ | BỘ PHẬN | HỢP ĐỒNG | MÃ SẢN PHẨM CÔNG TRÌNH | MÃ ĐỐI TƯỢNG | DIỄN GIẢI | TÀI KHOẢN | &nbsp; | MÃ TIỀN TỆ | TỶ GIÁ |  NGUYÊN TỆ  |  THÀNH TIỀN  |");
lines.push("|:---|:---|:---|:---|:---|:---|:---|:---|:---:|:---:|:---|:---|:---|:---|");
lines.push("| | | | | | | | | NỢ | CÓ | | | | |");

let totalDebit = 0;
let countPk = 0, countBn = 0, countBc = 0, countPc = 0;

for (const ent of entries) {
  const maCt = ent[0];
  const amt = parseInt(ent[12]);
  totalDebit += amt;
  if (maCt === "PK") countPk++;
  else if (maCt === "BN") countBn++;
  else if (maCt === "BC") countBc++;
  else if (maCt === "PC") countPc++;
  lines.push(ent.join("|"));
}

const output = lines.join("\n") + "\n";

// Write file
const dir = "d:\\DEVELOPER\\3.accounting_excel\\src\\clients\\072098001948\\2026.Q2";
let resultPath = path.join(dir, "0.result.md");

if (fs.existsSync(resultPath)) {
  let n = 1;
  while (fs.existsSync(path.join(dir, `0.result_${n}.md`))) n++;
  resultPath = path.join(dir, `0.result_${n}.md`);
  console.log(`0.result.md exists. Saving as 0.result_${n}.md`);
}

fs.writeFileSync(resultPath, output, "utf8");
console.log(`\n=== SUMMARY ===`);
console.log(`Total rows: ${entries.length}`);
console.log(`PK entries: ${countPk}`);
console.log(`BN entries: ${countBn}`);
console.log(`BC entries: ${countBc}`);
console.log(`PC entries: ${countPc}`);
console.log(`Total debit: ${totalDebit.toLocaleString()}`);
console.log(`Total credit: ${totalDebit.toLocaleString()}`);
console.log(`\nFile saved to: ${resultPath}`);
