const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(n) {
  if (n === 1) {
    return ('Composite');
  }
  if (n === 2) {
    return ('Prime');
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return ('Composite');
    }
  }
  return ('Prime');
}

rl.on('close', () => {
  solve(lines);
});
