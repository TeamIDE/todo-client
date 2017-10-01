import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Todo from './Todo.js';
            
ReactDOM.render(<Todo
                    url='http://localhost:5000'
                    pollInterval={2000} />,
                    document.getElementById('root'));

registerServiceWorker();
