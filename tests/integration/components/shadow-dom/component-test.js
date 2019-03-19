import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | shadow-dom', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <ShadowDom id='internal'>
        <div class='block'>template block text</div>
      </ShadowDom>
    `);

    assert.dom('.block', find('#internal').shadowRoot).hasText('template block text');
  });
});
