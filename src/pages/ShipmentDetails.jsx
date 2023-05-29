import MapWithRoute from 'components/MapWithRoute';
import { getShipmentsById } from 'fakeApi';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Container } from 'components/SharedLayout.styled';
import { ShipmentBlock } from 'components/ShipmentBlock';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Back } from 'components/ShipmentBlock.styled';
export const ShipmentDetails = () => {
  const { id } = useParams();
  const shipment = getShipmentsById(Number(id));

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
          <ShipmentBlock shipment={shipment} condition={2} />
          <MapWithRoute coordinates={shipment.route} shipment={shipment} />
        </Container>
      </div>
    </main>
  );
};
