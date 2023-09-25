import React, { useEffect, useState } from 'react';

function Map({ lat, lng }) {
  const [map, setMap] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = initMap;

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat, lng },
      zoom: 10,
    });


    setMap(mapInstance);
  };

  return <div id="map" style={{ width: '500px', height: '600px' }} />;
}
export default Map;