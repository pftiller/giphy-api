const express = require('express');
const app = express();
var path = require('path');
require('dotenv').config();
const axios = require('axios');
const bodyParser = require('body-parser');
const giphyRouter = require('./routes/giphy.route')


let port = process.env.PORT;


app.use(bodyParser.json());

app.use(express.static('server/public'));


app.use('/giphy', giphyRouter);


app.listen(port, () => {
    console.log('Listening on port: ', port);
  });
  

