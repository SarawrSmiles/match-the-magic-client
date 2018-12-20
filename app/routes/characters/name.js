import Route from '@ember/routing/route';

export default Route.extend({
      model(params) {
          var url = "http://127.0.0.1:5000/characters/" + params.name;
          return $.getJSON(url);
      }
});
