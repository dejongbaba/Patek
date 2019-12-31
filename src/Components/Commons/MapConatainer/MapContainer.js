import React from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react';


const mapStyles = {
    width: '100%',
    position:'relative',
    minHeight: '500px'
};


const MapContainer = (props) => {
    return (
        <div style={{width:'100%',height:'500px',position:'relative'}}>
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: -1.2884,
                    lng: 36.8233
                }}
            />
        </div>

    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDPXCmsVCTZ0ufTHVzbMYm5hjVNMJJWMUI'
})(MapContainer);