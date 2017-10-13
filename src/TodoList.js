import React, { Component } from 'react';
import TodoModel from './TodoModel.js';

class TodoList extends Component {
    render() {
        var todoNodes;
        console.log(this.props.data);
        if (this.props.data) {
            todoNodes = this.props.data.map(todo => {
                return (
                    <TodoModel name={ todo.name }>
                        { todo.description }
                    </TodoModel>
                )
            });
        } else {
            todoNodes = null;
        }
        return (
            <div>
                { todoNodes }
            </div>
        )
    }
}

export default TodoList;