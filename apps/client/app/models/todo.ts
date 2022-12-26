import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  @attr declare text: string;
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    todo: TodoModel;
  }
}
