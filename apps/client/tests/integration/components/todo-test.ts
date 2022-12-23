import { module, test } from 'qunit';
import { setupRenderingTest } from 'client/tests/helpers';
import { render, TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { Todo } from 'client/types';

interface Context extends TestContext {
  todo: Todo;
}

module('Integration | Component | todo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (this: Context) {
    this.setProperties({
      todo: { id: '1', todo: 'test todo' },
    });

    await render<Context>(hbs`<Todo @todo={{this.todo}} />`);
  });
});
