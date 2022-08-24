const express = require('express');
const app = express();

const db = require('./config/mongoose');
const Task = require('./models/task');

// View engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Body parser
app.use(express.urlencoded());

app.use(express.static('./assets'));

// Using express router
app.use('/', require('./routes'));

let port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}

// To run the server
app.listen(port, function(err) {
    if(err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log('Server is up & running');
})