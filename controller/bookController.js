const bookModel = require('../models/bookModel');


// handler post book
exports.createBooks = async (req, res) => {
    try {
        const { title, author } = req.body;
    
        const newBooks = new bookModel({
          title,
          author,
        });
        const saveBooks = await newBooks.save();
        res.json({
          status: "succes",
          message: "book has been added succesfully",
          data:  saveBooks
        })
      } catch (err) {
        console.log(err);
      }
}

// handler get all data
exports.getAllBook = async (req, res) => {
  try{
    const getBook = await bookModel.find();
    res.json({
      status: 'succes',
      message: "",
      books : getBook
    })
  }catch(err){
    console.log(err)
  }
};

// get book by id
exports.bookId = async(req, res) => {
  try{
    const bookId = await bookModel.findById(req.params.id);
    res.json({
      status: "succes",
      result: bookId
    })
  }catch(err){
    console.log(err)
  }
}

// handler update book
exports.updateBook = async(req, res) => {
  await bookModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if(err){
      return res.json({
        status: "error",
        message: "something was wrong"
      });
    }else{
      res.json({
        status: "succes",
        message: "updated succesfully",
        result: result
      });
    };
  });
}

// handler delete book
exports.deleteBook = async (req, res) => {
  await bookModel.findByIdAndRemove(req.params.id, (err,result) => {
    if(err){
      return res.json({
        status: "error",
        message: "something was wrong"
      });
    }else{
      res.json({
        status: "succes",
        message: "book has been delete",
        result: result
      });
    }
  })
};