'use strict';

var fetch = require('node-fetch');


/**
 * takes in an optional token that can be used to enhance requests
 */
function SpotifyAPI (credentials) {

    function _makeRequest(uri) {
        const baseUrl = "https://api.spotify.com/v1/";
        let url = baseUrl + uri;

        return fetch(url).then(res => res.json());
    }

    /**
     * Search spotify for certain terms
     * @param {string} term     The search query
     * @param {string[]} types  The types of entities to search. Can be either an array or just a single string
     * 
     * @returns {promise}   A promise containing the json returned from the request
     */ 
    this.search = function(artist, track) {
        const term = track + "%20artist:" + artist;

        const uri = "search?q=" + term + "&type=track&limit=5";

        var prom = new Promise(function (resolve, reject) {
                _makeRequest(uri).then(resp => {
                    var found = false;

                    resp.tracks.items.forEach(item => { 
                            if (item.name.toLowerCase() === track.toLowerCase()) {
                                var artistFound = false;

                                item.artists.forEach(artistObj => {
                                        if (artistObj.name.toLowerCase() === artist.toLowerCase())
                                            artistFound = true;
                                    });

                                if (artistFound) {
                                    resolve(item.external_urls.spotify);
                                    found = true;
                                }
                            }
                        });

                    reject(false);
                });

            });
        
        return prom;
    }
}

module.exports = SpotifyAPI;