import MapWithRoute from 'components/MapWithRoute';
import {
  getDistance,
  getMarker,
  getShipmentsById,
  getZoom,
  getcentrMap,
} from 'fakeApi';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Container } from 'components/SharedLayout.styled';
import { ShipmentBlock } from 'components/ShipmentBlock';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Back } from 'components/ShipmentBlock.styled';
export const ShipmentDetails = () => {
  const { id } = useParams();
  const shipment = getShipmentsById(Number(id));
  const centrMap = getcentrMap(shipment);
  const markers = getMarker(shipment);
  const distance = getDistance(shipment);
  const zoom = getZoom(distance);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/shipments';

  return (
    <main>
      <div>
        <Container>
          <Link
            to={backLinkHref}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              color: 'inherit',
            }}
          >
            <IconButton color="primary">
              <ArrowBackIcon />
            </IconButton>
            <Back>Повернутись до списку перевезень</Back>
          </Link>
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
