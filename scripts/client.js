console.log('JS Sourced');

const giphyApp = angular.module('giphyApp', []);
self.searchresults = [

]

giphyApp.controller('GiphyController', ['$http', '$scope', function($http, $scope4){
    console.log('loading');
    const self = this;

 self.getRandomGif = function() {
    $http.get('https://api.giphy.com/v1/gifs/random?api_key=sjUegEu3KVUL9wwUJWWmUj8WeDQXbYIt').then(function(response){
        console.log(response);
         self.random = response.data.data;
    })


    }
    self.getSearchedGif = function(searchText) {
        let randomNum = Math.floor(Math.random()*25)
        console.log(randomNum);
        console.log(searchText);
        $http.get('https://api.giphy.com/v1/gifs/search?api_key=sjUegEu3KVUL9wwUJWWmUj8WeDQXbYIt&q=' + searchText).then(function(response) {
        self.searchimage = response.data.data[randomNum].images.original.url;
        console.log(self.searchimage);
        })
        }
}]);