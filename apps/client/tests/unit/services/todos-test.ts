import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';
import TodosService from 'client/services/todos';

module('Unit | Service | todos', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:todos') as TodosService;
    assert.ok(service);
  });
});
