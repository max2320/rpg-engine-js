import React, { Component } from 'react';

import Engine from './components/engine';

import { createApolloClient } from './libs/client';
import { ApolloProvider } from 'react-apollo';


export default class App extends Component{

  apollo(){
    return createApolloClient();
  }

  render(){
    return (
      <ApolloProvider client={this.apollo()}>
        <Engine />
      </ApolloProvider>
    );
  }
}
