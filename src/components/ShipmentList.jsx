import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
  Container,
  CardWrapper,
  ProductName,
  Title,
  Wrapper,
  Status,
  Wrap,
  WrapArrow,
  Dates,
  Pag,
  Weight,
} from './ShipmentList.styled';
import { useState } from 'react';
import { FiltersBlock } from './FiltersBlock';

export const ShipmentList = ({ shipments }) => {
  const [filters, setFilters] = useState({
    shipmentNumber: '',
    status: '',
    originCity: '',
    destinationCity: '',
  });

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

  const handleFilterChange = event => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      shipmentNumber: '',
      status: '',
      originCity: '',
      destinationCity: '',
    });
  };

  const applyFilters = shipment => {
    const { shipmentNumber, status, originCity, destinationCity } = filters;

    return (
      shipment.shipmentNumber
        .toLowerCase()
        .includes(shipmentNumber.toLowerCase()) &&
      shipment.status.toLowerCase().includes(status.toLowerCase()) &&
      shipment.origin.city.toLowerCase().includes(originCity.toLowerCase()) &&
      shipment.destination.city
        .toLowerCase()
        .includes(destinationCity.toLowerCase())
    );
  };

  const filteredShipments = shipments.filter(applyFilters);

  return (
    <Container>
      <Title>Вантажні перевезення</Title>
      <FiltersBlock
        filters={filters}
        handleFilterChange={handleFilterChange}
        handleResetFilters={handleResetFilters}
      />

      {filteredShipments.map(shipment => (
        <CardWrapper
          key={shipment.id}
          className={getStatusColor(shipment.status)}
        >
          <Link to={`${shipment.id}`}>
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
      ))}
    </Container>
  );
};
