const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(n) {
  if (n >= 1 && n <= 30) {
    let result = '';
    for (let i = 1; i <= n; i += 1) {
      result += '*';
      console.log(result);
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
