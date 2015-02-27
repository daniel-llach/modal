/*global define*/
define([
    "backbone"
], function (Backbone) {
    "use strict";

    var Modal = Backbone.Model.extend({
        defaults: function () {
            return {
                areasPerPage: 1,
                areas: {

                    1 : {
                        title: "Primer título",
                        content: "El contenido de la primera área"
                    }
                }
            };
        }
    });

    return Modal;
});
