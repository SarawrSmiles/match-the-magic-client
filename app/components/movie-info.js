import Component from '@ember/component';

export default Component.extend({
    didInsertElement() {
        window.scrollTo(0,0);
    }
});
