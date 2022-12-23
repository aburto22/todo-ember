import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import TodosService from 'client/services/todos';
import { Todo } from 'client/types';
import { nanoid } from 'nanoid';
import { tracked } from 'tracked-built-ins';

export default class CreateTodoFormComponent extends Component {
  @service declare todos: TodosService;
  @tracked text = '';

  @action
  submit(e: SubmitEvent): void {
    e.preventDefault();
    const newTodo: Todo = {
      id: nanoid(),
      text: this.text,
    };
    this.todos.add(newTodo);
    this.text = '';
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    CreateTodoForm: typeof CreateTodoFormComponent;
  }
}
