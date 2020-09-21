// deklarasi varibale
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./router/bookRouter');
const cors = require('cors');
const dotenv = require('dotenv').config({path: './.env'});

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());
app.use('/api', apiRouter);


app.get('/', (req, res) => {
    res.send("hello world")
})

// setup server
app.listen(process.env.PORT  || 8000,  () => {
    console.log(`server start on http://localhost:${process.env.PORT}`);
})

// koneksi database

mongoose.connect(process.env.url, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify: false
}).then(() => {
    console.log("success connected to database")
}).catch((err) => {
    console.log(err)
});