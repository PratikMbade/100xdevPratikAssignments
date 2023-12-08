/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }

  add(todo) {
    this.todo.push(todo);
  }

  remove(indexOfTodo) {
    this.todo = this.todo.filter((item) => item != this.todo[indexOfTodo]);
  }

  update(index, updatedTodo) {
    if (index > this.todo.length - 1) {
      return;
    } else {
      this.todo.splice(index, 1, updatedTodo);
    }
  }

  get(indexOfTodo) {
    if(indexOfTodo > this.todo.length-1) {
      return null;
     }else{
      return this.todo[indexOfTodo];
  }
  }

  getAll() {
    return this.todo;
  }

  clear() {
    return (this.todo = []);
  }
}

module.exports = Todo;
