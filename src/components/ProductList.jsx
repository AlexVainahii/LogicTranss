import { Link } from 'react-router-dom';
import { Container, CardWrapper, ProductName } from './ProductList.styled';
export const ProductList = ({ shipments }) => {
  return (
    <Container>
      {shipments.map(shipment => (
        <CardWrapper key={shipment.id}>
          <Link to={`${shipment.id}`}>
            <ProductName>{shipment.shipmentNumber}</ProductName>
            <p>
              Початковий пункт: {shipment.origin.city},{' '}
              {shipment.origin.country}
            </p>
            <p>
              Кінцевий пункт: {shipment.destination.city},{' '}
              {shipment.destination.country}
            </p>
            <p>Вага: {shipment.weight} кг</p>
            <p>Статус: {shipment.status}</p>
            <p>Дата: {shipment.date.toLocaleDateString()}</p>
            <p>
              Міжнародне перевезення:{' '}
              {shipment.isInternational() ? 'Так' : 'Ні'}
            </p>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
