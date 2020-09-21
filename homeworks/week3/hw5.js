const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

/* global BigInt */
function compare(a, b, p) {
  const A = BigInt(a);
  const B = BigInt(b);
  const P = Number(p);
  if (a === b) {
    return 'DRAW';
  }
  if (P === -1) {
    if (A < B) {
      return 'A';
    }
    return 'B';
  }
  if (A > B) {
    return 'A';
  }
  return 'B';
}

function solve(input) {
  const m = Number(input[0]);
  for (let i = 1; i <= m; i += 1) {
    const [a, b, p] = input[i].split(' ');
    console.log(compare(a, b, p));
  }
}

rl.on('close', () => {
  solve(lines);
});
