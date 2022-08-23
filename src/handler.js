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

  // Menambahkan property dari newBook
  const id = nanoid(16);
  const finished = false;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  // Membuat object newBook yang telah disusun isinya
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

// Handler untuk mendapatkan books
const getAllBooksHandler = () => ({
  status: 'success',
  data: {
    books: books.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    })),
  },
});

// Handler untuk mendapatkan single book
const getBookByIdHandler = (request, h) => {
  const { id } = request.params; // Mengambil id address

  // Memanfaatkan id untuk memfilter book yang cocok idnya
  const book = books.filter((n) => n.id === id)[0];

  // Jika book tidak undefined maka return success response
  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  // Jika book undefined maka lanjut ke sini return fail response
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

// Handler untuk mengubah single book berdasarkan id
const editBookByIdHandler = (request, h) => {
  const { id } = request.params; // Mengambil id address

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload; // Meminta data terbaru yang dikirimkan client
  const updatedAt = new Date().toISOString(); // Update tanggal otomatis saat ini

  // Lakukan pencarian book berdasarkan id
  const index = books.findIndex((book) => book.id === id);

  // RESPONSE : User tidak menambahkan nama buku
  if (name === undefined) {
    const response = h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
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
          'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
    return response;
  }

  // Jika index !== -1 (artinya ditemukan maka )
  if (index !== -1) {
    books[index] = {
    // Spread operator digunakan untuk mempertahankan data yang tidak perlu diubah
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    // Kembalikan response success
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  // Jika id tidak ditemukan maka response fail
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

// Handler untuk menghapus suatu buku berdasarkan id
const deleteBookByIdHandler = (request, h) => {
  const { id } = request.params; // Mendapatkan id address

  // Mencari book dengan id tertentu
  const index = books.findIndex((book) => book.id === id);

  // Jika index !== -1 artinya terdapat book yang sesuai maka response success
  if (index !== -1) {
    // splice digunakan untuk menghapus elemen array
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  // Jika tidak ditemukan maka response fail
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

// Melakukan export handler
module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
