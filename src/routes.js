const { addBookHandler, getAllBooksHandler, getBookByIdHandler } = require('./handler');

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
  // Route untuk mendapatkan buku satuan (per id)
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
];

module.exports = routes;
