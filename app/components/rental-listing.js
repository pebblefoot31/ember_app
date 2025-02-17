import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  @tracked
  isWide = false;

  @action toggleSize() {
    this.isWide = !this.isWide;
  }
}
