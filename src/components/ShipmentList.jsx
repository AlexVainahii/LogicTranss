import React, { useEffect } from 'react';
import { Title } from './ShipmentList.styled';
import { useState } from 'react';
import { FiltersBlock } from './FiltersBlock';
import { ShipmentBlock } from './ShipmentBlock';
import { Container } from './SharedLayout.styled';
import { getShipments } from 'fakeApi';

export const ShipmentList = () => {
  const shipmentsL = getShipments();
  const [shipments, setShipments] = useState([...shipmentsL]);
  const [deleteId, setDeleteId] = useState(0);
  useEffect(() => {
    // При зміні масиву відправлень, оновити локальне сховище
    localStorage.setItem('shipments1', JSON.stringify(shipments));
  }, [shipments]);
  useEffect(() => {
    if (deleteId !== 0) {
      const updatedShipments = shipments.filter(
        shipment => shipment.id !== deleteId
      );
      setDeleteId(0);
      setShipments(updatedShipments);
    }
  }, [deleteId, shipments]);
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
  const handleStatusChange = (id, newStatus) => {
    const updatedShipments = shipments.map(shipment => {
      if (shipment.id === id) {
        return {
          ...shipment,
          status: newStatus,
        };
      }
      return shipment;
    });

    localStorage.setItem('shipments1', JSON.stringify(updatedShipments)); // Оновлення локального сховища
  };
  const handleDelete = id => {
    // Повернути функцію обробника події, яка виконує видалення
    setDeleteId(id);
  };

  const applyFilters = shipment => {
    const { shipmentNumber, status, originCity, destinationCity } = filters;
    console.log(shipment);
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
  const condition = 1;
  return (
    <Container>
      <Title>Вантажні перевезення</Title>
      <FiltersBlock
        filters={filters}
        handleFilterChange={handleFilterChange}
        handleResetFilters={handleResetFilters}
      />

      {filteredShipments.map(shipment => (
        <ShipmentBlock
          key={shipment.id}
          shipment={shipment}
          condition={condition}
          handleStatusChange={handleStatusChange}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  );
};
