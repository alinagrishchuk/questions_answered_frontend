import { module, test } from 'qunit';
import { setupTest } from 'questions-answered-frontend/tests/helpers';

module('Unit | Controller | questions/show', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:questions/show');
    assert.ok(controller);
  });
});
