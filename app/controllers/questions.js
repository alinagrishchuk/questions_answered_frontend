import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class QuestionsController extends Controller {
  @service store;
  @service router;

  @action async createQuestion(title, body) {
    let question = this.store.createRecord('question', {
      title: title,
      body: body,
    });

    await question.save();

    this.router.transitionTo('questions.show', question.id);
  }
}
