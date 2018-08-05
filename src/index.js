import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WrappedComponent from './HOC/BasicComponent';
import WComponent from './HOC-Example/ComponentNeedingStorage';

ReactDOM.render(<WComponent />, document.getElementById('root'));
registerServiceWorker();
