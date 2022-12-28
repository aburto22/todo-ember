import { Router } from 'express';
import { getData, toJson } from '../json/lib';
import { JSONData, Todo } from '../types';
import { addTodo, getTodo, getTodos, updateTodo, removeTodo } from './lib';
import { nanoid } from 'nanoid';

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
  const data = await getData<JSONData>(req);
  const { text } = data.data.attributes;

  if (!text) {
    return res.status(500).end();
  }

  const newTodo: Todo = {
    id: nanoid(),
    text,
  };
  await addTodo(newTodo);

  const jsonTodo = toJson(newTodo);
  return res.status(201).json(jsonTodo);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params as { id: string };
  const data = await getData<JSONData>(req);

  const { text } = data.data.attributes;

  if (!text) {
    return res.status(400).end();
  }

  const updatedTodo: Todo = {
    id,
    text,
  };

  await updateTodo(updatedTodo);
  return res.status(204).end();
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params as { id: string };
  await removeTodo(id);
  return res.status(204).end();
});

export default router;
