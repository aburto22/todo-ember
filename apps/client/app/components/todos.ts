import Component from '@glimmer/component';
import TODOS from 'client/data/todos';

interface TodosSignature {
  Args: {
    todos: typeof TODOS;
  };
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class TodosComponent extends Component<TodosSignature> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Todos: typeof TodosComponent;
  }
}
