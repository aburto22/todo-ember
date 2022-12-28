import { action } from '@ember/object';
import Component from '@glimmer/component';
import { Todo } from 'client/types';
import { tracked } from 'tracked-built-ins';

interface TodoSignature {
  Args: {
    todo: Todo;
  };
}

export default class TodoComponent extends Component<TodoSignature> {
  @tracked isEditing = false;
  @tracked text = this.args.todo.text;

  @action
  remove(): void {
    this.args.todo.destroyRecord();
  }

  @action
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    this.text = this.args.todo.text;
  }

  @action
  edit(e: SubmitEvent): void {
    e.preventDefault();

    this.args.todo.text = this.text;
    this.args.todo.save();

    this.text = '';
    this.toggleEdit();
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Todo: typeof TodoComponent;
  }
}
