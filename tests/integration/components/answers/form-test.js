import { module, test } from 'qunit';
import { setupRenderingTest } from 'questions-answered-frontend/tests/helpers';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | answers/form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Answers::Form />`);

    assert.dom('#answer-form textarea').exists({ count: 1 });
  });

  test('it submits the form', async function (assert) {
    this.set('createAnswer', () => {
      assert.ok(true, 'createQuestion action is triggered');
    });

    await render(hbs`
      <Answers::Form
        @createAnswer={{this.createAnswer}}
      />
    `);

    await fillIn('#answer-form textarea', 'Body');
    await click('button[type="submit"]');

    assert.expect(1);
  });
});
