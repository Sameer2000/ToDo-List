// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb+srv://admin-sameer:16122000@cluster0.flijlqq.mongodb.net/todolist_db');

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'Error connecting to database'));

// up and running then, print the message
db.once('open', function() {
    console.log('Successfully Connected to database');
});

module.exports = db;