myApp.controller('RandomController', ['$http', function ($http){
    console.log('loading random controller');
    const self = this;

    self.giphyResponse = {}
    self.getRandomGif =function() {
    $http.get('/giphy').then(function(response){
      console.log(response);
      self.giphyResponse = response.data.data;
      console.log(self.giphyResponse);
    
    })
}

}]); 