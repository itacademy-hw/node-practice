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
};