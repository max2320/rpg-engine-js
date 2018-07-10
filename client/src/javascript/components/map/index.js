import React, { Component } from 'react';

import L, {Map, CRS, TileLayer} from 'leaflet'

import Player from '../player';


export default class MapComponent extends Component{
  state = {
    map: undefined
  };

  componentDidMount(){
    const map = new Map(this.refs.map,{
      crs: CRS.Simple,
      center: [-30,30],
      zoom: 4,
      preferCanvas: true
    });

    
    this.base = L.tileLayer('http://localhost:3000/tile/{z}/{x}/{y}.png', {
      crs: CRS.Simple,
    }).addTo(map);

    this.setState({
      map: map
    });
  }

  renderPlayer(){
    if(this.state.map){
      return (<Player map={this.state.map}/>);
    }
  }

  render(){
    return (
      <div ref="map" className="game-map">
        {this.renderPlayer()}
      </div>
    );
  }
}
