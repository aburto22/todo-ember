import Service from '@ember/service';
import TODOS from 'client/data/todos';
import { TrackedArray } from 'tracked-built-ins';
import { Todo, Todos } from 'client/types';

export default class TodosService extends Service {
  todos: Todos = new TrackedArray(TODOS);

  add(todo: Todo): void {
    this.todos.push(todo);
  }

  remove(todo: Todo): void {
    const index = this.todos.findIndex((td) => td.id === todo.id);
    this.todos.splice(index, 1);
  }
}
