import { Router } from 'express';
import { toJson } from '../json/lib';
import { getTodos } from './lib';

const router = Router();

router.get('/', async (req, res) => {
  const todos = await getTodos();
  const jsonTodos = toJson(todos);
  return res.json(jsonTodos);
});

export default router;
