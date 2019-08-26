import React, { Component } from 'react'
// import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

const styles = 
{text: {color: 'white'},


button: {
fontSize: '18px',
  width: '100%', color: 'white',
  textAlign: 'center',

},

}

class TripItem extends Component {
    getDetails = (action) => {
        this.props.dispatch({ type: 'FETCH_TRIP_DETAILS', payload: this.props.tripNames.id })
        // this.props.history.push(`/current`)
        this.props.history.push({
            pathname: '/current',
            state: this.props.tripNames,

        })
    }


    componentDidMount() {
        // console.log(this.props.tripNames.id);

    }

    


    render() {
        return (
            <>

                {this.props.tripNames.complete === this.props.complete &&

                    <Button style={styles.button}  onClick={this.getDetails}>{this.props.tripNames.trip_name}</Button>


                }



            </>
        )
    }
}

export default connect()(TripItem);