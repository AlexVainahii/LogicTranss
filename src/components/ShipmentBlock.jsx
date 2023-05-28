import { Link } from 'react-router-dom';
import Icon from '@mui/material/Icon';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  CardWrapper,
  ProductName,
  Wrapper,
  Status,
  Wrap,
  WrapArrow,
  Dates,
  Pag,
  Weight,
} from './ShipmentBlock.styled';

const getStatusColor = status => {
  let className = 'default';

  switch (status) {
    case 'В процесі':
      className = 'in-progress';
      break;
    case 'Доставлено':
      className = 'completed';
      break;
    default:
      className = 'default';
      break;
  }

  return className;
};
export const ShipmentBlock = ({ shipment, condition }) => {
  return (
    <CardWrapper key={shipment.id} className={getStatusColor(shipment.status)}>
      <Link
        to={`${shipment.id}`}
        onClick={!condition ? e => e.preventDefault() : undefined}
      >
        <ProductName>
          {shipment.isInternational()
            ? 'Міжнародне перевезення'
            : 'Внутрішнє перевезення'}{' '}
          №: {shipment.shipmentNumber}
          <Weight>Вага: {shipment.weight} кг</Weight>
          <Dates>Дата: {shipment.date.toLocaleDateString()}</Dates>
        </ProductName>
        <Status>Статус: {shipment.status}</Status>
        <Wrapper>
          <Wrap>
            <Pag>Початковий пункт:</Pag>
            <Pag>
              {shipment.origin.city}, {shipment.origin.country}
            </Pag>
          </Wrap>
          <WrapArrow>
            <Icon component={ArrowForwardIcon} />
          </WrapArrow>
          <Wrap>
            <Pag> Кінцевий пункт:</Pag>
            <Pag>
              {shipment.destination.city}, {shipment.destination.country}
            </Pag>
          </Wrap>
        </Wrapper>
      </Link>
    </CardWrapper>
  );
};
