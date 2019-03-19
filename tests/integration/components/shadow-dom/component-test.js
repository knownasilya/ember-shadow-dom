import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | shadow-dom', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <div id='internal'></div>
      <ShadowDom @selector='#internal'>
        template block text
      </ShadowDom>
    `);

    assert.equal(find('#internal').shadowRoot.textContent.trim(), 'template block text');
  });
});
