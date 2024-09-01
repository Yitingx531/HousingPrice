import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.css';

interface MapProps {
  propertyLongitude?: number;
  propertyLatitude?: number;
}

const Map: React.FC<MapProps> = ({ propertyLongitude, propertyLatitude }) => {
  // Avoid causing re-render, wrap map container and map instance in ref
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoieWl0aW5nNTMxIiwiYSI6ImNtMGVua2sweDBrb2kyaW9jZncyZWN4emkifQ.BHhQ8r1Ho7Zzv7hksBCTwA';

    const initializeMap = (center: [number, number]) => {
      if (mapContainerRef.current && !mapRef.current) {
        mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: center,
          zoom: 14,
          projection: 'globe'
        });

        mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        const geolocateControl = new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
          showAccuracyCircle: true,
          showUserHeading: true,
        });

        mapRef.current.addControl(geolocateControl, 'top-right');

        // Add property marker and zoom on click
        if (propertyLongitude !== undefined && propertyLatitude !== undefined) {
          const propertyMarker = new mapboxgl.Marker({ color: 'red' })
            .setLngLat([propertyLongitude, propertyLatitude])
            .addTo(mapRef.current);

          propertyMarker.getElement().addEventListener('click', () => {
            mapRef.current?.flyTo({ center: [propertyLongitude, propertyLatitude], zoom: 18 });
          });
        }

        // Add user location marker and zoom on click
        if (userLocation) {
          const userMarker = new mapboxgl.Marker({ color: 'blue' })
            .setLngLat(userLocation)
            .addTo(mapRef.current);

          userMarker.getElement().addEventListener('click', () => {
            mapRef.current?.flyTo({ center: userLocation, zoom: 18 });
          });
        }
      }
    };

    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords: [number, number] = [position.coords.longitude, position.coords.latitude];
          setUserLocation(userCoords);
          if (propertyLongitude === undefined || propertyLatitude === undefined) {
            initializeMap(userCoords);
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
          if (propertyLongitude === undefined || propertyLatitude === undefined) {
            // If we can't get user location and don't have property location, use a default
            initializeMap([-74.006, 40.7128]); // Default to New York City
          }
        },
        { enableHighAccuracy: true }
      );
    };

    if (propertyLongitude !== undefined && propertyLatitude !== undefined) {
      initializeMap([propertyLongitude, propertyLatitude]);
    } else {
      getUserLocation();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyLongitude, propertyLatitude]);

  return <div ref={mapContainerRef} className={styles.mapContainer}></div>;
};

export default Map;


//Benefit os using ref: You can access and modify the map's properties without causing re-renders.
//The map can update its own state (like position, zoom level, etc.) without affecting React's render cycle.