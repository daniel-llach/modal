/*global define*/
define([
    "backbone",
    "models/modal",
    "views/modalview"
], function (Backbone, Modal, ModalView) {
    "use strict";

    //The overall Grid Component
    var AppView = Backbone.View.extend({

        el: "body",

        events: {
            "click .ejemplo": "openModal"
        },

        initialize: function(){
            this.initModal();
        },

        initModal: function(){

            this.areas = new Modal({

                areasPerPage: 3,
                start: 4,
                end: 6,
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
                    },

                    5 : {
                        title: "Quinto título",
                        content: "El contenido de la quinta área"
                    },

                    4 : {
                        title: "Cuarto título",
                        content: "El contenido de la cuarta área"
                    },

                    6 : {
                        title: "Sexto título",
                        content: "El contenido de la sexta área"
                    },

                    7 : {
                        title: "Séptimo título",
                        content: "El contenido de la septima área"
                    }

                }
            });

        },

        openModal: function(){
            // console.log('modal');
            this.modalview = new ModalView({model:this.areas});
        }

    });

    return AppView;
});
