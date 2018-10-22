import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  tagName: '',
  mode: 'open',

  didInsertElement() {
    let element = this.el;

    if (!element) {
      let selector = this.selector;

      element = document.querySelector(selector);
    }

    let mode = this.mode;
    let shadow = element.attachShadow({ mode });

		this.set('shadow', shadow);
  }
});
