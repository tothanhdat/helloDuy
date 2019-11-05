const express = require('express');
const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('hello');
}) 

app.listen(3000)