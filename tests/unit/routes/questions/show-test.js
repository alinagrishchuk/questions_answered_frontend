import { module, test } from 'qunit';
import { setupTest } from 'questions-answered-frontend/tests/helpers';

module('Unit | Route | questions/show', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:questions/show');
    assert.ok(route);
  });
});
