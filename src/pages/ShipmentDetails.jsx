import MapWithRoute from 'components/MapWithRoute';
import {
  getDistance,
  getMarker,
  getShipmentsById,
  getZoom,
  getcentrMap,
} from 'fakeApi';
import { useParams } from 'react-router-dom';
import { Container } from 'components/SharedLayout.styled';
import { ShipmentBlock } from 'components/ShipmentBlock';
export const ShipmentDetails = () => {
  const { id } = useParams();
  const shipment = getShipmentsById(Number(id));
  const centrMap = getcentrMap(shipment);
  const markers = getMarker(shipment);
  const distance = getDistance(shipment);
  const zoom = getZoom(distance);

  return (
    <main>
      <div>
        <Container>
          <ShipmentBlock shipment={shipment} condition={false} />
          <MapWithRoute
            coordinates={shipment.route}
            centrMap={centrMap}
            markers={markers}
            zoom={zoom}
            shipment={shipment}
          />
        </Container>
      </div>
    </main>
  );
};
