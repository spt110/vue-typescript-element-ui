import Todo from '../models/todo';
export class TodoService
{
  
  getList():Todo[]
   {
    let todos= [
      {id: 1, task: 'First task', done: true},
      {id: 2, task: 'Second task', done: false}
    ];
    return todos;
   }
}