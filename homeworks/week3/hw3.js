const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function isPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solve(data) {
  for (let i = 1; i < data.length; i += 1) {
    if (isPrime(Number(data[i])) === true) {
      console.log('Prime');
    }
    console.log('Composite');
  }
}

rl.on('close', () => {
  solve(lines);
});
