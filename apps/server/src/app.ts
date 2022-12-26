import express from 'express';
import todosRouter from './todos/routes';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/todos', todosRouter);

export default app;
