import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = 'Texte par defaut';
  max = 100;

  get size(){
    return this.content.length;
  }

}
