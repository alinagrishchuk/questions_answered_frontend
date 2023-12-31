import Model, { attr, hasMany } from '@ember-data/model';

export default class QuestionModel extends Model {
  @attr title;
  @attr body;

  @hasMany('answer', { async: true, inverse: 'question' }) answers;
}
