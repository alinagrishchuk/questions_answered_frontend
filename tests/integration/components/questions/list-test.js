import { module, test } from 'qunit';
import { setupRenderingTest } from 'questions-answered-frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | questions/list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('questions', [{ title: 'Title', body: 'Body' }]);

    await render(hbs`<Questions::List @questions={{this.questions}} />`);

    assert.dom('a').hasText('Title Body');
  });
});
