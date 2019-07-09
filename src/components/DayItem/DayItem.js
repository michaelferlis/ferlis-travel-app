import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'



class DayItem extends Component {

    

    render() {
        return (
            <>
                <TableRow >
                    <TableCell>{this.props.day.date}</TableCell>
                    <TableCell>{this.props.day.city}</TableCell>
                    <TableCell>{this.props.day.travel}</TableCell>
                    <TableCell>{this.props.day.hotel}</TableCell>
                    <TableCell>{this.props.day.reservations}</TableCell>
                    <TableCell>{this.props.day.dayComments}</TableCell>
                    
                    <TableCell>
                        <Button size="small" onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>
            </>
        )
    }
}

export default connect()(DayItem);