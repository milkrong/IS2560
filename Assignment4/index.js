const express  = require('express');
const app      = express();
const mongoose = require('mongoose');          
const morgan = require('morgan');         
const bodyParser = require('body-parser');
const port = process.env.PORT || 8088;

const todo = require('./api/todo');

mongoose.connect('url', { useNewUrlParser: true })
    .then(() => console.log("Connected With DB"))
    .catch(err => console.log(err));

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.use('/api/todo', todo);

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

app.listen(port, () => {
    console.log("Listening on 8088")
});

