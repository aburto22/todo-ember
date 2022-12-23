import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'client/tests/helpers';

module('Acceptance | app', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /app', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
  });
});
