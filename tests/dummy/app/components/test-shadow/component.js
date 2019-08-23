import Component from '@ember/component';
import { action } from '@ember/object';
import layout from './template';

export default class Mine extends Component {
  layout = layout;

  @action
  clicked() {
    this.set('wasClicked', true);
  }
}
