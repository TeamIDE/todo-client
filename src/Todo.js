import React, { Component } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';
import TodoFilterForm from './TodoFilterForm';
import './style.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.loadTodos=this.loadTodos.bind(this);
        this.handleTodoSubmit=this.handleTodoSubmit.bind(this);
        this.handleFilterSubmit=this.handleFilterSubmit.bind(this);
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
    handleFilterSubmit(filterObj) {
        console.log('Filter Text: ' + filterObj['name']);
        axios.get(this.props.url + '/filter', {
            params: {
                name: filterObj['name']
            }
        })
        .then(res => {
            console.log(res.data);
            this.setState({ data: res.data });
        })
        .catch(err => {
            console.error(err);
        });
    }
    componentDidMount() {
        this.loadTodos();
 //       setInterval(this.loadTodos, this.props.pollInterval);
    }
    render() {
        return (
            <div className='container'>
                <div>
                    <h2>Todos</h2>
                    <TodoForm handleTodoSubmit={ this.handleTodoSubmit } />
                    <TodoFilterForm handleFilterSubmit={ this.handleFilterSubmit } />
                    <TodoList data={ this.state.data } />
                </div>
            </div>
        )
    }
}

export default Todo;