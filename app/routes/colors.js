import Route from '@ember/routing/route';

export default Route.extend({
      model() {
          var url = "https://match-the-magic-server.herokuapp.com/colors";
          return $.getJSON(url);
      }
});
