import React, { Component } from 'react';
// import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios'
// import TodoItem from './TodoItem.js'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }
    }

    componentWillMount() {
        axios.get('http://localhost:5000/')
        .then((response) => {
            this.setState({
                todoList: response.data.items
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <h1>This is a test</h1>
        );
    }

}

export default TodoList;