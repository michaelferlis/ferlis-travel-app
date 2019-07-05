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
    console.log('test');
    
    
  }
  getDashboard=()=> {
    this.props.history.push(`/home`)
  }

  render() {
    return (
      <div>
         <pre>{JSON.stringify(this.props.reduxState.tripReducers.oneTrip)}</pre>
         {/* <Table>
                    <TableHead>

                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Travel Information</TableCell>
                            <TableCell>Hotel Information</TableCell>
                            <TableCell>Restaurant Reservations</TableCell>
                            <TableCell>Comments</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                    {this.props.reduxState.tripReducers.tripListAll.map(tripList => <TripItem history={this.props.history} key={tripList.id} tripList={tripList} />)}
                    </TableBody>
                </Table> */}
         
        {/* <pre>{JSON.stringify(this.props.reduxState.tripReducers.tripList)}</pre> */}
<button onClick={this.getDashboard}>Dashboard</button>



      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
});
export default connect(mapStateToProps)(CurrentTrip);
