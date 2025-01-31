import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'


class App extends Component {
  state = {
    todos: [
      {id: 0, content: 'buy some milk'},
      {id: 1, content: 'play mario kart'}
    ]
  }
  addTodo = (todo) => {
    todo.id = this.state.todos.length;
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  deleteTodo = (id) =>
  {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos //todos: todos -> cause key and value have the same name
    })
  }
  render() {
    return (
      <div className="todos container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
