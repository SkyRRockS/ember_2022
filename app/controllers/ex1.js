import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';

export default class Ex1Controller extends Controller {
  @tracked content = 'Texte par defaut';
  @tracked info = '';
  max = 100;

  get size(){
    return this.max - this.content.length;
  }

  get style(){
    if(this.size < 20){
      return 'danger';
    }
    if(this.size < 50){
      return 'warning';
    }
      return 'info';
  }



  @action
  test(){
    this.content = '';
  }

}
