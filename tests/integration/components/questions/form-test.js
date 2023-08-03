import { module, test } from 'qunit';
import { setupRenderingTest } from 'questions-answered-frontend/tests/helpers';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | questions/form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Questions::Form />`);

    assert.dom('#question-form input').exists({ count: 1 });
    assert.dom('#question-form textarea').exists({ count: 1 });
  });

  test('it submits the form', async function (assert) {
    this.set('createQuestion', () => {
      assert.ok(true, 'createQuestion action is triggered');
    });

    await render(hbs`
      <Questions::Form
        @createQuestion={{this.createQuestion}}
      />
    `);

    await fillIn('#question-form input', 'Title');
    await fillIn('#question-form textarea', 'Body');

    await click('button[type="submit"]');

    assert.expect(1);
  });
});
