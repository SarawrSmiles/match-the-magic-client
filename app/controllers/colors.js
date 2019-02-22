import Controller from '@ember/controller';

export default Controller.extend({
    color: "red",
    didUpdate() {
        this.color= "blue";
        debugger
    },
    colorStyle: Ember.computed('color', function() {
        var color = this.get('color');
        return new Ember.String.htmlSafe("background-color: " + color);
    }),
    actions: {
        scrollTo: function(anchor) {
            $('html, body').animate({
                scrollTop: $("#"+ anchor).offset().top - 80
            }, 50)
        },
    }
});
