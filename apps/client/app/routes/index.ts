import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Store from '@ember-data/store';
import ArrayProxy from '@ember/array/proxy';
import TodoModel from 'client/models/todo';

export default class IndexRoute extends Route {
  @service declare store: Store;

  model(): ArrayProxy<TodoModel> {
    return this.store.query('todo', {});
  }
}
