import React, { Component } from 'react';
import axios from 'axios';

class CurrentTrip extends Component {

  componentDidMount() {
    
  }
  getDashboard=()=> {
    this.props.history.push(`/home`)
  }

  render() {
    return (
      <div>
<button onClick={this.getDashboard}>Dashboard</button>
      </div>
    );
  }
}

export default CurrentTrip;
