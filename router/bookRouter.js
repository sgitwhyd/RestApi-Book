const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');


router.get('/', (req, res) => {
    res.json({
        status: "API work"
    })
})

router.route('/add').post(bookController.createBooks);
router.route('/list').get(bookController.getAllBook);
router.route('/listbyid/:id').get(bookController.bookId);
router.route('/update/:id').put(bookController.updateBook);
router.route('/delete/:id').delete(bookController.deleteBook);


module.exports = router;