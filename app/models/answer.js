import Model, { attr, belongsTo } from '@ember-data/model';

export default class AnswerModel extends Model {
  @attr('string') body;

  @belongsTo('question', { async: true, inverse: 'answers' }) question;
}
