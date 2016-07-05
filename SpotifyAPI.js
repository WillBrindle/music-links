'use strict';

var fetch = require('node-fetch');


const ENTITIES = {
    ALBUM: "album",
    ARTIST: "artist",
    TRACK: "track",
    PLAYLIST: "playlist"
};

/**
 * takes in an optional token that can be used to enhance requests
 */
function SpotifyAPI (credentials) {

    function _makeRequest(uri)
    {
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
    this.search = function(term, types) {
        const typeStr = Array.isArray(types) ? types.join(",") : types;

        const uri = "search?q=" + term + "&type=" + typeStr + "&limit=50";

        return _makeRequest(uri);
    }
}

module.exports = { API: SpotifyAPI, ENTITIES };