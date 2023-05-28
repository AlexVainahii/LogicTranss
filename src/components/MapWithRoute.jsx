import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2FzdGllbCIsImEiOiJjbGk1cm41c2YxaXdmM2xscHV3Y3pyZTFpIn0.t1krxDv5Pa232Pr6C0QSTw';

const MapWithRoute = ({ coordinates, centrMap, markers, zoom = 6 }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Ініціалізація мапи
    console.log(coordinates, '1coor');
    console.log(centrMap, '1c');
    console.log(markers, '1m');
    console.log(zoom, '1z');
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: centrMap,
      zoom: 5,
    });
    console.table(coordinates, centrMap, markers, zoom, '2');
    // Додавання маркерів
    markers.forEach(coord => {
      //var coord1[0]=coord[1];
      new mapboxgl.Marker().setLngLat(coord).addTo(mapRef.current);
    });
    console.table(coordinates, centrMap, markers, zoom, '3');
    // Додавання лінії маршруту
    const routeLine = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: coordinates,
      },
    };
    console.table(coordinates, centrMap, markers, zoom, '4');
    mapRef.current.on('load', () => {
      mapRef.current.addSource('route', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [routeLine],
        },
      });

      mapRef.current.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#277',
          'line-width': 6,
        },
      });
    });

    // Очищення мапи під час розмонтування компонента
    return () => mapRef.current.remove();
  }, [coordinates, centrMap, zoom, markers]);

  return <div ref={mapContainerRef} style={{ height: '400px' }} />;
};

export default MapWithRoute;
