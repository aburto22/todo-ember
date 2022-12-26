import { Todo, Todos } from '../types';

export const toJson = (todos: Todos | Todo) => {
  if (Array.isArray(todos)) {
    return {
      data: todos.map((t) => ({
        type: 'todos',
        id: t.id,
        attributes: {
          ...t,
        },
      })),
    };
  }
  return {
    data: {
      type: 'todos',
      id: todos.id,
      attributes: {
        ...todos,
      },
    },
  };
};
