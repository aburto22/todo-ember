import Route from '@ember/routing/route';
import TodoModel from 'client/models/todo';
import IndexRoute from 'client/routes';

export type Resolved<P> = P extends Promise<infer T> ? T : P;

export type ModelFrom<R extends Route> = Resolved<ReturnType<R['model']>>;

export type Todos = ModelFrom<IndexRoute>;

export type Todo = TodoModel;
