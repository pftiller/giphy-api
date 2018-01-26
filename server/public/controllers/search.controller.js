myApp.controller('SearchController', ['$http', function ($http){
    console.log('loading search controller');
    const self = this;
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