import React, { Component } from 'react';

class TodoModel extends Component {
    render() {
        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3>Description: {this.props.children}</h3>
            </div>
        )
    }
}

export default TodoModel;