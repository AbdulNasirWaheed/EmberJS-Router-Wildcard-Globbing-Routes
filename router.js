import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('nestedroute', function() {
    this.route('fruits');
  });
  this.route('blog-post', { path: '/blog-post/:username'});
   //definig the routes
   this.route('dynamic-segment', { path: '/dynamic-segment/:myId', 
      resetNamespace: true }, function() {
      this.route('dynamic-segment1', { path: '/dynamic-segment1/:myId1', 
         resetNamespace: true }, function() {
         this.route('item', { path: '/item/:itemId' });
      });
   });
});

export default Router;
