import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            description: '',
        }
        this.handleName = this.handleName.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this); 
    }
    
    handleName(event) {
        this.setState({name: event.target.value})
    }

    handleDesc(event) {
        this.setState({description: event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/new', {
            name: this.state.name,
            description: this.state.description
        })
        .then(function(response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return(
            <div>
                <div id="newTodo">
                    <ReactBootstrap.Grid>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col xs={6} md={4} xsOffset={4}>
                                <form onSubmit={this.handleSubmit}>
                                    <ReactBootstrap.FormGroup>
                                        <ReactBootstrap.FormControl
                                            id="name"
                                            type="text"
                                            placeholder="Create a new Todo"
                                            onChange={this.handleName}
                                        />
                                        <ReactBootstrap.FormControl
                                            id="description"
                                            type="text"
                                            placeholder="Enter a description"
                                            onChange={this.handleDesc}
                                        />
                                        <ReactBootstrap.Button type="submit">Submit</ReactBootstrap.Button>
                                    </ReactBootstrap.FormGroup>
                                </form>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Grid>
                </div>
            </div>
        ) 
    }
}        
          
export default Todo;