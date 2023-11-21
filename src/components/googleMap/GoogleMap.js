import React, { useState, useEffect } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const GoogleMapSection = ({ bosaltmaLatLang, yukelemeLatLang }) => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [map, setMap] = useState(null);

  const mapContainerStyle = {
    height: "300px",
    width: "100%",
  };

  const rotaOptions = {
    polylineOptions: {
      strokeColor: "#BB2649",
      strokeOpacity: 1.0,
      strokeWeight: 5,
    },
  };

  const center = {
    lat: 38.75,
    lng: 33.75,
  };

  const markerPosition = {
    lat: 37.75,
    lng: 34.75,
  };

  const options = {
    zoomControl: false,
    streetViewControl: false,
    scaleControl: false,
    mapTypeControl: false,
    rotateControl: false,
  };

  const calculateRoute = async () => {
    // eslint-disable-next-line no-undef
    const origin = new google.maps.LatLng(
      bosaltmaLatLang.lat,
      bosaltmaLatLang.lng
    );
    // eslint-disable-next-line no-undef
    const destination = new google.maps.LatLng(
      yukelemeLatLang.lat,
      yukelemeLatLang.lng
    );
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        // eslint-disable-next-line no-undef
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
        } else {
          console.error(`Directions request failed due to ${status}`);
        }
      }
    );
  };

  useEffect(() => {
    if (map && bosaltmaLatLang && yukelemeLatLang) {
      calculateRoute();
    }
  }, [map, bosaltmaLatLang, yukelemeLatLang]);

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAGCO6gi8rDbt4AFdMP9VF2EkUQmbw7M00">
        <GoogleMap
          onLoad={(map) => setMap(map)}
          options={options}
          mapContainerStyle={mapContainerStyle}
          zoom={5}
          center={center}
        >
          <Marker position={markerPosition} />
          {directionsResponse && (
            <DirectionsRenderer
              directions={directionsResponse}
              options={rotaOptions}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapSection;
