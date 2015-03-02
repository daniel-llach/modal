/*global define*/
define([
    "backbone",
    "text!templates/modal.html"
], function (Backbone, ModalTemplate) {
    "use strict";

    var ModalView = Backbone.View.extend({

        el : "body",

        events: {
            "click .closeModal": "close",
            "click #prev": "prev",
            "click #next": "next"
        },

        template: _.template(ModalTemplate),

        initialize: function(){
            // this.$el = $(this.model.get("target"));
            // this.listenTo(this.model, "change:loaded", this.update);
            this.render();
            this.paginator();
            this.listenTo(this.model, "change:start", this.render);
        },

        render: function(){
            $('.modal').remove();
            this.$el.append( this.template(this.model.toJSON()) );
        },

        close: function(){
            $('.modal').remove();
        },

        paginator: function(){
            this.start = 0;
            this.end = 3;
            console.log("view: ", this.end);
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
            console.log(start, end);
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
            console.log(start, end);
        }

    });

    return ModalView;
});
