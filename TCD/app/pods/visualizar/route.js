import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Route.extend(AuthenticatedRouteMixin,{
  model() {
    return hash({
      list:this.store.findAll('user')
    });
  },

  actions: {
  }

});
  