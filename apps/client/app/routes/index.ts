import Route from '@ember/routing/route';
import TODOS from 'client/data/todos';

export default class IndexRoute extends Route {
  model(): typeof TODOS {
    return TODOS;
  }
}
