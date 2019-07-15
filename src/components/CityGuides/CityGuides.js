import React, { Component } from 'react';
import { connect } from 'react-redux';


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

const mapStateToProps = reduxState => ({
  reduxState
});

export default connect(mapStateToProps)(CityGuides);
