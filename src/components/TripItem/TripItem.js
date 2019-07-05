import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'



class TripItem extends Component {


    render() {
        return (
            <div>
                <li>
                {this.props.trip.trip_name}
                </li>
              
            </div>
        )
    }
}

export default connect()(TripItem);