module.exports = (app) => {
    let bookController = require('../controllers/BookController');

    /**
     * Create new book
     */
    app.post('/book', bookController.create);

    /**
     * Get all books
     */
    app.get('/books', bookController.findAll);

    /**
     * Get by id
     */
    app.get('/book/:bookId', bookController.findOne);

    /**
     * Update Book
     */
    app.put('/book/:bookId', bookController.update);

    /**
     * Delete book
     */
    app.delete('/book/:bookId', bookController.delete);

};