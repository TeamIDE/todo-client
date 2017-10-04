import React, { Component } from 'react';
import './style.css'

class TodoFilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleFilterChange(event) {
        this.setState({ filterText: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        let filter = this.state.filterText.trim();
        this.props.handleFilterSubmit({ name: filter })
        this.setState({ filterText: '' })
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <input
                        type='text'
                        placeholder='filter'
                        value={ this.state.filterText }
                        onChange={ this.handleFilterChange }
                    />
                    <input
                        type='submit'
                        value='Filter'
                    />
                </div>
            </form>
        )
    }
}

export default TodoFilterForm;