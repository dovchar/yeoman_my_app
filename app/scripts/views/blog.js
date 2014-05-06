/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BlogView = Backbone.View.extend({
        template: JST['app/scripts/templates/blog.ejs'],

        tagName: 'div',

        id: 'yield',

        className: '',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            // this.$el.html(this.template(this.model.toJSON()));
            console.log(this.$el)
            console.log(this.template())
            this.$el.html(this.template());

            return this;
        }
    });

    return BlogView;
});
