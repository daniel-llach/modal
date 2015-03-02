/*global define*/
define([
    "backbone"
], function (Backbone) {
    "use strict";

    var Modal = Backbone.Model.extend({
        defaults: function () {
            return {
                areasPerPage: 3,
                start: 1,
                end: 3,
                titles: [""],
                areas: {

                    1 : {
                        title: "Primer título",
                        content: "El contenido de la primera área"
                    },

                    2 : {
                        title: "Segundo título",
                        content: "El contenido de la segundo área"
                    },

                    3 : {
                        title: "Tercer título",
                        content: "El contenido de la tercera área"
                    }
                }
            };
        },

        initialize: function(){
        }
    });

    return Modal;
});
