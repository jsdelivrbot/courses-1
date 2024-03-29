import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <div className="Todo-App">
          <Message message="Hello there!" />
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
