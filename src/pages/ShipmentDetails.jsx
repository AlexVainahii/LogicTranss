import MapWithRoute from 'components/MapWithRoute';
import {
  getDistance,
  getMarker,
  getShipmentsById,
  getZoom,
  getcentrMap,
} from 'fakeApi';
import { useParams } from 'react-router-dom';

export const ShipmentDetails = () => {
  const { id } = useParams();
  const shipment = getShipmentsById(Number(id));
  const centrMap = getcentrMap(shipment);
  const markers = getMarker(shipment);
  const distance = getDistance(shipment);
  const zoom = getZoom(distance);

  return (
    <div>
      <h1>Maps</h1>
      <MapWithRoute
        coordinates={shipment.route}
        centrMap={centrMap}
        markers={markers}
        zoom={zoom}
      />
    </div>
  );
};
