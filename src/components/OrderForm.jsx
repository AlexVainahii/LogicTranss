import React, { useState } from 'react';
import axios from 'axios';
import {
  calculateShippingCost,
  getDistance,
  getInternational,
  getShipments,
} from 'fakeApi';
import { useEffect } from 'react';
import MapWithRoute from './MapWithRoute';
import { Container } from './SharedLayout.styled';
import { ShipmentBlock } from './ShipmentBlock';
import { IconButton } from '@mui/material';
import { Back } from './ShipmentBlock.styled';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Title } from './ShipmentList.styled';
import { ToastContainer, toast } from 'react-toastify';

const OrderForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originCountry, setOriginCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [weight, setWeight] = useState(0);
  const [date, setDate] = useState('');
  const [route, setRoute] = useState([[], []]);
  const [suggestedOrigins, setSuggestedOrigins] = useState([]);
  const [suggestedDestinations, setSuggestedDestinations] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [distance, setDistance] = useState(0);
  const [createElement, setCreateElement] = useState(null);
  const [shipment, setShipment] = useState(null);
  console.log(
    '1',
    origin,
    '2',
    originCountry,
    '3',
    destination,
    '4',
    destinationCountry,
    '5',
    weight,
    '6',
    date,
    '7',
    route,
    '8',
    shippingCost,
    '9',
    distance,
    '10',
    createElement,
    '11',
    shipment,
    '12'
  );
  const handleOriginChange = async event => {
    const value = event.target.value;
    setOrigin(value);

    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          value
        )}&key=4b6e7d31f0654074aa698fd64a45063c`
      );
      const suggestions = response.data.results;
      console.log(suggestions);
      setSuggestedOrigins(suggestions);
    } catch (error) {
      console.log('Помилка запиту геокодування:', error.message);
      setSuggestedOrigins([]);
    }
  };

  const handleDestinationChange = async event => {
    const value = event.target.value;
    setDestination(value);

    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          value
        )}&key=4b6e7d31f0654074aa698fd64a45063c`
      );
      const suggestions = response.data.results;
      setSuggestedDestinations(suggestions);
    } catch (error) {
      console.log('Помилка запиту геокодування:', error.message);
      setSuggestedDestinations([]);
    }
  };

  const handleSuggestionOriginSelected = suggestion => {
    if (suggestion.components) {
      const { city, country } = suggestion.components;
      setOrigin(city);
      setOriginCountry(country);
      const { lat, lng } = suggestion.geometry;
      setRoute(prevRoute => [[lat, lng], prevRoute[1]]);
    }
    setSuggestedOrigins([]);
  };
  const handleSuggestionDestinationSelected = suggestion => {
    if (suggestion.components) {
      const { city, country } = suggestion.components;

      setDestination(city);
      setDestinationCountry(country);
      const { lat, lng } = suggestion.geometry;
      setRoute(prevRoute => [prevRoute[0], [lat, lng]]);
    }
    setSuggestedDestinations([]);
  };

  const handleDateChange = event => {
    const value = event.target.value;
    setDate(value);
  };

  const handleWeightChange = event => {
    const value = event.target.value;
    setWeight(value);
  };
  useEffect(() => {
    //Отримуємо відстань у кілометрах
    if (origin !== '' && destination !== '' && weight !== 0) {
      const newDistance = getDistance(route);
      const shippingCost = calculateShippingCost(
        newDistance,
        weight,
        10,
        getInternational(origin, destination)
      );
      // Викликаємо функцію calculateShippingCost
      setDistance(newDistance);
      setShippingCost(shippingCost);
    }
  }, [origin, destination, route, weight]);

  const currentDate = new Date().toISOString().split('T')[0];
  const handleFormSubmit = event => {
    event.preventDefault();

    // Створення нового об'єкта з введеними даними

    // Отримання раніше збереженого масиву з локального сховища (якщо він існує)
    const storedOrders = getShipments();
    const newOrder = {
      id: storedOrders.length + 1,
      shipmentNumber: origin[0] + destination[0] + (storedOrders.length + 1),
      origin: {
        city: origin,
        country: originCountry,
      },
      destination: {
        city: destination,
        country: destinationCountry,
      },
      weight: Number(weight),
      status: 'В процесі',
      date: new Date(date),
      route: route,
      isInternational() {
        return this.origin.country !== this.destination.country;
      },
      distance: distance,
      shippingCost: shippingCost,
    };

    console.log(newOrder);

    // Додавання нового замовлення до масиву
    const shipments = [newOrder, ...storedOrders];
    // Збереження оновленого масиву в локальне сховище
    console.log(shipments);
    localStorage.setItem('shipments1', JSON.stringify(shipments));
    setShipment(newOrder);
    setCreateElement(true);
    // Очищення форми після збереження
    setOrigin('');
    setDestination('');
    setOriginCountry('');
    setDestinationCountry('');
    setWeight(0);
    setDate(currentDate);
    setRoute([]);
    setShippingCost(0);
    setDistance(0);

    // Ваш код обробки форми

    // Показати Toast повідомлення
    toast.success('Замовлення успішно збережено!', {
      position: toast.POSITION.TOP_RIGHT, // Встановлення позиції Toast
      autoClose: 3000, // Автоматичне закриття через 3 секунди
      hideProgressBar: true, // Відображення прогрес-бару
      closeOnClick: true, // Закриття Toast при кліку
      pauseOnHover: true, // Пауза при наведенні курсору
      draggable: true, // Можливість перетягування Toast
    });

    // Виведення підтвердження успішного збереження
  };
  const handleNewShipment = () => {
    setCreateElement(false);
  };
  return (
    <Container>
      {!createElement ? (
        <Title style={{ marginTop: '0px', paddingTop: '20px' }}>
          Створити нове замовлення
        </Title>
      ) : (
        <Title style={{ marginTop: '0px', paddingTop: '20px' }}>
          Ваше замовлення
        </Title>
      )}
      <div style={{ display: 'flex' }}>
        {!createElement && (
          <form
            style={{
              width: '750px',
              margin: '0 auto', // Розміщення по центру
              padding: '20px', // Відступи від країв форми
              border: '1px solid #ccc', // Рамка форми
              borderRadius: '5px', // Закруглені кути форми
              boxSizing: 'border-box', // Загальна ширина враховує відступи та рамку
            }}
            onSubmit={handleFormSubmit}
          >
            <div>
              <label htmlFor="origin">Початковий пункт:</label>
              <input
                type="text"
                id="origin"
                value={origin}
                onChange={handleOriginChange}
                style={{
                  width: '100%',
                  padding: '5px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f5f5f5',
                }}
              />
              <ul style={{ listStyle: 'none', padding: '0' }}>
                {suggestedOrigins
                  .filter(
                    suggestion => suggestion.components.city !== undefined
                  )
                  .map(suggestion => (
                    <li
                      key={suggestion.geometry.lat + suggestion.geometry.lng}
                      onClick={() => handleSuggestionOriginSelected(suggestion)}
                    >
                      {suggestion.formatted}
                    </li>
                  ))}
              </ul>
              <label htmlFor="originCountry">Країна походження:</label>
              <input
                type="text"
                id="originCountry"
                value={originCountry}
                disabled
                style={{
                  width: '100%',
                  padding: '5px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f5f5f5',
                }}
              />
            </div>

            <div>
              <label htmlFor="destination">Кінцевий пункт:</label>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={handleDestinationChange}
                style={{
                  width: '100%',
                  padding: '5px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f5f5f5',
                }}
              />
              <ul style={{ listStyle: 'none', padding: '0' }}>
                {suggestedDestinations
                  .filter(
                    suggestion => suggestion.components.city !== undefined
                  )
                  .map(suggestion => (
                    <li
                      key={suggestion.geometry.lat + suggestion.geometry.lng}
                      onClick={() =>
                        handleSuggestionDestinationSelected(suggestion)
                      }
                    >
                      {suggestion.formatted}
                    </li>
                  ))}
              </ul>
              <label htmlFor="destinationCountry">Країна призначення:</label>
              <input
                type="text"
                id="destinationCountry"
                value={destinationCountry}
                disabled
                style={{
                  width: '100%',
                  padding: '5px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f5f5f5',
                }}
              />
            </div>
            <div style={{ display: 'flex' }}>
              <div>
                <label htmlFor="date" style={{ marginRight: '20px' }}>
                  Дата:
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={handleDateChange}
                  min={currentDate}
                />
              </div>

              <div>
                <label htmlFor="weight" style={{ marginRight: '20px' }}>
                  Вага, кг:
                </label>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={handleWeightChange}
                  min={0}
                />
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div>
                <label htmlFor="shippingCost" style={{ marginRight: '10px' }}>
                  Відстань:
                </label>
                <input
                  type="text"
                  id="distance"
                  value={distance}
                  disabled
                  style={{ fontWidth: 700 }}
                />
              </div>

              <div>
                <label htmlFor="shippingCost" style={{ marginRight: '10px' }}>
                  Вартість доставки:
                </label>
                <input
                  type="text"
                  id="shippingCost"
                  value={shippingCost}
                  disabled
                  style={{ fontWidth: 700 }}
                />
              </div>
            </div>
            <button
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '3px',
                border: 'none',
                backgroundColor: '#007bff',
                color: '#fff',
                cursor: 'pointer',
              }}
              type="submit"
            >
              Відправити
            </button>
          </form>
        )}

        {createElement && (
          <div style={{ width: '750px' }}>
            <Link
              to={'/shipments'}
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
              <Back style={{ marginRight: '150px' }}>
                Перейти до списку перевезень
              </Back>
            </Link>
            <button
              style={{
                padding: '10px',
                borderRadius: '3px',
                border: 'none',
                backgroundColor: '#007bff',
                color: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => {
                handleNewShipment();
              }}
              type="button"
            >
              Зробити нове замовлення
            </button>
            <ShipmentBlock shipment={shipment} condition={false} />
            <MapWithRoute coordinates={shipment.route} shipment={shipment} />
          </div>
        )}
      </div>
      <ToastContainer />
    </Container>
  );
};

export default OrderForm;
