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

exports.findOne = (req, res) => {
    Book.findById(req.params.bookId).then(data => {
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            res.status(404).send({message: 'Book was not found with provided id'});
            return;
        }
        res.status(500).send({message: err});
    });
};

exports.update = (req, res) => {
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
  Book.findByIdAndUpdate(req.params.bookId, {
      author: req.body.author,
      title: req.body.title,
      description: req.body.description,
  }, {new: true}).then(data => {
      res.send(data);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          res.status(404).send({message: 'Book was not found with provided id'});
          return;
      }
      res.status(500).send({message: err});
  })
};

exports.delete = (req, res) => {
    Book.findByIdAndDelete(req.params.bookId).then(data => {
        res.send({
            message: 'Book was deleted'
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            res.status(404).send({message: 'Book was not found with provided id'});
            return;
        }
        res.status(500).send({message: err});
    })
}




