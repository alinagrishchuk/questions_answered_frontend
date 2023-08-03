import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class QuestionsShowController extends Controller {
  @service store;

  @action async createAnswer(body, question) {
    let answer = this.store.createRecord('answer', {
      body: body,
      question: question,
    });

    await answer.save();
  }
}
