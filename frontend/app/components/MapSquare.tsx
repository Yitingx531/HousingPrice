'use client';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import styles from './MapSquare.module.css';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import { useEffect } from 'react';
import { fromLonLat } from 'ol/proj.js';

const MapSquare = () => {

    useEffect( () => {
        const map = new Map({target: 'map'});
        const nyc = [-73.935242, 40.730610];
        const nycWebMercator = fromLonLat(nyc);
        map.setView(new View({
            center: nycWebMercator,
            zoom: 12,
        }));
        
        const source = new OSM();
        const layer = new TileLayer({source: source});
        map.addLayer(layer);
    }, [])
    


    return (

        <div>
        <div>Map Below</div>

        <div id="map" className={styles.map}></div>
        </div>
    )

}

export default MapSquare