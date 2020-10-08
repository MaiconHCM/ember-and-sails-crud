import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  router: inject(),
  actions: {
    apagar(id) {
      this.store.findRecord('user', id, { backgroundReload: false }).then(function (a) {
        a.deleteRecord();
        a.get('isDeleted');
        a.save();
      });
    },
    editar(id) {
      this.get('router').transitionTo('editar', id);
    },
    cadastrar() {
      this.get('router').transitionTo('cadastrar');
    },
    home() {
      this.get('router').transitionTo('visualizar');
    },
    login() {
      this.get('router').transitionTo('login');
    }
  }
});
