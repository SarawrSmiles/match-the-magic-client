import Controller from '@ember/controller';

export default Controller.extend({
    init() { 
        console.log("test");
        this._super();
        window.scrollTo(0,0);
    },
    actions: {
        scrollTo: function(anchor) {
         alert("i am clicked");
         location.hash = '#' + anchor;
         //   setTimeout(window.scrollTo(100,100),100);
         //   $('html, body').animate({
         //       scrollTop: $("#"+ anchor).offset().top - 80
         //   }, 50)
        },
    }
});
