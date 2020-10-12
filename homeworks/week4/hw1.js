// eslint-disable-next-line
const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    if (error) {
      console.log('抓取失敗');
      return;
    }
    const book = JSON.parse(body);
    for (let i = 0; i < book.length; i += 1) {
      console.log(`${book[i].id} ${book[i].name}`);
    }
  },
);
