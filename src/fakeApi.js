const cargoShipments = [
  {
    id: 1,
    shipmentNumber: 'ABC123',
    origin: { city: 'Київ', country: 'Україна' },
    destination: { city: 'Львів', country: 'Україна' },
    weight: 500,
    status: 'В процесі',
    date: new Date('2023-05-01'),
    route: [
      [50.4501, 30.5234],
      [49.8397, 24.0297],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 2,
    shipmentNumber: 'DEF456',
    origin: { city: 'Одеса', country: 'Україна' },
    destination: { city: 'Харків', country: 'Україна' },
    weight: 750,
    status: 'В процесі',
    date: new Date('2023-05-10'),
    route: [
      [30.7233, 46.4825],
      [36.2304, 49.9935],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 3,
    shipmentNumber: 'GHI789',
    origin: { city: 'Львів', country: 'Україна' },
    destination: { city: 'Дніпро', country: 'Україна' },
    weight: 300,
    status: 'Відмінено',
    date: new Date('2023-05-15'),
    route: [
      [24.0297, 49.8397],
      [35.0462, 48.4647],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 4,
    shipmentNumber: 'JKL012',
    origin: { city: 'Лондон', country: 'Велика Британія' },
    destination: { city: 'Мадрид', country: 'Іспанія' },
    weight: 900,
    status: 'В процесі',
    date: new Date('2023-05-05'),
    route: [
      [-0.1278, 51.5074],
      [-3.7038, 40.4168],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 5,
    shipmentNumber: 'MNO345',
    origin: { city: 'Париж', country: 'Франція' },
    destination: { city: 'Берлін', country: 'Німеччина' },
    weight: 600,
    status: 'Доставлено',
    date: new Date('2023-05-12'),
    route: [
      [2.3522, 48.8566],
      [13.405, 52.52],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 6,
    shipmentNumber: 'PQR678',
    origin: { city: 'Рим', country: 'Італія' },
    destination: { city: 'Амстердам', country: 'Нідерланди' },
    weight: 400,
    status: 'Доставлено',
    date: new Date('2023-05-18'),
    route: [
      [12.4964, 41.9028],
      [4.8952, 52.3705],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 7,
    shipmentNumber: 'STU901',
    origin: { city: 'Варшава', country: 'Польща' },
    destination: { city: 'Амстердам', country: 'Нідерланди' },
    weight: 200,
    status: 'Доставлено',
    date: new Date('2023-05-15'),
    route: [
      [21.0122, 52.2297],
      [4.8952, 52.3705],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 8,
    shipmentNumber: 'VWX234',
    origin: { city: 'Варшава', country: 'Польща' },
    destination: { city: 'Прага', country: 'Чехія' },
    weight: 550,
    status: 'В процесі',
    date: new Date('2023-05-05'),
    route: [
      [21.0122, 52.2297],
      [14.4378, 50.0755],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 9,
    shipmentNumber: 'YZA567',
    origin: { city: 'Будапешт', country: 'Угорщина' },
    destination: { city: 'Відень', country: 'Австрія' },
    weight: 350,
    status: 'В процесі',
    date: new Date('2023-05-12'),
    route: [
      [19.0402, 47.4979],
      [16.3738, 48.2082],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 10,
    shipmentNumber: 'BCD890',
    origin: { city: 'Багдад', country: 'Ірак' },
    destination: { city: 'Київ', country: 'Україна' },
    weight: 700,
    status: 'Доставлено',
    date: new Date('2023-05-18'),
    route: [
      [44.3654, 33.3152],
      [30.5234, 50.4501],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 11,
    shipmentNumber: 'EFG234',
    origin: { city: 'Будапешт', country: 'Угорщина' },
    destination: { city: 'Бішкек', country: 'Киргизстан' },
    weight: 800,
    status: 'В процесі',
    date: new Date('2023-05-20'),
    route: [
      [19.0402, 47.4979],
      [74.5852, 42.8746],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 12,
    shipmentNumber: 'HIJ567',
    origin: { city: 'Астана', country: 'Казахстан' },
    destination: { city: 'Ташкент', country: 'Узбекистан' },
    weight: 450,
    status: 'Доставлено',
    date: new Date('2023-05-25'),
    route: [
      [71.4304, 51.1694],
      [69.2401, 41.2995],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 13,
    shipmentNumber: 'KLM901',
    origin: { city: 'Алжир', country: 'Алжир' },
    destination: { city: 'Багдад', country: 'Ірак' },
    weight: 250,
    status: 'Доставлено',
    date: new Date('2023-05-28'),
    route: [
      [3.3792, 36.7373],
      [44.3654, 33.3152],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 14,
    shipmentNumber: 'NOP234',
    origin: { city: 'Алжир', country: 'Алжир' },
    destination: { city: 'Каїр', country: 'Єгипет' },
    weight: 350,
    status: 'Відмінено',
    date: new Date('2023-06-01'),
    route: [
      [3.3792, 36.7373],
      [31.2357, 30.0444],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 15,
    shipmentNumber: 'QRS678',
    origin: { city: 'Марракеш', country: 'Марокко' },
    destination: { city: 'Лагос', country: 'Нігерія' },
    weight: 600,
    status: 'В процесі',
    date: new Date('2023-06-05'),
    route: [
      [-8.0039, 31.6295],
      [3.3792, 6.5244],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 16,
    shipmentNumber: 'TUV901',
    origin: { city: 'Дакар', country: 'Сенегал' },
    destination: { city: 'Дар-ес-Салам', country: 'Танзанія' },
    weight: 400,
    status: 'Доставлено',
    date: new Date('2023-06-10'),
    route: [
      [-17.4417, 14.6937],
      [39.2083, -6.7924],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 17,
    shipmentNumber: 'WXY234',
    origin: { city: 'Сіднеї', country: 'Австралія' },
    destination: { city: 'Мельбурн', country: 'Австралія' },
    weight: 300,
    status: 'Доставлено',
    date: new Date('2023-06-20'),
    route: [
      [151.2093, -33.8688],
      [144.9631, -37.8136],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 18,
    shipmentNumber: 'YZA567',
    origin: { city: 'Торонто', country: 'Канада' },
    destination: { city: 'Ванкувер', country: 'Канада' },
    weight: 500,
    status: 'Доставлено',
    date: new Date('2023-06-15'),
    route: [
      [-79.3832, 43.6532],
      [-123.1216, 49.2827],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 19,
    shipmentNumber: 'BCD890',
    origin: { city: 'Нью-Йорк', country: 'США' },
    destination: { city: 'Лос-Анджелес', country: 'США' },
    weight: 700,
    status: 'В процесі',
    date: new Date('2023-06-25'),
    route: [
      [-74.0059, 40.7128],
      [-118.2437, 34.0522],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 20,
    shipmentNumber: 'EFG234',
    origin: { city: 'Мехіко', country: 'Мексика' },
    destination: { city: 'Буенос-Айрес', country: 'Аргентина' },
    weight: 800,
    status: 'Доставлено',
    date: new Date('2023-06-30'),
    route: [
      [-99.1332, 19.4326],
      [-58.3816, -34.6037],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 21,
    shipmentNumber: 'HIJ567',
    origin: { city: 'Сантьяго', country: 'Чилі' },
    destination: { city: 'Ліма', country: 'Перу' },
    weight: 450,
    status: 'В процесі',
    date: new Date('2023-07-05'),
    route: [
      [-70.6483, -33.4489],
      [-77.0428, -12.0464],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 22,
    shipmentNumber: 'KLM901',
    origin: { city: 'Каїр', country: 'Єгипет' },
    destination: { city: 'Кейптаун', country: 'ПАР' },
    weight: 250,
    status: 'Доставлено',
    date: new Date('2023-07-10'),
    route: [
      [31.2357, 30.0444],
      [18.4241, -33.9249],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 23,
    shipmentNumber: 'NOP234',
    origin: { city: 'Найробі', country: 'Кенія' },
    destination: { city: 'Джуба', country: 'Південний Судан' },
    weight: 350,
    status: 'Відмінено',
    date: new Date('2023-07-20'),
    route: [
      [36.8219, -1.2864],
      [31.582, 4.8594],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 24,
    shipmentNumber: 'QRS678',
    origin: { city: 'Луанда', country: 'Ангола' },
    destination: { city: 'Дурбан', country: 'ПАР' },
    weight: 600,
    status: 'В процесі',
    date: new Date('2023-07-20'),
    route: [
      [13.242, -8.8391],
      [31.0292, -29.8587],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
  {
    id: 25,
    shipmentNumber: 'TUV901',
    origin: { city: 'Сеул', country: 'Південна Корея' },
    destination: { city: 'Токіо', country: 'Японія' },
    weight: 400,
    status: 'Доставлено',
    date: new Date('2023-07-25'),
    route: [
      [126.978, 37.5665],
      [139.6917, 35.6895],
    ],
    isInternational() {
      return this.origin.country !== this.destination.country;
    },
  },
];

export const getShipments = () => {
  return cargoShipments;
};

export const getShipmentsById = shipmentId => {
  return cargoShipments.find(shipment => shipment.id === shipmentId);
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
export function getDistance(shipment) {
  const earthRadius = 6371; // Радіус Землі в кілометрах

  const dLat = toRadians(shipment.route[1][0] - shipment.route[0][0]);
  const dLon = toRadians(shipment.route[1][1] - shipment.route[0][1]);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(shipment.route[0][0])) *
      Math.cos(toRadians(shipment.route[1][0])) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
export function getZoom(distance) {
  if (distance >= 2000) {
    return 2;
  }
  if (distance >= 1200) {
    return 3;
  }
  if (distance >= 1000) {
    return 4;
  }

  if (distance >= 600) {
    return 5;
  }
}
// function calculateShippingCost(
//   distance,
//   weight,
//   pricePerKilometer,
//   transportType
// ) {
//   // Розрахунок базової вартості перевезення
//   let baseCost = distance * pricePerKilometer;

//   // Застосування націнки в залежності від типу перевезення
//   if (transportType === 'international') {
//     baseCost *= 1.5; // Наприклад, 50% націнка для міжнародного перевезення
//   } else if (transportType === 'domestic') {
//     baseCost *= 1; // Наприклад, без націнки для внутрішнього перевезення
//   }

//   // Розрахунок націнки в залежності від ваги
//   if (weight > 1000) {
//     const overweightCharge = (weight - 1000) * 0.1; // Наприклад, $0.1 за кожен кілограм ваги понад 1000 кг
//     baseCost += overweightCharge;
//   }

//   return baseCost;
// }
// async function getCoordinatesByPlaceName(placeName) {
//   const apiKey = 'YOUR_MAPBOX_API_KEY'; // Замініть на свій ключ API Mapbox

//   try {
//     const response = await fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//         placeName
//       )}.json?access_token=${apiKey}`
//     );
//     const data = await response.json();

//     if (data.features && data.features.length > 0) {
//       const coordinates = data.features[0].center;
//       return coordinates;
//     } else {
//       throw new Error('Location not found');
//     }
//   } catch (error) {
//     console.error('Error:', error.message);
//     return null;
//   }
// }
