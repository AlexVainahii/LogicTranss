import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../images/marker-icon.png';
import { getDistance, getMarker, getZoom, getcentrMap } from 'fakeApi';
var iconStyle = L.icon({
  iconUrl: markerIcon,
  iconSize: [30, 31],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  title: 'Початковий пункт',
  alt: 'Початковий пункт',
});

const MapWithRoute = ({ coordinates, shipment }) => {
  const centrMap = getcentrMap(shipment);
  const markers = getMarker(shipment);
  const distance = getDistance(shipment.route);
  const zoom = getZoom(distance);
  console.log(shipment.route, zoom);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  console.log(shipment, distance, zoom, centrMap, markers);
  useEffect(() => {
    mapRef.current = L.map(mapContainerRef.current).setView(centrMap, zoom);

    L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      attribution:
        'Map data &copy; <a href="https://www.google.com/">Google</a>',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      maxZoom: 20,
    }).addTo(mapRef.current);
    var k = 1;
    // Додавання маркерів
    markers.forEach(coord => {
      if (k === 1) {
        iconStyle = L.icon({
          iconUrl: markerIcon,
          iconSize: [30, 31],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
          title: 'Початковий пункт',
          alt: 'Початковий пункт',
        });
        k = k + 1;
      } else {
        iconStyle = L.icon({
          iconUrl: markerIcon,
          iconSize: [30, 31],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
          title: 'Кінцевийвий пункт',
          alt: 'Кінцевийвий пункт',
        });
      }
      L.marker(coord, { icon: iconStyle }).addTo(mapRef.current);
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
