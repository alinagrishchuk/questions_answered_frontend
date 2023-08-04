import { module, test } from 'qunit';
import { setupTest } from 'questions-answered-frontend/tests/helpers';

module('Unit | Controller | questions', function (hooks) {
  setupTest(hooks);

  test('it creates a new question before transitions to the show route', async function (assert) {
    assert.expect(4);
    let controller = this.owner.lookup('controller:questions');
    let store = this.owner.lookup('service:store');
    let router = this.owner.lookup('service:router');

    router.transitionTo = (route, id) => {
      assert.strictEqual(
        route,
        'questions.show',
        'transition to the questions.show route'
      );
      assert.strictEqual(id, '1', 'transition with the correct id');
    };

    store.createRecord = (modelName, recordData) => {
      assert.strictEqual(modelName, 'question', 'correct model name');
      assert.deepEqual(
        recordData,
        { title: 'Test Title', body: 'Test Body' },
        'correct question data'
      );
      return { id: '1', save: async () => {} };
    };

    await controller.createQuestion('Test Title', 'Test Body');
  });
});
