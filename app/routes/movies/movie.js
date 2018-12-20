import Route from '@ember/routing/route';

export default Route.extend({
      setupController: function() {
            this._super(...arguments)
            Ember.run.next(() => {
                const scrollContainer = Ember.$('.long-list-container');
                const scrollDurationMS = 1000;

                scrollContainer.animate({
                    scrollTop: 0,
                }, scrollDurationMS);
            });

      },
      model(params) {
          var url = "http://127.0.0.1:5000/movie/" + params.movie;
          return $.getJSON(url);
      }
});
