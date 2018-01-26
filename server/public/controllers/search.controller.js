myApp.controller('SearchController', ['GiphyService', function (GiphyService){
    console.log('loading search controller');
    const self = this;
   
    self.search = GiphyService.search;
    self.getSearchedGif = function(searchText) {
        GiphyService.getSearchedGif(searchText);
    }  
}]);