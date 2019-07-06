import React, { Component } from 'react';


class PastTrip extends Component {

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

export default PastTrip;
