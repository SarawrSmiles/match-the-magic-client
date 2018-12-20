import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('colors');

  this.route('characters', function() {
    this.route('name', { path: '/:name' });
  });
  this.route('movies', function() {
    this.route('movie', { path: '/:movie' });
  });
  this.route('welcome', { path: '/'});
  this.route('start-here');
});

export default Router;
