import React, { Component } from 'react'
import axios from 'axios';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

class CurrentTrip extends Component {

  componentDidMount() {
    
  }
  getDashboard=()=> {
    this.props.history.push(`/home`)
  }

  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.props.reduxState.tripReducers.tripList)}</pre> */}
<button onClick={this.getDashboard}>Dashboard</button>


<TableRow >
  
                    {/* <TableCell>{this.props.reduxState.tripReducers.tripList}</TableCell> */}
                    {/* <TableCell>{this.props.day.city}</TableCell>
                    <TableCell>{this.props.day.travel}</TableCell>
                    <TableCell>{this.props.day.hotel}</TableCell>
                    <TableCell>{this.props.day.reservations}</TableCell>
                    <TableCell>{this.props.day.dayComments}</TableCell> */}
                    
                    <TableCell>
                        <Button size="small" onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>
      </div>
    );
  }
}


export default connect()(CurrentTrip);
