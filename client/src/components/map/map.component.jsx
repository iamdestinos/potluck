import React, { useState, useEffect } from 'react';

import MapGl from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const initialViewport = {
    latitude: 37.0902,
    longitude: -95.7129,
    zoom: 3,
  };
  const [viewport, setViewport] = useState(initialViewport);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          navigator.geolocation.getCurrentPosition((position) => {
            setViewport({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              zoom: 10,
            });
            console.log('Latitude is :', position.coords.latitude);
            console.log('Longitude is :', position.coords.longitude);
          });
        } else if (result.state === 'prompt') {
          console.log('User has not granted permission yet.');
        } else if (result.state === 'denied') {
          console.log('User has denied permission.');
        }
      });
    }
  }, []);

  return (
    <MapGl
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...viewport}
      style={{
        width: 600,
        height: 700,
        borderRadius: 10,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      mapboxAccessToken={process.env.MAP_BOX_TOKEN}
    />
  );
};

export default Map;
