/*global define*/
define([
    "backbone",
    "text!templates/modal.html"
], function (Backbone, ModalTemplate) {
    "use strict";

    var ModalView = Backbone.View.extend({

        el : "body",

        template: _.template(ModalTemplate),

        initialize: function(){
            // this.$el = $(this.model.get("target"));
            // this.listenTo(this.model, "change:loaded", this.update);
            this.render();
            // this.listenTo(this.model, "bar:ready", this.die);
        },

        render: function(){
            this.$el.append( this.template(this.model.toJSON()) );
        }

    });

    return ModalView;
});
