import Service from '@ember/service';
import { dProducts, dPromos } from 'ember-2022/data/datas';
import { filterBy } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class ProductServicesService extends Service {
  product = dProducts;
  promos = dPromos;

  @tracked produc;

  get activeServices() {
    return this.product.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    let func = (sum, product) => sum + product.price;
    return this.activeServices.reduce(func, 0);
  }
}
