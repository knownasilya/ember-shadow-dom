import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { macroCondition, dependencySatisfies } from '@embroider/macros';

module('Integration | Component | shadow-root', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <ShadowRoot>
        <div class='block'>template block text</div>
      </ShadowRoot>
    `);

    // Ember classic that uses template-only-glimmer-components
    // No way to check if that feature is enabled https://github.com/pzuraq/ember-compatibility-helpers/issues/27
    if (macroCondition(dependencySatisfies('ember-source', '~3.24.0'))) {
      console.log('<');
      console.log(find('div').innerHTML);
      console.log(find('div > div').innerHTML);
      assert
        .dom('.block', find('div > div').shadowRoot)
        .hasText('template block text', 'has text for <= 3.24');
    } else {
      console.log('>');
      console.log(find('div').innerHTML);
      console.log(find('div').shadowRoot);
      console.log(find('div > div').innerHTML);
      console.log(find('div > div').shadowRoot);
      assert
        .dom('.block', find('div > div').shadowRoot)
        .hasText('template block text', 'has text for > 3.24');
    }
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
