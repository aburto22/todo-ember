import { module, test } from 'qunit';
import { setupRenderingTest } from 'client/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | todos', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const todos = [{ id: 1, text: 'Shop' }];

    await render(hbs`<Todos @todos={{todos}} />`);
  });
});
