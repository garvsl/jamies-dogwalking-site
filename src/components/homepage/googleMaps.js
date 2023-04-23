import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return <Map />;
}

function Map() {
  return (
    <GoogleMap
      zoom={20}
      center={{ lat: 34.0055346052396, lng: -118.44904119694749 }}
      mapContainerClassName="map-container"
    />
  );
}
