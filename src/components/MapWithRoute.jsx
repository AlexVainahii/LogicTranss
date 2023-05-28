import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithRoute = ({ coordinates, centrMap, markers, zoom = 6 }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map(mapContainerRef.current).setView(centrMap, zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(mapRef.current);

    // Додавання маркерів
    markers.forEach(coord => {
      L.marker(coord).addTo(mapRef.current);
    });

    // Додавання лінії маршруту
    const routeLine = L.polyline(coordinates).addTo(mapRef.current);

    // Збільшення масштабу, щоб лінія маршруту була видимою
    mapRef.current.fitBounds(routeLine.getBounds());

    // Очищення мапи під час розмонтування компонента
    return () => {
      mapRef.current.remove();
    };
  }, [coordinates, centrMap, zoom, markers]);

  return <div ref={mapContainerRef} style={{ height: '400px' }} />;
};

export default MapWithRoute;
