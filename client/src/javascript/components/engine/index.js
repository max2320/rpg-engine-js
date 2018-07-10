import React, { Component } from 'react';

import MapComponent from '../map';

export default class Engine extends Component{
  render(){
    return (
      <div className="game">
        <div className="game-hud">
        </div>

        <MapComponent/>
      </div>
    );
  }
}
