import React, { Component } from 'react';
import TodoModel from './TodoModel.js';

class TodoList extends Component {
    render() {
        let todoNodes = this.props.data.map(todo => {
            return (
                <TodoModel name={ todo.name }>
                    { todo.description }
                </TodoModel>
            )
        })
        return (
            <div>
                { todoNodes }
            </div>
        )
    }
}

export default TodoList;