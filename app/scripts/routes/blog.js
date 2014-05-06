/*global define*/

define([
    'jquery',
    'backbone',
    '../views/blog'
], function ($, Backbone, BlogView) {
    'use strict';

    var BlogRouter = Backbone.Router.extend({
        routes: {
        	"blog": 'runBlogView'
        },

        runBlogView: function () {
        	new BlogView();
        }

    });

    return BlogRouter;
});
