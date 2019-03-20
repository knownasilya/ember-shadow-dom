import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | shadow-dom', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <ShadowDom>
        <div class='block'>template block text</div>
      </ShadowDom>
    `);

    assert.dom('.block', find('div').shadowRoot).hasText('template block text');
  });

  test('it can be closed', async function(assert) {
    await render(hbs`
      <ShadowDom id='internal' @mode='closed'>
        <div class='block'>template block text</div>
      </ShadowDom>
    `);

    assert.dom('.block', find('#internal').shadowRoot).doesNotExist();
  });

  // test('it can have a different tag name', async function(assert) {
  //   await render(hbs`
  //     <ShadowDom @tagName='span'>
  //       <div class='block'>template block text</div>
  //     </ShadowDom>
  //   `);

  //   assert.dom('.block', find('span').shadowRoot).hasText('template block text');
  // });
});