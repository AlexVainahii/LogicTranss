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
    status: 'В процесі',
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
    status: 'В процесі',
    date: new Date('2023-05-18'),
    route: [
      [41.9028, 12.4964], // Координати початкового пункту
      [37.9838, 23.7275], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 7,
    shipmentNumber: 'GHI7',
    origin: {
      city: 'Львів',
      country: 'Україна',
    },
    destination: {
      city: 'Дніпро',
      country: 'Україна',
    },
    weight: 300,
    status: 'В процесі',
    date: new Date('2023-05-15'),
    route: [
      [49.8397, 24.0297], // Координати початкового пункту
      [48.4647, 35.0462], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 8,
    shipmentNumber: 'JKL8',
    origin: {
      city: 'Лондон',
      country: 'Велика Британія',
    },
    destination: {
      city: 'Мадрид',
      country: 'Іспанія',
    },
    weight: 900,
    status: 'Доставлено',
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
    id: 9,
    shipmentNumber: 'MNO9',
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
    id: 10,
    shipmentNumber: 'PQR10',
    origin: {
      city: 'Рим',
      country: 'Італія',
    },
    destination: {
      city: 'Афіни',
      country: 'Греція',
    },
    weight: 400,
    status: 'Доставлено',
    date: new Date('2023-05-18'),
    route: [
      [41.9028, 12.4964], // Координати початкового пункту
      [37.9838, 23.7275], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 11,
    shipmentNumber: 'STU11',
    origin: {
      city: 'Мадрид',
      country: 'Іспанія',
    },
    destination: {
      city: 'Париж',
      country: 'Франція',
    },
    weight: 700,
    status: 'Доставлено',
    date: new Date('2023-05-20'),
    route: [
      [40.4168, -3.7038], // Координати початкового пункту
      [48.8566, 2.3522], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 12,
    shipmentNumber: 'VWX12',
    origin: {
      city: 'Берлін',
      country: 'Німеччина',
    },
    destination: {
      city: 'Лондон',
      country: 'Велика Британія',
    },
    weight: 550,
    status: 'Доставлено',
    date: new Date('2023-05-25'),
    route: [
      [52.52, 13.405], // Координати початкового пункту
      [51.5074, -0.1278], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 13,
    shipmentNumber: 'YZA13',
    origin: {
      city: 'Афіни',
      country: 'Греція',
    },
    destination: {
      city: 'Рим',
      country: 'Італія',
    },
    weight: 400,
    status: 'Відмінено',
    date: new Date('2023-05-28'),
    route: [
      [37.9838, 23.7275], // Координати початкового пункту
      [41.9028, 12.4964], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  // Ще 19 об'єктів за потребою
  {
    id: 14,
    shipmentNumber: 'BCD14',
    origin: {
      city: 'Амстердам',
      country: 'Нідерланди',
    },
    destination: {
      city: 'Брюссель',
      country: 'Бельгія',
    },
    weight: 800,
    status: 'В процесі',
    date: new Date('2023-06-01'),
    route: [
      [52.3702, 4.8952], // Координати початкового пункту
      [50.8503, 4.3517], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 15,
    shipmentNumber: 'EFG15',
    origin: {
      city: 'Варшава',
      country: 'Польща',
    },
    destination: {
      city: 'Будапешт',
      country: 'Угорщина',
    },
    weight: 650,
    status: 'В процесі',
    date: new Date('2023-06-05'),
    route: [
      [52.2297, 21.0122], // Координати початкового пункту
      [47.4979, 19.0402], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 16,
    shipmentNumber: 'HIJ16',
    origin: {
      city: 'Копенгаген',
      country: 'Данія',
    },
    destination: {
      city: 'Стокгольм',
      country: 'Швеція',
    },
    weight: 500,
    status: 'Відмінено',
    date: new Date('2023-06-10'),
    route: [
      [55.6761, 12.5683], // Координати початкового пункту
      [59.3293, 18.0686], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 17,
    shipmentNumber: 'KLM17',
    origin: {
      city: 'Хельсінкі',
      country: 'Фінляндія',
    },
    destination: {
      city: 'Осло',
      country: 'Норвегія',
    },
    weight: 300,
    status: 'Доставлено',
    date: new Date('2023-06-15'),
    route: [
      [60.1699, 24.9384], // Координати початкового пункту
      [59.9139, 10.7522], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 18,
    shipmentNumber: 'NOP18',
    origin: {
      city: 'Відень',
      country: 'Австрія',
    },
    destination: {
      city: 'Прага',
      country: 'Чехія',
    },
    weight: 450,
    status: 'Доставлено',
    date: new Date('2023-06-20'),
    route: [
      [48.2082, 16.3738], // Координати початкового пункту
      [50.0755, 14.4378], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 19,
    shipmentNumber: 'QRS19',
    origin: {
      city: 'Варна',
      country: 'Болгарія',
    },
    destination: {
      city: 'Софія',
      country: 'Болгарія',
    },
    weight: 250,
    status: 'Доставлено',
    date: new Date('2023-06-25'),
    route: [
      [43.2141, 27.9147], // Координати початкового пункту
      [42.6977, 23.3219], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 20,
    shipmentNumber: 'TUV20',
    origin: {
      city: 'Будапешт',
      country: 'Угорщина',
    },
    destination: {
      city: 'Відень',
      country: 'Австрія',
    },
    weight: 550,
    status: 'Доставлено',
    date: new Date('2023-06-30'),
    route: [
      [47.4979, 19.0402], // Координати початкового пункту
      [48.2082, 16.3738], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 21,
    shipmentNumber: 'WXY21',
    origin: {
      city: 'Стокгольм',
      country: 'Швеція',
    },
    destination: {
      city: 'Осло',
      country: 'Норвегія',
    },
    weight: 400,
    status: 'Доставлено',
    date: new Date('2023-07-05'),
    route: [
      [59.3293, 18.0686], // Координати початкового пункту
      [59.9139, 10.7522], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 22,
    shipmentNumber: 'XYZ22',
    origin: {
      city: 'Осло',
      country: 'Норвегія',
    },
    destination: {
      city: 'Хельсінкі',
      country: 'Фінляндія',
    },
    weight: 300,
    status: 'Відмінено',
    date: new Date('2023-07-10'),
    route: [
      [59.9139, 10.7522], // Координати початкового пункту
      [60.1699, 24.9384], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  // Ще 12 об'єктів за потребою
  {
    id: 23,
    shipmentNumber: 'ABC23',
    origin: {
      city: 'Мадрид',
      country: 'Іспанія',
    },
    destination: {
      city: 'Рим',
      country: 'Італія',
    },
    weight: 500,
    status: 'В процесі',
    date: new Date('2023-07-15'),
    route: [
      [40.4168, -3.7038], // Координати початкового пункту
      [41.9028, 12.4964], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 24,
    shipmentNumber: 'DEF24',
    origin: {
      city: 'Париж',
      country: 'Франція',
    },
    destination: {
      city: 'Амстердам',
      country: 'Нідерланди',
    },
    weight: 350,
    status: 'Доставлено',
    date: new Date('2023-07-20'),
    route: [
      [48.8566, 2.3522], // Координати початкового пункту
      [52.3702, 4.8952], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 25,
    shipmentNumber: 'GHI25',
    origin: {
      city: 'Лондон',
      country: 'Велика Британія',
    },
    destination: {
      city: 'Берлін',
      country: 'Німеччина',
    },
    weight: 450,
    status: 'Доставлено',
    date: new Date('2023-07-25'),
    route: [
      [-0.1278, 51.5074], // Координати початкового пункту
      [13.405, 52.52], // Координати кінцевого пункту
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
];
const updatedCargoShipments = cargoShipments.map(shipment => {
  const updatedRoute = shipment.route.map(coordinates => {
    return [coordinates[1], coordinates[0]]; // Міняємо довжину та широту місцями
  });

  return {
    ...shipment,
    route: updatedRoute,
  };
});
export const getInternational = (origin, destination) => {
  return origin !== destination;
};

export const handleSaveToLocalStorage = () => {
  const shipments = JSON.stringify(updatedCargoShipments);

  localStorage.setItem('shipments1', shipments);

  console.log('Вантажні відправлення збережено в локальному сховищі');
};
export const getShipmentsFromLocalStorage = () => {
  const shipments = localStorage.getItem('shipments1');
  if (shipments) {
    return JSON.parse(shipments);
  }

  return null;
};
export const getShipments = () => {
  const shipmentsLocal = getShipmentsFromLocalStorage();
  return shipmentsLocal;
};
export const isInternational = shipment => {
  return shipment.origin.country !== shipment.destination.country;
};

export const getShipmentsById = shipmentId => {
  const shipmentsLocal = getShipmentsFromLocalStorage();
  return shipmentsLocal.find(shipment => shipment.id === shipmentId);
};
export const getcentrMap = shipment => {
  const centerLat = (shipment.route[0][0] + shipment.route[1][0]) / 2;
  const centerLng = (shipment.route[0][1] + shipment.route[1][1]) / 2;
  return [centerLng, centerLat];
};
export const getMarker = shipment => {
  const route = shipment.route.map(cord => cord);
  const g = route[0][0];
  route[0][0] = route[0][1];
  route[0][1] = g;
  const p = route[1][0];
  route[1][0] = route[1][1];
  route[1][1] = p;
  return route;
};
export function getDistance(route) {
  const earthRadius = 6371; // Радіус Землі в кілометрах

  const dLat = toRadians(route[1][0] - route[0][0]);
  const dLon = toRadians(route[1][1] - route[0][1]);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(route[0][0])) *
      Math.cos(toRadians(route[1][0])) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return Math.round(distance);
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
export function getZoom(distance) {
  if (distance > 2000) {
    return 1;
  }
  if (distance > 1600) {
    return 2;
  }
  if (distance > 1200) {
    return 3;
  }

  if (distance > 800) {
    return 4;
  }
  return 5;
}
export function calculateShippingCost(
  distance,
  weight,
  pricePerKilometer,
  transportType
) {
  // Розрахунок базової вартості перевезення
  let baseCost = distance * pricePerKilometer;

  // Застосування націнки в залежності від типу перевезення
  if (transportType) {
    baseCost *= 1.5; // Наприклад, 50% націнка для міжнародного перевезення
  } else {
    baseCost *= 1; // Наприклад, без націнки для внутрішнього перевезення
  }

  // Розрахунок націнки в залежності від ваги
  if (weight > 1000) {
    const overweightCharge = (weight - 1000) * 0.1; // Наприклад, $0.1 за кожен кілограм ваги понад 1000 кг
    baseCost += overweightCharge;
  }

  return Math.round(baseCost);
}
