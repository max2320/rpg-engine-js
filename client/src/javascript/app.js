import React, { Component } from 'react';

import {createApolloClient} from './client';


export default class App extends Component{

  apollo(){
    return createApolloClient();
  }

  render(){
    return (
      <div>It is alive</div>
    );
  }
}
