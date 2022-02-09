import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params /*, hash*/) {
  const [items, value, prop] = params; //Definie les const items value et prop a partir des param de la fonction
  let id = prop || 'id'; // Id vaut prop s'il n'est pas null sinon id vaut 'id'
  return items.filterBy(id, value).length > 0; //Retourne les elements d'items qui ont un id et une valeur qui ont une taille > 0
});
