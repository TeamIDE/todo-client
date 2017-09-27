import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo.js';
import TodoList from './TodoList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo List</h2>
        </div>
        <div>
          <Todo />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;