const fs = require('fs');
const c = fs.readFileSync('d:/DEVELOPER/3.accounting_excel/src/8785516231-001/2026.Q2/0.result.md', 'utf8');
const lines = c.split('\n').filter(l => l.startsWith('|') && !l.includes('---') && !l.includes('&nbsp;') && !l.includes('MÃ CHỨNG TỪ'));
const data = lines.map(l => {
  const p = l.split('|').slice(1, -1).map(x => x.trim());
  return { ma: p[0], ng: p[1], so: parseInt(p[2]), dt: p[6], dg: p[7], tkn: p[8], tkc: p[9], tt: parseInt(p[13]) || 0 };
});

console.log('=== TẤT CẢ BÚT TOÁN VỚI MST NỘI BỘ 8785516231-001 ===\n');

// Part 1: All entries with internal MST
console.log('--- BÚT TOÁN LIÊN QUAN TK 131 (Phải thu) ---');
console.log('| Loại | Ngày | Số CT | Nợ | Có | Tiền | Diễn giải |');
console.log('|:---|:---:|:---:|:---:|:---:|---:|:---|');

let t131N = 0, t131C = 0;

data.forEach(r => {
  if (r.dt !== '8785516231-001') return;
  if (r.tkn === '131' || r.tkc === '131') {
    console.log('| ' + r.ma + ' | ' + r.ng + ' | ' + r.so + ' | ' + r.tkn + ' | ' + r.tkc + ' | ' + r.tt.toLocaleString() + ' | ' + r.dg.substring(0, 55) + ' |');
    if (r.tkn === '131') t131N += r.tt;
    if (r.tkc === '131') t131C += r.tt;
  }
});

console.log('\nTổng Nợ 131 (nội bộ): ' + t131N.toLocaleString());
console.log('Tổng Có 131 (nội bộ): ' + t131C.toLocaleString());
console.log('Dư Có 131 (nội bộ): ' + (t131C - t131N).toLocaleString() + '\n');

// Part 2: All BC entries with internal MST (these go to 131 credit)
console.log('\n--- BC (Báo Có) dùng MST nội bộ - nguồn gốc dư Có ---');
console.log('| Ngày | Số CT | Tiền | Nội dung gốc từ sao kê |');
console.log('|:---:|:---:|---:|:---|');
let bcTotal = 0;
data.forEach(r => {
  if (r.dt === '8785516231-001' && r.ma === 'BC') {
    bcTotal += r.tt;
    console.log('| ' + r.ng + ' | ' + r.so + ' | ' + r.tt.toLocaleString() + ' | ' + r.dg.substring(0, 70) + ' |');
  }
});
console.log('Tổng BC nội bộ: ' + bcTotal.toLocaleString());

// Part 3: What are these BC transactions in the bank statement?
console.log('\n\n--- ĐỐI CHIẾU VỚI SAO KÊ NGÂN HÀNG ---');
const bs = fs.readFileSync('d:/DEVELOPER/3.accounting_excel/src/8785516231-001/2026.Q2/2.sao_ke.md', 'utf8');
const bsLines = bs.split('\n').filter(l => l.startsWith('|'));
let ds = 0;
for (let i = 0; i < bsLines.length; i++) { if (bsLines[i].match(/^\|[-:| ]+\|$/)) { ds = i + 1; break; } }
console.log('Các giao dịch thu tiền (dương) từ sao kê:');
let thuCount = 0;
for (let i = ds; i < bsLines.length; i++) {
  const p = bsLines[i].split('|').slice(1, -1).map(x => x.trim());
  if (p.length < 5) continue;
  const amt = parseInt(p[2].replace(/,/g, '')) || 0;
  if (amt > 0) {
    thuCount++;
    console.log('  ' + p[0] + '. ' + p[1].split(' ')[0] + ' +' + amt.toLocaleString() + ' | ' + p[4].substring(0, 70));
  }
}
console.log('Tổng giao dịch thu: ' + thuCount);

// Part 4: Check which BC entries went to internal MST vs actual customers
console.log('\n\n--- PHÂN TÍCH BC (Báo Có) THEO MÃ ĐỐI TƯỢNG ---');
const byMST = {};
data.forEach(r => {
  if (r.ma !== 'BC') return;
  if (!byMST[r.dt]) byMST[r.dt] = 0;
  byMST[r.dt] += r.tt;
});
Object.keys(byMST).sort((a, b) => byMST[b] - byMST[a]).forEach(k => {
  console.log('  ' + k + ': ' + byMST[k].toLocaleString());
});
