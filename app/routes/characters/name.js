import Route from '@ember/routing/route';

export default Route.extend({
      model(params) {
          var url = "https://match-the-magic-server.herokuapp.com/characters/" + params.name;
          return $.getJSON(url);
      }
});
