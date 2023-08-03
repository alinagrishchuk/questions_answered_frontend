import { module, test } from 'qunit';
import { setupRenderingTest } from 'questions-answered-frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | answers/list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders answers list', async function (assert) {
    this.set('answers', [{ body: 'Body' }]);

    await render(hbs`<Answers::List @answers={{this.answers}}/>`);

    assert.dom('p').hasText('Body');
  });
});
