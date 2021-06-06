import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './MapStyles.scss';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MapComponent() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(72.5155);
    const [lat, setLat] = useState(18.2209);
    const [zoom, setZoom] = useState(6);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <>
            <div className="map-sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="mapbox-map"></div>
        </>
    );
}

export default MapComponent;
