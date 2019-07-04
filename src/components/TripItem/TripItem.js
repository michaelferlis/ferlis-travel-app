import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'



class TripItem extends Component {

    // handleDelete = () => {
    //     this.props.dispatch({
    //         type: 'DELETE_PLANT',
    //         payload: this.props.plant.id
    //     })
    // }

    // getDetails = () => {
    //     this.props.dispatch({
    //         type: 'GET_DETAIL_PAGE',
    //         payload: this.props.plant.id
    //     })
    //     this.props.history.push(`/details/${this.props.plant.id}`)
    // }

    render() {
        return (
            <div>
                <li></li>
                {this.props.trip.id}
                {/* <TableRow >
                    <TableCell></TableCell> */}
                    {/* <TableCell>{this.props.trip.city}</TableCell>
                    <TableCell>{this.props.trip.travel}</TableCell>
                    <TableCell>{this.props.trip.hotel}</TableCell>
                    <TableCell>{this.props.trip.reservations}</TableCell>
                    <TableCell>{this.props.trip.dayComments}</TableCell> */}
{/*                     
                    <TableCell>
                        <Button size="small" onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </TableCell>
                </TableRow> */}
            </div>
        )
    }
}

export default connect()(TripItem);