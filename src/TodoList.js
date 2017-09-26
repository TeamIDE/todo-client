import React, { Component } from 'react';
// import * as ReactBootstrap from 'react-bootstrap';
// import axios from 'axios'
// import TodoItem from './TodoItem.js'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        }
        this.numbers = [1,2,3,4,5];
        this.listItems = this.numbers.map((number) =>
            <li>{number}</li>
        );

    }
    render() {
        return (
            <ul>{this.listItems}</ul>
        );
    }

}

export default TodoList;