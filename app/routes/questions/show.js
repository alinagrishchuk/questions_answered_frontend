import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class QuestionsRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('question', params.question_id, {
      include: 'answers',
    });
  }
}
