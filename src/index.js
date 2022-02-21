import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

  function getComputation(a, b){
  return a + b;
  
  }
  function sayHello(){
    return <div><p>Hello World!</p></div>;
  }
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
//setInterval(tick, 1000);
//reportWebVitals();