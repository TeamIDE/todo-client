import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios'

class Todo extends Component {
    constructor() {
        super();
        this.state={
            name: '',
            description: '',
        }
        this.onSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var payload = {
            name: 'test!',
            description: 'test!'
        };
        var data = new FormData();
        data.append('json', JSON.stringify(payload));
        axios.post('http://localhost:5000/new', {
            name: 'This is a name',
            description: 'This is a desc'
        })
        .then(function(response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return(
            <ReactBootstrap.Grid>
                <ReactBootstrap.Row>
                    <ReactBootstrap.Col xs={6} md={4} xsOffset={4}>
                        <form onSubmit={this.onSubmit}>
                            <ReactBootstrap.FormControl
                                id="name"
                                type="text"
                                placeholder="Create a new Todo"
                                onChange = {(event, newValue)=>this.setState({name:newValue})}
                            />
                            <ReactBootstrap.FormControl
                                id="description"
                                type="text"
                                placeholder="Enter a description"
                                onChange = {(event, newValue)=>this.setState({description:newValue})}
                            />
                            <ReactBootstrap.Button type="submit">
                                Submit
                            </ReactBootstrap.Button>
                        </form>
                    </ReactBootstrap.Col>
                </ReactBootstrap.Row>
            </ReactBootstrap.Grid>
        ) 
    }
}        
          
export default Todo;
          