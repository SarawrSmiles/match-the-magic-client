import Mixin from '@ember/object/mixin';

App.ScrollToMixin = Ember.Mixin.create({
    scrollDuration : 2000, //default
    scrollTo : function(selector){
        $('html, body').animate({
            scrollTop: $(selector).offset().top
        }, this.get("scrollDuration")
    )
    }
})
