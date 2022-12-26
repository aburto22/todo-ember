import { Todo, Todos } from '../types';

export const toJson = (todos: Todos | Todo) => {
  if (Array.isArray(todos)) {
    return {
      data: todos.map((t) => ({
        type: 'todo',
        id: t.id,
        attributes: {
          ...t,
        },
      })),
    };
  }
  return {
    data: {
      type: 'todo',
      id: todos.id,
      attributes: {
        ...todos,
      },
    },
  };
};
