// Import nanoid untuk generate id
const { nanoid } = require('nanoid');
// Import array books yang digunakan untuk mengumpulkan semua buku yang ada
const books = require('./books');

// Handler digunakan untuk mendambahkan buku
const addBookHandler = (request, h) => {
  // Meminta masukan dari user
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  // Menambahkan property dari newBook
  const id = nanoid(16);
  const finished = false;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  // Membuat object newNote yang telah disusun isinya
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  // newBook dipush ke array books di dalam books.js
  books.push(newBook);

  // RESPONSE : User tidak menambahkan nama buku
  if (name === undefined) {
    const response = h
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      })
      .code(400);
    return response;
  }

  // RESPONSE : User memasukkan banyak readPage > pageCount
  if (readPage > pageCount) {
    const response = h
      .response({
        status: 'fail',
        message:
          'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
    return response;
  }

  // Mengecek apakah book berhasil disusun
  const isSuccess = books.filter((book) => book.id === id).length > 0;

  // RESPONSE : Jika berhasil disusun maka kirim
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }

  // RESPONSE : Jika gagal menambahkan buku
  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);
  return response;
};

// Melakukan export handler
module.exports = {
  addBookHandler,
};
