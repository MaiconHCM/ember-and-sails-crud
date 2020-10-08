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
    cadastrar(user) {
      console.log(this.store);
      this.store.createRecord('user', user).save();
      this.get('router').transitionTo('');
    },
    home(){
      this.get('router').transitionTo('');
    }
  }
});
