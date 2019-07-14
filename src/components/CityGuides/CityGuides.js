import React, { Component } from 'react';


class CityGuides extends Component {

  componentDidMount() {
    
  }
  getDashboard=()=> {
    this.props.history.push(`/home`)
  }

  render() {
    return (
      <div>
        <h1>City Guides</h1>
          <button onClick={this.getDashboard}>Dashboard</button>
      </div>
    );
  }
}

export default CityGuides;
