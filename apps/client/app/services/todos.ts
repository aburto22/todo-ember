import Service from '@ember/service';
import TODOS from 'client/data/todos';
import { Todo, Todos } from 'client/types';
import ArrayProxy from '@ember/array/proxy';

export default class TodosService extends Service {
  todos: Todos = new ArrayProxy(TODOS);

  add(todo: Todo): void {
    this.todos.pushObject(todo);
  }

  remove(todo: Todo): void {
    this.todos.removeObject(todo);
  }

  edit(todo: Todo): void {
    this.todos.removeObject(todo);
    this.todos.addObject(todo);
  }
}
