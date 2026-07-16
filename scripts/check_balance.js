const fs = require('fs');

const lines = fs.readFileSync('src/clients/079195008785/2026.Q2/2.sao_ke.md', 'utf-8').split('\n');
let headers = [];
let prevBalance = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('|')) {
        const row = line.split('|').slice(1, -1).map(c => c.trim().replace(/&#124;/g, '|').replace(/\\\|/g, '|'));
        if (row[0].replace(/-/g, '').replace(/:/g, '').trim() === '') continue;
        
        if (!headers.length) {
            headers = row;
        } else {
            const time = row[0];
            const amount = parseFloat(row[1].replace(/,/g, ''));
            const balance = parseFloat(row[2].replace(/,/g, ''));
            
            if (prevBalance !== null) {
                const expected = prevBalance + amount;
                if (Math.abs(expected - balance) > 1) {
                    console.log(`Discrepancy at row ${i + 1} (${time}): Expected ${expected}, got ${balance}. Difference: ${balance - expected}`);
                }
            }
            prevBalance = balance;
        }
    }
}
console.log("Check complete.");
