import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AnswersFormComponent extends Component {
  @service store;
  @tracked body = '';

  @action
  async submit(event) {
    event.preventDefault();

    this.args.createAnswer(this.body, this.args.question);

    this.body = '';
  }
}
