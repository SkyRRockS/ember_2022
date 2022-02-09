import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = []; //Tableau d'elements avec tous les elements de la liste
  selected = []; //Tableau des elements selectionne du tableau precedent
  id = 'id'; //id vaut id

  constructor() {
    super(...arguments);
    this.elements = this.args.elements; //Le tableau element est initialise comme le tableau passe en arguments
    this.selected = this.args.selected; //Le tableau selected aussi
    this.id = this.args.identifier || 'id'; //Id prend soit identifier soit 'id' s'il n'y en a pas
  }

  @action
  change(event) {
    let select = event.target; //Var element que l'on veut selectionne
    var selectedIds = [...select.selectedOptions].map((option) => option.value); //
    if (this.args.onChange) {
      this.args.onChange(
        this.elements.filter(
          (elm) => selectedIds.filter((e) => e == elm[this.id]).length > 0
        )
      );
    }
  }
}
