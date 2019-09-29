import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



const EmpLocation = (props) => {
    const style = {
        width: "100%",
        height: "100%"
    }
    return (
        <React.Fragment>
            <Map
                google={props.google}
                zoom={2}
                style={style}
                initialCenter={props.coords}
                disableDefaultUI={true}
                draggable={false}
            >
                <Marker position={props.coords} />
            </Map>
        </React.Fragment>
    )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDFZIT6v7Zhc1gDaselOkkKv72umRfe6p4'
})(EmpLocation);