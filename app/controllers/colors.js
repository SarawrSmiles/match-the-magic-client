import Controller from '@ember/controller';

export default Controller.extend({
    init() { 
        console.log("test");
        this._super();
        window.scrollTo(0,0);
    },
    actions: {
        scrollTo: function(anchor) {
            $('html, body').animate({
                scrollTop: $("#"+ anchor).offset().top - 80
            }, 50)
        },
    }
});
