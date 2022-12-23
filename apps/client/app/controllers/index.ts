import Controller from '@ember/controller';
import { service } from '@ember/service';
import TodosService from 'client/services/todos';

export default class IndexController extends Controller {
  @service('todos') declare todos: TodosService;
}
