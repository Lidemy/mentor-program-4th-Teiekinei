// eslint-disable-next-line
const request = require('request');

const name = process.argv[2];

request(
  `https://restcountries.eu/rest/v2/name/${name}`,
  (error, response, body) => {
    if (error) {
      console.log('找不到國家資訊');
      return;
    }
    if (response.statusCode >= 400 && response.statusCode < 500) {
      console.log('找不到國家資訊');
      return;
    }
    if (!name) {
      console.log('請輸入國家名稱');
      return;
    }
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log('============');
      console.log(`國家：${data[i].name}`);
      console.log(`首都：${data[i].capital}`);
      console.log(`貨幣：${data[i].currencies[0].code}`);
      console.log(`國碼：${data[i].callingCodes}`);
    }
  },
);
