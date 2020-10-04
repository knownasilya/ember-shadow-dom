import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import layout from './template';

export default class Mine extends Component {
  layout = layout;

  @tracked wasClicked = false;

  @action
  clicked() {
    this.wasClicked = true;
  }
}
