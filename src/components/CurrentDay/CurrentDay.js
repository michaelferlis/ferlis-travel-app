import React, { Component } from 'react';


class CurrentDay extends Component {

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

export default CurrentDay;