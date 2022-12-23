import { TrackedArray } from 'tracked-built-ins';

export type Todo = {
  id: string;
  text: string;
};

export type Todos = TrackedArray<Todo>;
