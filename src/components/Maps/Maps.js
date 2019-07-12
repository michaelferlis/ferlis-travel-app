import React, { Component } from 'react'
import { connect } from 'react-redux';


import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
} from 'react-google-maps'


class Map extends Component{

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_PINS'})
    }
   

    render(){
        return(


<GoogleMap
                    defaultOptions={{
                        streetViewControl: false,
                        fullscreenControl: false,
                        mapTypeId: 'hybrid',
                        controlSize: 100,
                        minZoom: 90,
                    }}
                    defaultZoom={2.3}

                    defaultCenter={{ lat: this.props.defaultLat, lng: this.props.defaultLong }}
                >
                    
                  {this.props.reduxState.tripReducers.pinList && this.props.reduxState.tripReducers.pinList.map(pin => (
                         
                         
                         <Marker
                             key={pin.pin_id}
                             position={{
                                 lat: Number(pin.pin_lat),
                                 lng: Number(pin.pin_long),
                                 title: 'hello'
                             }}
                            //  onClick={() => { this.setSelectedPin(pin) }}
                         />
                     ))}
                     <pre>{JSON.stringify(this.props.reduxState.tripReducers.pinList)}</pre> 
                </GoogleMap>

        )
    }

}

    
const WrappedMap = withScriptjs(withGoogleMap(Map));

const mapStateToProps = reduxState => ({
    reduxState
});
export default connect(mapStateToProps)(WrappedMap);