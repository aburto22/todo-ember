import { Todo, Todos } from '../types';

let todos: Todos = [
  { id: '1', text: 'shopping' },
  { id: '2', text: 'washing' },
  { id: '3', text: 'cleaning' },
];

export const getTodos = async () => todos;

export const addTodo = async (todo: Todo) => {
  todos = [...todos, todo];
};

export const updateTodo = async (todo: Todo) => {
  todos = todos.map((t) => {
    if (t.id === todo.id) {
      return todo;
    }
    return t;
  });
};

export const removeTodo = async (id: string) => {
  todos = todos.filter((t) => t.id !== id);
};
