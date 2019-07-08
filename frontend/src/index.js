import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Login from './components/Login/Login';
import Container from './components/Home/Container';
import FloatingActionButtons from './components/Home/Contact'
import registerServiceWorker from './registerServiceWorker';
//import Section from './components/Home/scroll'
ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
