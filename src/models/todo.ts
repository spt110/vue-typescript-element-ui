/**
 * Created by championswimmer on 02/07/17.
 */
export default class Todo {
  id: number
  task: string
  done: boolean


  constructor(id: number, task: string, done: boolean) {
    this.id = id
    this.task = task
    this.done = done
  }
}
