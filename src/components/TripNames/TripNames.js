import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'



class TripItem extends Component {
    getDetails = (action) => {
        this.props.dispatch({ type: 'FETCH_TRIP_DETAILS', payload: this.props.tripNames.id })
        // this.props.history.push(`/current`)
        this.props.history.push({
            pathname: '/current',
            state: this.props.tripNames,
        })
    }





    render() {
        return (
            <div>
                <br />
                <Button type='submit' variant="outlined" color="primary" onClick={this.getDetails}>{this.props.tripNames.trip_name}</Button>




            </div>
        )
    }
}

export default connect()(TripItem);