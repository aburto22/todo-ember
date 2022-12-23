import { module, test } from 'qunit';
import { setupRenderingTest } from 'client/tests/helpers';
import { render, TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { Todos } from 'client/types';

interface Context extends TestContext {
  todos: Todos;
}

module('Integration | Component | todos', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (this: Context) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.setProperties({
      todos: [{ id: 1, text: 'Shop' }],
    });

    await render<Context>(hbs`<Todos @todos={{this.todos}} />`);
  });
});
