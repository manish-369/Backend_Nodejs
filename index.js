const express = require('express')

const mongoose = require('mongoose')

const app = express()

app.get("/", (req, res) => {
    res.send('hello world')
})


//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', () => console.log('Error MongoDB connection:'));
db.once('open', () => console.log('Successful MongoDB connection:'));



// User model
// const userschemma = mongoose.Schema({
//     name:{
//         type:String,
//     },
//     age:{
//         type:Number
//     }
// })

const User = mongoose.model('User',{
    name: {
        type:String,
    },
    age:{
        type:Number
    }
});

var new_user = new User({
    name: 'Suresh',
    age: 34
})

// we can define the schema inside the model it self
// we can also define the schema outside of the model
// A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc., 
// whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.



new_user.save()


app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000")
})