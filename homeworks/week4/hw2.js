// eslint-disable-next-line
const request = require('request');
const bookData = process.argv;

function listBook() {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
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
}


function readBook(id) {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
    (error, response, body) => {
      if (error) {
        console.log('抓取失敗');
        return;
      }
      const book = JSON.parse(body);
      console.log(`${id} ${book.name}`);
    },
  );
}

function deleteBook(id) {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books${id}`,
    (error) => {
      if (error) {
        console.log('刪除失敗');
        return;
      }
      console.log(`刪除 id:${id} 書籍`);
    },
  );
}

function createBook(name) {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    form: { name },
  },
  (error) => {
    if (error) {
      console.log('新增失敗');
      return;
    }
    console.log(`新增書籍:${name}`);
  });
}

function updateBook(id, name) {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
    form: { name },
  },
  (error) => {
    if (error) {
      console.log('更新失敗');
      return;
    }
    console.log(`更新 id:${id} 書名:${name}`);
  });
}

switch (bookData[2]) {
  case 'list':
    listBook();
    break;
  case 'read':
    readBook(bookData[3]);
    break;
  case 'delete':
    deleteBook(bookData[3]);
    break;
  case 'create':
    createBook(bookData[3]);
    break;
  case 'update':
    updateBook(bookData[3], bookData[4]);
    break;
  default:
    console.log('請輸入: list-列出書籍/read id-列出該本書籍/delete id-刪除該本書籍/create "name"-建立該本書籍/update id "name"-更新該本書籍');
}
