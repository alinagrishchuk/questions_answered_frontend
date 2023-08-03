import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class QuestionsShowRoute extends Route {
  @service store;
  model(params) {
    return this.store.findRecord('question', params.question_id);
  }
}
