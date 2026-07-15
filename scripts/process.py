import os
import re

def parse_md_table(filepath):
    lines = open(filepath, 'r', encoding='utf-8').read().strip().split('\n')
    data = []
    headers = []
    for line in lines:
        if '|' not in line: continue
        row = [x.strip() for x in line.split('|')][1:-1]
        if not headers:
            headers = row
        elif set(row[0]) == {'-'} or '---' in row[0]:
            pass
        else:
            data.append(dict(zip(headers, row)))
    return data

invoices = parse_md_table(r'd:\DEVELOPER\3.accounting_excel\src\clients\001304004598\2026.Q2\1.danh_sach_hoa_don.md')
sao_ke = parse_md_table(r'd:\DEVELOPER\3.accounting_excel\src\clients\001304004598\2026.Q2\2.sao_ke.md')

result_lines = []
stt_chung_tu = 1

def add_entry(ma_ct, ngay, bo_phan, doi_tuong, dien_giai, no, co, so_tien):
    global stt_chung_tu
    so_tien = int(float(str(so_tien).replace(',', '')))
    dien_giai = dien_giai.replace('<br>', ' ').strip()
    result_lines.append(f"| {ma_ct} | {ngay} | {stt_chung_tu} | {bo_phan} | | | {doi_tuong} | {dien_giai} | {no} | {co} | VND | 1 | {so_tien} | {so_tien} |")
    if ma_ct == 'PK':
        stt_chung_tu += 1
    # BN, BC, PC also need increasing stt_chung_tu but for each unique nghiệp vụ? 
    # rule: "Đánh số liên tục... không phân biệt loại chứng từ".
    if ma_ct != 'PK':
        stt_chung_tu += 1

# Lọc các MST mới
mst_dict = {}

# Process Invoices
for inv in invoices:
    loai = inv['Loại']
    ngay = inv['Thời gian lập']
    so_hd = inv['Số hóa đơn']
    mst = inv['Mã số thuế']
    ten = inv['Tên đối tác']
    dien_giai = inv['Diễn giải']
    truoc_thue = float(inv.get('Trước thuế', '0') or '0')
    giam_truoc = float(inv.get('Giảm trước thuế', '0') or '0')
    sau_thue = float(inv.get('Sau thuế', '0') or '0')
    
    mst_dict[mst] = {
        'ten': ten,
        'loai': '2' if loai == 'Mua vào' else '1'
    }

    if loai == 'Mua vào':
        # Analyze dien giai
        desc = f"HĐ số {so_hd}"
        if 'GSM' in ten or '0110269067' in mst or 'vận chuyển' in dien_giai.lower():
            desc = f"Chi phí di chuyển, vận chuyển HĐ số {so_hd}"
        elif any(kw in ten.upper() or kw in dien_giai.upper() for kw in ['MẠCH KIM CHÂU', 'HAI DI LAO', 'PIZZA 4PS', 'KAMO', 'BOULEVARD', 'VIỆT HÀN', 'ĂN UỐNG', 'NHÀ HÀNG']):
            desc = f"Chi phí tiếp khách, ngoại giao HĐ số {so_hd}"
        elif any(kw in ten.upper() or kw in dien_giai.upper() for kw in ['VĂN PHÒNG PHẨM', 'MẮT BÃO']):
            desc = f"Chi phí đồ dùng văn phòng HĐ số {so_hd}"
        else:
            dg = dien_giai.split(' HĐ số ')[0]
            desc = dg[:150] + f" HĐ số {so_hd}"
            
        add_entry('PK', ngay, '', mst, desc, '64277', '331', sau_thue)
    else:
        # Bán ra
        dg = dien_giai.split(' HĐ số ')[0]
        desc = dg[:150] + f" HĐ số {so_hd}"
        add_entry('PK', ngay, '', mst, desc, '131', '5113', truoc_thue)
        if giam_truoc > 0:
            add_entry('PK', ngay, '', mst, f"Điều chỉnh giảm {desc}", '511', '131', giam_truoc)

