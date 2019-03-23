const Book = require('../models/Book');

exports.create = (req, res) => {

    if(!req.body.author) {
        res.status(400).send({
            message: 'Book author is required'
        });
        return;
    }
    if(!req.body.title) {
        res.status(400).send({
            message: 'Book title is required'
        });
        return;
    }

    const book = new Book({
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
    });

    book.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({message: err});
    });
};

exports.findAll = (req,  res) => {
    Book.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(400).send({message: err})
    })
};

