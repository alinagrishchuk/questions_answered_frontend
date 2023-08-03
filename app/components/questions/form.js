import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class QuestionsFormComponent extends Component {
  @tracked title = '';
  @tracked body = '';

  @action async submit(event) {
    event.preventDefault();

    this.args.createQuestion(this.title, this.body);

    this.title = '';
    this.body = '';
  }
}
