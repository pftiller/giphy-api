myApp.controller('RandomController', ['$http', function ($http){
    console.log('loading random controller');
    const self = this;

    self.getRandomGif = function() {
        $http.get('https://api.giphy.com/v1/gifs/random?api_key=sjUegEu3KVUL9wwUJWWmUj8WeDQXbYIt').then(function(response){
            console.log(response);
             self.random = response.data.data;
            });
        }
}]); 