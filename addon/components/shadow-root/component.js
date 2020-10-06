import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const isFastBoot = typeof FastBoot !== 'undefined';

export default class ShadowRoot extends Component {
  @tracked shadow;
  @tracked tagName;

  defaultMode = 'open';
  isFastBoot = isFastBoot;

  constructor() {
    super(...arguments);
    this.tagName = this.args.tagName || 'div';
  }

  @action
  setupRoot(element) {
    let mode = this.args.mode || this.defaultMode;
    let shadow = element.attachShadow({ mode });

    this.shadow = shadow;
  }
}
