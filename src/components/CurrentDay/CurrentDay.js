import React, { Component } from 'react';
import { connect } from 'react-redux'
import CurrentDayItem from '../CurrentDayItem/CurrentDayItem'

class CurrentDay extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_TRIP_NAMES'})
  }
  

  render() {
    return (
      <div>
        
         
         <p>{this.props.reduxState.tripReducers.singleDay.map(singleDay => <CurrentDayItem history={this.props.history} key={singleDay.id} singleDay={singleDay} />)}</p>
         {/* <pre>{JSON.stringify(this.props.reduxState.tripReducers.singleDay, null, 2)}</pre> */}
         {/* <pre>{JSON.stringify(this.props.reduxState.tripReducers.tripNames)}</pre> */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
});
export default connect(mapStateToProps)(CurrentDay);