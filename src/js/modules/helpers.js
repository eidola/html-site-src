/*jslint browser:true*/
/*global module*/
var handlebars = require('handlebars/runtime'),
    _ = require('lodash'),
    markdown = require('markdown').markdown;



handlebars.registerHelper('kebabCase', function(str) {
    return _.kebabCase(str);
});

handlebars.registerHelper('markdown', function(str) {
    return markdown.toHTML(str);
});

module.exports = handlebars;
