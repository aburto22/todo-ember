import { Todo, Todos } from '../types';
import { Request } from 'express';

export const getData = <T>(req: Request): Promise<T> =>
  new Promise((resolve, reject) => {
    try {
      let rawData = '';

      req.on('data', (chunk: string) => {
        rawData += chunk;
      });

      req.on('end', () => {
        const data: T = JSON.parse(rawData);
        resolve(data);
      });

      req.on('error', (err) => {
        throw err;
      });
    } catch (err) {
      reject(err);
    }
  });

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
