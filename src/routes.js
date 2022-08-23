const { addBookHandler, getAllBooksHandler } = require('./handler');

const routes = [
  // Route digunakan untuk menambahkan buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // Route digunakan untuk mendapatkan semua buku
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
];

module.exports = routes;
