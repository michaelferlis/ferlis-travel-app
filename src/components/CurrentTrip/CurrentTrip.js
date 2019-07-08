import React, { Component } from 'react'

import { connect } from 'react-redux'
import CurrentTripItem from '../CurrentTripItem/CurrentTripItem'
import TextField from '@material-ui/core/TextField';

// import TableBody from '@material-ui/core/TableBody';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableCell from '@material-ui/core/TableCell'
// import TableRow from '@material-ui/core/TableRow'
// import Grid from '@material-ui/core/Grid'

class CurrentTrip extends Component {

  state = {
    tripComments: '',
  }

  setTripComments = () => { this.props.location.state &&
  this.setState({
      tripComments: this.props.location.state.trip_comments,
  })
  }



  handleChange(event) {
    console.log('test');
    
  //   this.setState({
  //     ...this.state, [event.target.id]: event.target.value,
  // })
  }
  getDashboard=()=> {
    this.props.history.push(`/home`)
  }

  render() {
    return (
      <div>
         <h2>{this.props.location.state && this.props.location.state.trip_name }</h2>
       
         {/* <Table>
                    <TableHead>

                        <TableRow>
                            
                            <TableCell>Date</TableCell>
                          
                            <TableCell>City</TableCell>
                            <TableCell>Comments</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody> */}
                    <>
                        {this.props.reduxState.tripReducers.singleTrip.map(singleTrip => <CurrentTripItem history={this.props.history} key={singleTrip.date} singleTrip={singleTrip} />)}
                    </>
                    {/* </TableBody>
                </Table> */}
         {/* <pre>{JSON.stringify(this.props.reduxState.tripReducers.singleTrip, null, 2)}</pre> */}
         <pre>{JSON.stringify(this.props.location.state && this.props.location.state.trip_comments)}</pre>
         <h4>Trip Comments</h4>         
         <h5>{this.props.location.state && this.props.location.state.trip_comments }</h5>
      
         <TextField
                                onChange={this.handleChange}
                                id="tripComments"
                                
                                fullWidth
                                label="Trip Comments"
                                value={this.props.location.state && this.props.location.state.trip_comments}
                                margin="normal"
                            />
      
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
});
export default connect(mapStateToProps)(CurrentTrip);