# Process Sao Kê
# Need to match invoices
for sk in sao_ke:
    ngay = sk['Ngày giao dịch']
    noi_dung = sk['Nội dung chi tiết']
    so_tien_str = str(sk['Số tiền (VND)']).replace(',', '')
    so_tien = float(so_tien_str)
    
    if so_tien < 0:
        # Chi ngân hàng
        tien = abs(so_tien)
        # check if it matches any invoice
        matched_inv = None
        for inv in invoices:
            if inv['Loại'] == 'Mua vào':
                inv_tien = float(inv.get('Sau thuế', '0') or '0')
                if abs(inv_tien - tien) < 1:
                    matched_inv = inv
                    break
        
        if matched_inv:
            dg = f"Thanh toán {matched_inv['Diễn giải']}"
            add_entry('BN', ngay, '', matched_inv['Mã số thuế'], dg, '331', '1121', tien)
        elif 'BHXH' in noi_dung:
            add_entry('BN', ngay, '', 'BHXH', f"Thanh toán chi phí bảo hiểm tháng {ngay[-5:]}", '3383', '1121', tien)
        elif 'chuyen' in noi_dung.lower() or 'rút' in noi_dung.lower():
            add_entry('BN', ngay, '', '001304004598', "Rút tiền gửi ngân hàng nhập quỹ tiền mặt", '1111', '112121', tien)
        else:
            # Thuế, phí
            if tien == 3240000 and 'TU VAN VA KE TOAN T VA C' in sk['Đối tác/Người chuyển']:
                # Wait, this is an invoice: HĐ 213 (T&C) has value 3240000. It will be matched by the loop above.
                pass
            else:
                add_entry('BN', ngay, '', '001304004598', noi_dung, '64275', '1121', tien)
    else:
        # Thu ngân hàng
        tien = abs(so_tien)
        matched_inv = None
        for inv in invoices:
            if inv['Loại'] == 'Bán ra':
                inv_tien = float(inv.get('Sau thuế', '0') or '0') - float(inv.get('Giảm trước thuế', '0') or '0')
                # Wait, the column in excel is: Sau thuế = Trước thuế - Giảm trước thuế + Thuế
                # Sau thuế is what is paid.
                inv_tien = float(inv.get('Sau thuế', '0') or '0')
                if abs(inv_tien - tien) < 1:
                    matched_inv = inv
                    break
        if matched_inv:
            add_entry('BC', ngay, '', matched_inv['Mã số thuế'], f"Nhận thanh toán HĐ số {matched_inv['Số hóa đơn']}", '1121', '131', tien)
        elif 'interest' in noi_dung.lower():
            add_entry('BC', ngay, '', '001304004598', noi_dung, '1121', '515', tien)
        elif 'chuyen' in noi_dung.lower() or 'nộp' in noi_dung.lower():
            add_entry('BC', ngay, '', '001304004598', "Nộp tiền mặt vào tiền gửi ngân hàng", '1121', '1111', tien)
        else:
            add_entry('BC', ngay, '', '001304004598', noi_dung, '1121', '131', tien)

header = "| MÃ CHỨNG TỪ | NGÀY GHI SỔ | SỐ CHỨNG TỪ | BỘ PHẬN | HỢP ĐỒNG | MÃ SẢN PHẨM CÔNG TRÌNH | MÃ ĐỐI TƯỢNG | DIỄN GIẢI | TÀI KHOẢN | &nbsp; | MÃ TIỀN TỆ | TỶ GIÁ |  NGUYÊN TỆ  |  THÀNH TIỀN  |\n"
header += "|---|---|---|---|---|---|---|---| NỢ | CÓ |---|---|---|---|\n"

with open(r'd:\DEVELOPER\3.accounting_excel\src\clients\001304004598\2026.Q2\0.result.md', 'w', encoding='utf-8') as f:
    f.write(header + "\n".join(result_lines))

dt_lines = ["| STT | Mã đối tượng | Tên đối tượng | Địa chỉ | Mã số thuế | Nhóm đối tượng | Loại đối tượng |",
            "|:---:|:---|:---|---|:---|:---:|:---:|"]
stt = 1
for k, v in mst_dict.items():
    dt_lines.append(f"| {stt} | {k} | {v['ten']} | | {k} | N002 | {v['loai']} |")
    stt += 1

with open(r'd:\DEVELOPER\3.accounting_excel\src\clients\001304004598\2026.Q2\0.danh_muc_doi_tuong.md', 'w', encoding='utf-8') as f:
    f.write("\n".join(dt_lines))

print(f"Generated {len(result_lines)} records.")
