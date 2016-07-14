var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
require('form-serializer');

var template = require('templates/batch/edit');

module.exports = Marionette.View.extend({
    id: 'batch-edit',

    template: template,

    events: {
        'submit form': 'edit'
    },

    edit: function (e) {
        var that = this;

        e.preventDefault();

        this.model.set($(e.target).serializeObject());

        this.model.save(null, {
            success: function () {
                Backbone.history.navigate('batch/' + that.model.get('id'), true);
            },
            error: function () {
                console.log("error", arguments);
            }
        });
    }
});