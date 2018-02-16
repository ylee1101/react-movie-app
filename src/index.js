import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// This means its rendering App in the id of 'root' which is in HTML file.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
