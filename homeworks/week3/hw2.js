const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  const temp = input[0].split(' ');
  const n = Number(temp[0]);
  const m = Number(temp[1]);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371,
    407, 1634, 8208, 9474, 54748, 92727, 93084, 548834];
  for (let i = 0; i <= arr.length; i += 1) {
    const result = arr[i];
    if (result >= n && result <= m) {
      console.log(result);
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
