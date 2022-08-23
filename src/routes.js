const { addBookHandler } = require('./handler');

const routes = [
  // Route digunakan untuk menambahkan buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
];

module.exports = routes;
