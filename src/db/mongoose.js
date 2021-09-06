const mongoose = require('mongoose');
// const validator = require('validator');

const connectionURL = 'mongodb+srv://sapatel9:Saurabh1995@cluster0.ncog6.mongodb.net/mongoDB?retryWrites=true&w=majority';
const database = 'mongoDB';

mongoose.connect(connectionURL, {
    useNewUrlParser:true
});
