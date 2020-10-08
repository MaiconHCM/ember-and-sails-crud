import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('visualizar',{ path: '/'});
  this.route('cadastrar');
  this.route('editar', { path: '/editar/:user_id'});
  this.route('map');
});



export default Router;
