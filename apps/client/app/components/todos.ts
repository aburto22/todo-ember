import Component from '@glimmer/component';
import { Todos } from 'client/types';

interface TodosSignature {
  Args: {
    todos: Todos;
  };
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class TodosComponent extends Component<TodosSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Todos: typeof TodosComponent;
  }
}
