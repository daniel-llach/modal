/*global define*/
define([
    "backbone",
    "models/modal",
    "views/modalview"
], function (Backbone, Modal, ModalView) {
    "use strict";

    //The overall Grid Component
    var AppView = Backbone.View.extend({

        initialize: function(){
            this.initModal();
        },

        initModal: function(){
            this.areas = new Modal({

                areasPerPage: 3,
                areas: {

                    1 : {
                        title: "Primer título",
                        content: "El contenido de la primera área"
                    },

                    3 : {
                        title: "Tercer título",
                        content: "El contenido de la tercera área"
                    },

                    2 : {
                        title: "Segundo título",
                        content: "El contenido de la segunda área"
                    }

                }
            });

            this.modalview = new ModalView({model:this.areas});
        }

    });

    return AppView;
});
