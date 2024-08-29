import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.css';

interface MapProps {
  longitude: number;
  latitude: number;
}

const Map: React.FC<MapProps> = ({ longitude, latitude }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoieWl0aW5nNTMxIiwiYSI6ImNtMGVua2sweDBrb2kyaW9jZncyZWN4emkifQ.BHhQ8r1Ho7Zzv7hksBCTwA'; 

    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 14,
      });

      // Add zoom and rotation controls to the map
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add geolocate control to the map
      const geolocateControl = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showAccuracyCircle: true,
        showUserHeading: true,
      });

      map.addControl(geolocateControl, 'top-right');

      // Add a marker at the property location
      new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

      // Clean up on unmount
      return () => map.remove();
    }
  }, [longitude, latitude]);

  return <div ref={mapContainerRef} className={styles.mapContainer}></div>;
};

export default Map;
