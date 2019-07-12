import React, { Component } from 'react'



import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
} from 'react-google-maps'

class Map extends Component{


    render(){
        return(


<GoogleMap
                    defaultOptions={{
                        streetViewControl: false,
                        fullscreenControl: false,
                        // mapTypeId: 'hybrid',
                        controlSize: 100,
                        minZoom: 90,
                    }}
                    defaultZoom={2.3}

                    defaultCenter={{ lat: this.props.defaultLat, lng: this.props.defaultLong }}
                >
{/* 
                    {this.props.pinList && this.props.pinList.map(pin => (
                        <Marker
                            key={pin.pin_id}
                            position={{
                                lat: Number(pin.latitude),
                                lng: Number(pin.longitude),
                            }}
                            onClick={() => { this.setSelectedPin(pin) }}
                        />
                    ))} */}
                </GoogleMap>

        )
    }

}

    
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;