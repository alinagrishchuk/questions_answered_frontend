import { module, test } from 'qunit';
import { setupRenderingTest } from 'questions-answered-frontend/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | questions/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders question details', async function (assert) {
    this.set('question', { title: 'Title', body: 'Body' });

    await render(hbs`<Questions::Details @question={{this.question}} />`);

    assert.dom('p.question-title').hasText('Title');
    assert.dom('p.question-body').hasText('Body');
  });
});
