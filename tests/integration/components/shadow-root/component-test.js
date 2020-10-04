import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | shadow-root', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <ShadowRoot>
        <div class='block'>template block text</div>
      </ShadowRoot>
    `);

    assert
      .dom('.block', find('.ember-view > div').shadowRoot)
      .hasText('template block text');
  });

  test('it can be closed', async function (assert) {
    await render(hbs`
      <ShadowRoot id='internal' @mode='closed'>
        <div class='block'>template block text</div>
      </ShadowRoot>
    `);

    assert.dom('.block', find('#internal').shadowRoot).doesNotExist();
  });

  test('it can have a different tag name', async function (assert) {
    await render(hbs`
      <ShadowRoot @tagName='span'>
        <div class='block'>template block text</div>
      </ShadowRoot>
    `);

    assert
      .dom('.block', find('span').shadowRoot)
      .hasText('template block text');
  });
});
