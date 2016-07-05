var SpotifyAPI = require('./SpotifyAPI').API;
var SpotifyEntities = require('./SpotifyAPI').ENTITIES;


var spotify = new SpotifyAPI();

spotify.search("hello world", SpotifyEntities.TRACK)
    .then(json => console.log(json));

setTimeout(function (){ console.log("Finished"); }, 5000);