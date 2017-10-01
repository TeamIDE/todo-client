import React, { Component } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.loadTodos=this.loadTodos.bind(this);
        this.handleTodoSubmit=this.handleTodoSubmit.bind(this);
    }
    loadTodos() {
        axios.get(this.props.url)
        .then(res => {
            this.setState({ data: res.data });
        });
    }
    handleTodoSubmit(todo) {
        let todos = this.state.data;
        let newTodos = todos.concat([todo]);
        this.setState({ data: newTodos });
        axios.post(this.props.url, todo)
        .catch(err => {
            console.error(err);
            this.setState({ data: todos });
        });
    }
    componentDidMount() {
        this.loadTodos();
        setInterval(this.loadTodos, this.props.pollInterval);
    }
    render() {
        return (
            <div>
                <h2>Todos</h2>
                <TodoForm handleTodoSubmit={ this.handleTodoSubmit } />
                <TodoList data={ this.state.data } />
            </div>
        )
    }
}

export default Todo;