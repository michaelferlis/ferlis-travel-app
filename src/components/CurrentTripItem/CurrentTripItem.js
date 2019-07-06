import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'



class TripItem extends Component {
    handleClick = () =>{
        this.props.history.push(`/current`)
    }


    render() {
        return (
            <div>
               
                <TableRow >
                    <TableCell>{this.props.singleTrip.day}</TableCell>
                    <TableCell>{this.props.singleTrip.city}</TableCell>
                    <TableCell>{this.props.singleTrip.travel_information}</TableCell>
                    <TableCell>{this.props.singleTrip.hotel}</TableCell>
                    <TableCell>{this.props.singleTrip.restaurant_reservations}</TableCell>
                    <TableCell>{this.props.singleTrip.day_comments}</TableCell>
                <TableCell>
                        <Button size="small" onClick={this.handleDelete}>
                             Delete
                         </Button>
                    </TableCell> 
                </TableRow>
               {/* <Button type='submit' variant="outlined" color="primary" onClick={this.handleClick}>{this.props.tripList.trip_name}</Button> */}
               
                
                
              
            </div>
        )
    }
}

export default connect()(TripItem);