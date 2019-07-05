import React, { Component } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import CalendarTest from '../CalendarTest/CalendarTest';
import { connect } from 'react-redux';

import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TripItem from '../TripItem/TripItem'
import TripNames from '../TripNames/TripNames'



// sgMail.send(msg);

class Dashboard extends Component {
  

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_TRIP_NAMES'})
  }
    getNew=()=> {
        this.props.history.push(`/new`)
      }
      getCurrent=()=> {
        this.props.history.push(`/current`)
      }
      getDay=()=> {
        this.props.history.push(`/day`)
      }
      getPast=()=> {
        this.props.history.push(`/past`)
      }

      
      // sendEmail=()=> {
      //   console.log('send email working');
        
      //   sgMail.send(msg);
      // }
      // get=()=> {
      //   this.props.dispatch({type: 'FETCH_TRIPS'})
      // }
      
  render() {
    return (
      <div>
          <button onClick={this.getNew}>New Trip</button>
          <button onClick={this.getCurrent}>Current Trip</button>
          <button onClick={this.getDay}>Current Day</button>
          <button onClick={this.getPast}>Past Trip</button>
          <button onClick={this.get}>Trip</button>

         <h2>Upcoming Trips</h2>
         <ul>
         <pre>{JSON.stringify(this.props.reduxState.tripReducers.tripListAll)}</pre>
         <pre>{JSON.stringify(this.props.reduxState.tripReducers)}</pre>
         <pre>{JSON.stringify(this.props.reduxState.tripReducers.tripNames)}</pre>
             {/* <li>{this.props.reduxState.addDay.addDay}</li> */}
             {/* {this.props.reduxState.tripReducers.tripListAll.map(tripList => <TripItem history={this.props.history} key={tripList.id} tripList={tripList} />)} */}
             {this.props.reduxState.tripReducers.tripNames.map(tripNames => <TripNames history={this.props.history} key={tripNames.id} tripNames={tripNames} />)}
             
         </ul>
          
      </div>
    );
  }
}
const mapStateToProps = reduxState => ({
    reduxState
});
export default connect(mapStateToProps)(Dashboard);