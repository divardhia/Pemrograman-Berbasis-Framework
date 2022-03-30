import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NestingExample from './nesting';
import BasicExample from './App';
import reportWebVitals from './reportWebVitals';
import ParamsExample from './urlParams';
import AuthExample from './auth';
import Main from './Tugas/main';


// ReactDOM.render(<AuthExample />, document.getElementById('root'));
// ReactDOM.render(<ParamsExample />, document.getElementById('root'));
// ReactDOM.render(<NestingExample />, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
