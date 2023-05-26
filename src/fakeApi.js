const cargoShipments = [
  {
    id: 1,
    shipmentNumber: 'ABC123',
    origin: {
      city: 'Київ',
      country: 'Україна',
    },
    destination: {
      city: 'Львів',
      country: 'Україна',
    },
    weight: 500,
    status: 'В процесі',
    date: new Date('2023-05-01'),
    route: [
      [50.4501, 30.5234], // Координати початкового пункту
      [49.8397, 24.0297], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 2,
    shipmentNumber: 'DEF456',
    origin: {
      city: 'Одеса',
      country: 'Україна',
    },
    destination: {
      city: 'Харків',
      country: 'Україна',
    },
    weight: 750,
    status: 'Доставлено',
    date: new Date('2023-05-10'),
    route: [
      [46.4825, 30.7233], // Координати початкового пункту
      [49.9935, 36.2304], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 3,
    shipmentNumber: 'GHI789',
    origin: {
      city: 'Львів',
      country: 'Україна',
    },
    destination: {
      city: 'Дніпро',
      country: 'Україна',
    },
    weight: 300,
    status: 'Відмінено',
    date: new Date('2023-05-15'),
    route: [
      [49.8397, 24.0297], // Координати початкового пункту
      [48.4647, 35.0462], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  // Додаткові об'єкти вантажних перевезень
  {
    id: 4,
    shipmentNumber: 'JKL012',
    origin: {
      city: 'Лондон',
      country: 'Велика Британія',
    },
    destination: {
      city: 'Мадрид',
      country: 'Іспанія',
    },
    weight: 900,
    status: 'В процесі',
    date: new Date('2023-05-05'),
    route: [
      [51.5074, -0.1278], // Координати початкового пункту
      [40.4168, -3.7038], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 5,
    shipmentNumber: 'MNO345',
    origin: {
      city: 'Париж',
      country: 'Франція',
    },
    destination: {
      city: 'Берлін',
      country: 'Німеччина',
    },
    weight: 600,
    status: 'Доставлено',
    date: new Date('2023-05-12'),
    route: [
      [48.8566, 2.3522], // Координати початкового пункту
      [52.52, 13.405], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 6,
    shipmentNumber: 'PQR678',
    origin: {
      city: 'Рим',
      country: 'Італія',
    },
    destination: {
      city: 'Афіни',
      country: 'Греція',
    },
    weight: 400,
    status: 'Відмінено',
    date: new Date('2023-05-18'),
    route: [
      [41.9028, 12.4964], // Координати початкового пункту
      [37.9838, 23.7275], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  // ... Додайте ще об'єкти вантажних перевезень за потребою
];

export const getShipments = () => {
  console.log(cargoShipments);
  return cargoShipments;
};

export const getShipmentsById = productId => {
  return cargoShipments.find(product => product.id === productId);
};
