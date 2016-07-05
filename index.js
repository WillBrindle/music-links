var SpotifyAPI = require('./SpotifyAPI');


var spotify = new SpotifyAPI();

spotify.search("The Smith Street Band", "Sigourney Weaver")
    .then(resp => {
        console.log(resp);
    });

setTimeout(function (){ console.log("Finished"); }, 15000);