const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mangoose = require('mangoose')

const connectionURL = 'mongodb+srv://sapatel9:Saurabh1995@cluster0.ncog6.mongodb.net/mongoDB?retryWrites=true&w=majority';
const database = 'mongoDB';

// MongoClient.connect(connectionURL, {useNewUrlParser: true},(error, client)=>{
//     if(error) throw error;
//     const db = client.db(database);
//     db.collection('collection2').insertMany([{
//         name: 'Shabina',
//         age: 24
//     },{
//         name: 'Shabina',
//         age: 24
//     }],(error, result)=>{
//         if(error) throw error;
//         console.log(result);
//     })
// })

const Task = mangoose.modal('Task',{

})