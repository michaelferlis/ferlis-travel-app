import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import TripItem from '../TripItem/TripItem'
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
class CurrentTrip extends Component {

  componentDidMount() {
    // console.log('test');
    
    
  }
  getDashboard=()=> {
    this.props.history.push(`/home`)
  }

  render() {
    return (
      <div>
         <h2>{this.props.location.state && this.props.location.state.trip_name }</h2>
         <pre>{JSON.stringify(this.props.reduxState.tripReducers.singleTrip, null, 2)}</pre>
         {/* <pre>{JSON.stringify(this.props.location.state.trip_name, null, 2)}</pre> */}
         <h4>{this.props.location.state && this.props.location.state.trip_comments }</h4>
      

      
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
});
export default connect(mapStateToProps)(CurrentTrip);
