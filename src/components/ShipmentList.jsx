import React from 'react';
import { Title } from './ShipmentList.styled';
import { useState } from 'react';
import { FiltersBlock } from './FiltersBlock';
import { ShipmentBlock } from './ShipmentBlock';
import { Container } from './SharedLayout.styled';

export const ShipmentList = ({ shipments }) => {
  const [filters, setFilters] = useState({
    shipmentNumber: '',
    status: '',
    originCity: '',
    destinationCity: '',
  });

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
        <ShipmentBlock key={shipment.id} shipment={shipment} condition={true} />
      ))}
    </Container>
  );
};
