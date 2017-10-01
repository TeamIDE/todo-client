import React, { Component } from 'react';
import './style.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleDescriptionChange(event) {
        this.setState({ description: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        let name = this.state.name.trim();
        let description = this.state.description.trim();
        if (!name || !description) {
            alert('Both fields are required');
            return;
        }
        this.props.handleTodoSubmit({ name: name, description: description});
        this.setState({ name: '', description: '' });
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <input
                        type='text'
                        placeholder='Name...'
                        value={ this.state.name }
                        onChange={ this.handleNameChange }
                    />
                </div>
                <div>
                    <input
                        type='description'
                        placeholder='Description...'
                        value={ this.state.description}
                        onChange={ this.handleDescriptionChange }
                    />
                </div>
                <input
                    type='submit'
                    value='Create'
                    className='submit'
                />
            </form>
        )
    }
}

export default TodoForm;