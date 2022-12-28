import express from 'express';
import todosRouter from './todos/routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/todos', todosRouter);

export default app;
