import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './app';


(()=>{
  fetch('/config').then((response)=>{
    return response.json();
  }).then((body)=>{
    global.ENV = body;
    run();
  });


  function run(){
    ReactDOM.render((
      <App/>
    ), document.querySelector('#app'));
  }
})()
