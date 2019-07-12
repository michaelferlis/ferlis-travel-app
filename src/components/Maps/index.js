import React, { Component } from 'react'
import WrappedMap from './Maps'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'





const MAPS_KEY = `${process.env.REACT_APP_MAPS_KEY}`;
class GoogleMaps extends Component {

componentDidMount(){
    console.log(MAPS_KEY);
    
}

    render() {
        return (
            
          
            
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: "70vh" }} />}
                containerElement={<div style={{ height: "70vh" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                defaultLat={12.977753}
                defaultLong={0.265015}
                
           
                
            />           
                             
                 
                
            
        )
    }
}


export default connect( )(GoogleMaps);
