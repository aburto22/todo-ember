export type Todo = {
  id: string;
  text: string;
};

export type Todos = Todo[];

export type JSONData = {
  id: string;
  data: {
    attributes: Partial<Todo>;
  };
  type: string;
};
