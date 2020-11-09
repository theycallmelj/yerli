import React from 'react';
import GoogleMapReact from 'google-map-react';
import { BsGeoAlt } from 'react-icons/bs'

const AnyReactComponent = ({ text }) => {
    return (
        <div>
            <BsGeoAlt size="20" color="#30c591" />
        </div>
    )
};

export default function Map(){
    const defaultProps = {
        center: {
            lat: 42.3732,
            lng: -72.5199
          },
          zoom: 11
    }
    return (
        <div style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB7S1CU11Fo7wlaCmEeTDoAVsh4CVKbREc' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={42.3732}
            lng={-72.5199}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}