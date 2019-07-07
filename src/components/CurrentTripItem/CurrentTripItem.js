import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';



class TripItem extends Component {
  
    handleClickDay = () =>{
        console.log('button');
        this.props.dispatch({ type: 'FETCH_DAY_DETAILS', payload: this.props.singleTrip.id })
        
        this.props.history.push({
            pathname: '/day',
            state: this.props.tripNames,
        })
    }
    
  
    

    render() {
        return (
            
               
                <TableRow >
                    <Button size="small" onClick={this.handleClickDay}>
                             View Day
                         </Button>
                    <TableCell>{this.props.singleTrip.day.substring(5, 7) + "/" + this.props.singleTrip.day.substring(8, 10) + "/" + this.props.singleTrip.day.substring(0, 4)}</TableCell>
                    <TableCell>{this.props.singleTrip.city}</TableCell>
                    {/* <TableCell>{this.props.singleTrip.travel_information}</TableCell> */}
                    {/* <TableCell>{this.props.singleTrip.hotel}</TableCell>
                    <TableCell>{this.props.singleTrip.restaurant_reservations}</TableCell> */}
                    <TableCell>{this.props.singleTrip.day_comments}</TableCell>
                
                </TableRow>
          
               
                
                
              
           
        )
    }
}

export default connect()(TripItem);