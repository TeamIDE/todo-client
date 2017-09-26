import { Component } from 'react';
// import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            description: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/')
        .then((response) => {
            console.log('Data was successfully retrieved');
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export default TodoItem;