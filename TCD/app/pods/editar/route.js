import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';



export default Route.extend(AuthenticatedRouteMixin,{

  model(params) {
    return hash({
      user: this.store.findRecord('user', params.user_id),
      id:params.user_id
    });
  },

  actions: {
  }

});
  