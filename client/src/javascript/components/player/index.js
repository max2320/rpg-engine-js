import React, { Component } from 'react';

import { CircleMarker } from 'leaflet';

import Direction from '../../libs/events/directions';

export default class Player extends Component{
  el = undefined;

  state={
    position: [-30,30]
  }

  build(){
    this.el = new CircleMarker(this.state.position,{
      radius: 10
    })

    if(this.props.map){
      this.el.addTo(this.props.map);
    }
  }

  componentDidMount(){
    this.build()
    new Direction((e)=>{
      this.handdleMovement(e);
    })
  }

  componentDidUpdate(){
    this.el.setLatLng(this.state.position);
    this.props.map.flyTo(this.state.position);
  }

  handdleMovement(e){
    const {position} = this.state

    const x = position[1] + e.math.x;
    const y = position[0] + e.math.y;

    this.setState({
      position: [y, x]
    });
  }


  render(){
    return (
      <span>Player</span>
    )
  }
}
