// eslint-disable-next-line
const request = require('request');

request({
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': 'cwu1y8ngsucir4uoy03v1h6lnx0i2t',
    Accept: 'application/vnd.twitchtv.v5+json',
  },
}, (error, response, body) => {
  if (error) {
    console.log('error');
    return;
  }
  if (response.statusCode >= 400 && response.statusCode <= 503) {
    console.log('error');
    return;
  }
  const data = JSON.parse(body).top;
  for (let i = 0; i < data.length; i += 1) {
    console.log(`${data[i].viewers} ${data[i].game.name}`);
  }
});
