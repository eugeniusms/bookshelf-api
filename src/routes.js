const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
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
  // Route untuk menghapus buku satuan (per id)
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
