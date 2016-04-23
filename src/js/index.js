/*jslint browser: true*/

var releases = require('../data/releases.json'),
    artists = require('../data/artists.json'),
    templates = require('./modules/templates'),
    _ = require('lodash');

//debug
window.templates = templates;
window.artists = artists;
window.releases = releases;
window._ = _;
// Sort Releases by Date and then Cat_ID newest to oldests
releases = _.orderBy(releases, ['date', 'cat_id'], ['desc','desc']);

var el = document.getElementById('main');


var routes = (function() {
    return {
	index: function() {
	    
	    var html = templates.releases(releases);
	    el.innerHTML = html;
	},

	artists: function(artist) {
	    artist = _.find(artists, function(e) {
		return _.kebabCase(e.name) === artist;
	    });
	    if(!artist) {
		routes._404();
		return;
	    }
	    if(!artist.hasOwnProperty('releases')) {
		artist.releases = _.filter(releases, { "artist": artist.name });
	    }
	    el.innerHTML = templates.artist(artist);
	    return;
	},
	releases: function(release) {
	    release = _.find(releases, function(e) {
		return _.kebabCase(e.title) === release;
	    });
	    if(!release) {
		routes._404();
		return;
	    }
	    el.innerHTML = templates.release(release);
	    return;
	},
	_404: function() {
	    el.innerHTML = templates._404({ url: document.location.toString() });
	    return;
	}
    };
}());



var matchRoute = function() {
    var hash = document.location.hash;
    if(hash === "") {
	routes.index();
	return;
    }
    
    var match = hash.match(/#!\/([^\/]+)\/([^\/]+)/i);
    
    if(!match) {
	routes._404();
	return;
    }
    match.shift(); //Drop first element;
    var route = match.shift();
    
    if(!routes.hasOwnProperty(route)) {
	routes._404();
	return;
    }
    routes[route].apply(null, match);
    return;
    
};

window.onhashchange = matchRoute;

(function _init_() {
    matchRoute();
    
}());

