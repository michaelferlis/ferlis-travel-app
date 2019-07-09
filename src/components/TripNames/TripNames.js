import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
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


componentDidMount (){
    console.log(this.props.tripNames.id);
    
}


    render() {
        return (
            <div>
               
               {/* {this.props.tripNames.complete ?
                    <Card>
                        <h6>true</h6>
                        <Button type='submit' variant="outlined" color="primary" onClick={this.getDetails}>{this.props.tripNames.trip_name}</Button>
                        </Card>
                    :
                    <Card>
                        <h6>true</h6>
                        <Button type='submit' variant="outlined" color="primary" onClick={this.getDetails}>{this.props.tripNames.trip_name}</Button></Card> 
                } */}
                <br />

              
                <Button type='submit' variant="outlined" color="primary" onClick={this.getDetails}>{this.props.tripNames.trip_name}</Button>
                
                {/* <pre>{JSON.stringify(this.props.tripNames.complete)}</pre> */}


            </div>
        )
    }
}

export default connect()(TripItem);