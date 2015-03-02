/*global define*/
define([
    "backbone",
    "text!templates/modal.html"
], function (Backbone, ModalTemplate) {
    "use strict";

    var ModalView = Backbone.View.extend({

        className: "modal",

        events: {
            "click .closeModal": "close",
            "click .contenedorModal": "close",
            "click #prev": "prev",
            "click #next": "next"
        },

        template: _.template(ModalTemplate),

        initialize: function(options){
            this.$container = $(options.selector);
            this.render();
            this.$container.append(this.$el);
            this.paginator();
            this.listenTo(this.model, "change:start", this.render);
        },

        render: function(){
            this.$el.html( this.template(this.model.toJSON()) );

        },

        close: function(){
            this.unbind();
            this.remove();
        },

        paginator: function(){
            this.start = 0;
            this.end = 3;
        },

        prev: function(){
            var areasPerPage = this.model.get("areasPerPage");
            var start = this.model.get("start");
            var end = this.model.get("end");

            var newStart = start - areasPerPage;
            if(newStart < 1){
                newStart = 1;
            }
            var newEnd = newStart + areasPerPage - 1;
            this.model.set({"start":newStart, "end":newEnd});

        },

        next: function(){
            var areasPerPage = this.model.get("areasPerPage");
            var start = this.model.get("start");
            var end = this.model.get("end");
            var totalAreas = Object.keys(this.model.get("areas")).length;

            var newStart = end + 1;
            if( newStart > totalAreas ){
                newStart = totalAreas;
            }
            var newEnd = newStart + areasPerPage -1 ;
            if( newEnd > totalAreas ){
                newEnd = totalAreas;
            }

            this.model.set({"start":newStart, "end":newEnd});
        }

    });

    return ModalView;
});
