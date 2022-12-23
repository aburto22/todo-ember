import Service from '@ember/service';
import TODOS from 'client/data/todos';
import { TrackedArray } from 'tracked-built-ins';
import { Todo, Todos } from 'client/types';

export default class TodosService extends Service {
  todos: Todos = new TrackedArray(TODOS);

  add(todo: Todo): void {
    this.todos.pushObject(todo);
  }

  remove(todo: Todo): void {
    this.todos.removeObject(todo);
  }
}
