import Controller from '@ember/controller';
import {inject} from '@ember/service';


export default Controller.extend({
  router: inject(),
  user:{
    name:'',
    password:'',
    email:'',
    message:''
  },
  actions: {
    salvar(user) {
      this.store.findRecord('user', user.id).then(function(a) {
        a.set('name', user.name)
        a.set('password', user.password);
        a.set('email', user.email);
        a.set('message', user.message);
        a.save();
      });
      this.get('router').transitionTo('');

    },
    home(){
      this.get('router').transitionTo('');
    }
  }
});
