const express = require('express');
const router = express.Router();
const axios = require('axios');

const config = { 
    params: {api_key: process.env.GIPHY_KEY}
}

router.get('/', (req, res) => {
 

    axios.get('https://api.giphy.com/v1/gifs/random', config)
        .then(response =>{
            console.log('get random gif response: ', response)
            res.send(response.data)
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
          })
        });

    
//  getSearchedGif = function() {
//         console.log('searching');
//         axios.get('https://api.giphy.com/v1/gifs/search?', config)
//         .then(function(response) { 
//         self.search.result = response.data.data;
//         console.log('these are the results', self.search.result);
//         })
//      }


module.exports = router;