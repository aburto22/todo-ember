import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from 'tracked-built-ins';
import Store from '@ember-data/store';
import Router from '@ember/routing/router';

export default class CreateTodoFormComponent extends Component {
  @service declare store: Store;
  @service declare router: Router;
  @tracked text = '';

  @action
  async submit(e: SubmitEvent): Promise<void> {
    e.preventDefault();

    const newTodo = this.store.createRecord('todo', {
      text: this.text,
    });

    await newTodo.save();
    this.text = '';
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    CreateTodoForm: typeof CreateTodoFormComponent;
  }
}
