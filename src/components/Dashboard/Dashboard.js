import React, { Component } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import CalendarTest from '../CalendarTest/CalendarTest';
import { connect } from 'react-redux';





// sgMail.send(msg);

class Dashboard extends Component {
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


  render() {
    return (
      <div>
          <button onClick={this.getNew}>New Trip</button>
          <button onClick={this.getCurrent}>Current Trip</button>
          <button onClick={this.getDay}>Current Day</button>
          <button onClick={this.getPast}>Past Trip</button>

         <h2>Upcoming Trips</h2>
         <ul>
             {/* <li>{this.props.reduxState.addDay.addDay}</li> */}
         </ul>
          
      </div>
    );
  }
}
const mapStateToProps = reduxState => ({
    reduxState
});
export default connect(mapStateToProps)(Dashboard);