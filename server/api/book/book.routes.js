/**
 *  api/book/book.routes.js
 */
 const controller = require('./book.controller');
 const express = require('express');
 const router = express.Router();

 // http://localhost:3000/api/books/allbooks
 router.get('/allBooks', controller.allBooks);
 // http://localhost:3000/api/books/saveUserBook
 router.post('/saveUserBook', controller.saveUserBook);

 module.exports = router;
