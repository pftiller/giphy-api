myApp.controller('SearchController', ['$http', function ($http){
    console.log('loading search controller');
    const self = this;

    self.giphySearchResponse = {}

    self.getSearchedGif = function(searchText) {
        $http.get('/giphy' + searchText).then(function(response){
            console.log(response);
            self.giphySearchResponse = response.data.data;
            console.log(self.giphySearchResponse);
    
          })
       
    }  
}]);