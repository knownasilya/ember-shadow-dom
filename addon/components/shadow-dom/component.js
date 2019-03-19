import Component, { tracked } from '@glimmer/component';
//import { tracked } from '@glimmer/tracking';
import layout from './template';

export default class ShadowDom extends Component {
  @tracked shadow = null;

  layout = layout;
  mode = 'open';

  constructor() {
    super(...arguments);
    this.setupRoot();
  }

  setupRoot() {
    let mode = this.mode;
    let element = document.createElement('div');
    let shadow = element.attachShadow({ mode });

		this.shadow = shadow;
  }
}
