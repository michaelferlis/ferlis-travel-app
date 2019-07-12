import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


const styles = {text: {margin: 10 },button: {margin: 20,width: 150, },
    card: {
        width: '100%',
        height: '20%',
        margin: '20px auto',
    }
}


class Pins extends Component {
    state = {
       
        pins: {
            pin_lat: '',
            pin_long: '',
            location: '',
           
        }
        
       
    }
    componentDidMount () {
        
      } 

    addNewPin = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PIN', payload: this.state.pins })
         
        
        this.setState({
            pins: {
                pin_lat: '',
                pin_long: '',
                location: '',
               
            }
        });
    }


    handlePinChangeFor = (propertyName) => event => {
        // console.log('event happended')
        this.setState({
            pins: {
                ...this.state.pins,
                [propertyName]: event.target.value,
            }
        });
    }

    render() {
        return (
            <div>
                
                <h2>Where have you been?</h2>
             

                
                
                <pre>{JSON.stringify(this.state.pins)}</pre>
                
                
                <Card style={styles.card}>
                    
                      
                        <TextField style={styles.text} label="Latitude" type='text' value={this.state.pins.lat} onChange={this.handlePinChangeFor('lat')} />
                        <TextField  style={styles.text}label="Longitude" type='text' value={this.state.pins.long} onChange={this.handlePinChangeFor('long')} />
                        <TextField  style={styles.text}label="Location" type='text' value={this.state.pins.location} onChange={this.handlePinChangeFor('location')} />
                        <Button type='submit' variant="outlined" color="primary" onClick={this.addNewPin}>Log Trip</Button>
                        

                    
                </Card>
                

                
                
               
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(Pins);