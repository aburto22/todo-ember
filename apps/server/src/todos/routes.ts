import { Router } from 'express';
import { toJson } from '../json/lib';
import { Todo } from '../types';
import { addTodo, getTodo, getTodos, updateTodo } from './lib';

const router = Router();

router.get('/', async (req, res) => {
  const todos = await getTodos();
  const jsonTodos = toJson(todos);
  return res.json(jsonTodos);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params as { id: string };
  const todo = await getTodo(id);

  if (!todo) {
    return res.status(404).end();
  }

  const jsonTodo = toJson(todo);
  return res.json(jsonTodo);
});

router.post('/', async (req, res) => {
  const { text } = req.body as { text: string };
  const id = (await import('nanoid')).nanoid();
  const newTodo: Todo = {
    id,
    text,
  };
  await addTodo(newTodo);
  return res.status(201).end();
});

router.patch('/:id', async (req, res) => {
  const { text } = req.body as { text: string };
  const { id } = req.params as { id: string };
  const updatedTodo: Todo = {
    id,
    text,
  };
  await updateTodo(updatedTodo);
  return res.status(204).end();
});

export default router;
