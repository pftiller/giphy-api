myApp.controller('RandomController', ['GiphyService', function (GiphyService){
    console.log('loading random controller');
    const self = this;

    // connection to service variable
    self.random = GiphyService.random;

    self.getRandomGif = function() {
        GiphyService.getRandomGif();
    }
}]); 