/*global define*/
define([
    "backbone"
], function (Backbone) {
    "use strict";

    var Modal = Backbone.Model.extend({
        defaults: function () {
            return {
                areasPerPage: 3,
                start: 0,
                end: 3,
                areas: {

                    1 : {
                        title: "Primer título",
                        content: "El contenido de la primera área"
                    }
                }
            };
        },

        initialize: function(){
            this.paginator();
        },

        paginator: function(){
            this.start = 0;
            this.end = this.get("areasPerPage");
            this.totalPage = Object.keys(this.get("areas")).length / this.end;
        }
    });

    return Modal;
});
