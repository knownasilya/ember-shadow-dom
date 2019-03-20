import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShadowDom extends Component {
  @tracked shadow = null;

  defaultMode = 'open';

  @action
  setupRoot(element) {
    let mode = this.args.mode || this.defaultMode;
    let shadow = element.attachShadow({ mode });

		this.shadow = shadow;
  }
}
