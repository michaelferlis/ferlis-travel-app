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
                <br />
               <Button type='submit' variant="outlined" color="primary" onClick={this.handleClick}>{this.props.trip.trip_name}</Button>
               
                
                
              
            </div>
        )
    }
}

export default connect()(TripItem);