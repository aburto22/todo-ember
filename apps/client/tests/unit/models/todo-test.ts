import { module, skip } from 'qunit';
import Store from '@ember-data/store';

import { setupTest } from 'client/tests/helpers';

module('Unit | Model | todo', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  skip('it exists', function (assert) {
    const store = this.owner.lookup('service:store') as Store;
    const model = store.createRecord('todo', {
      text: 'testTodo',
    });
    assert.ok(model);
  });
});
