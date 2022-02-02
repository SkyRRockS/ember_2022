import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class Ex2Route extends Route {
  @service productServices;

  model() {
    return this.productServices;
  }

  @action
  toggleActive(service) {
    if (service.active) {
      service.active = false;
    } else {
      service.active = true;
    }
  }
}
