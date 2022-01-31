import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';

export default class Ex1Controller extends Controller {
  @tracked content = 'Texte par defaut';
  @tracked info = '';
  statut = "Non modifié";
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

  get modif(){
    if(!this.content){
      return 'Zone de texte vide';
    }
    if(this.content == "Texte par defaut"){
      return 'Non modifié'
    }
    if(this.size > 0 ){
      return 'Note modifiée';
    }
    return 'Vous avez attein le maximum de caractères';
  }

  @action
  test(){
    if(this.content)
    this.content = '';
  }

}
