const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
} = require('./handler');

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
  // Route untuk mengubah buku satuan (per id)
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
];

module.exports = routes;
