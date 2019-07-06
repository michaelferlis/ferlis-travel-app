import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'



class TripItem extends Component {
    handleClick = () =>{
        console.log('button');
        
    }


    render() {
        return (
            
               
                <TableRow >
                    <TableCell>{this.props.singleTrip.day.substring(5, 7) + "/" + this.props.singleTrip.day.substring(8, 10) + "/" + this.props.singleTrip.day.substring(0, 4)}</TableCell>
                    <TableCell>{this.props.singleTrip.city}</TableCell>
                    <TableCell>{this.props.singleTrip.travel_information}</TableCell>
                    <TableCell>{this.props.singleTrip.hotel}</TableCell>
                    <TableCell>{this.props.singleTrip.restaurant_reservations}</TableCell>
                    <TableCell>{this.props.singleTrip.day_comments}</TableCell>
                <TableCell>
                        <Button size="small" onClick={this.handleClick}>
                             Delete
                         </Button>
                    </TableCell> 
                </TableRow>
          
               
                
                
              
           
        )
    }
}

export default connect()(TripItem);