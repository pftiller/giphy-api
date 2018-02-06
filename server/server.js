const express = require('express');
const app = express();
const axios = require('axios');
const env = require('dotenv');

env.config();
let port = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.listen(port, () => {
    console.log(`server running on ${port}`);

});