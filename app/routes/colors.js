import Route from '@ember/routing/route';

export default Route.extend({
      model() {
          var url = "http://127.0.0.1:5000/colors";
          return $.getJSON(url);
      }
});
