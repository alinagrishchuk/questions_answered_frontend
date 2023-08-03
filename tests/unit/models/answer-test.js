import { module, test } from 'qunit';

import { setupTest } from 'questions-answered-frontend/tests/helpers';

module('Unit | Model | answer', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('answer', {});
    assert.ok(model);
  });
});
