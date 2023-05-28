import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

const OrderForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async searchValue => {
    try {
      const response = await axios.get(
        `http://api.geonames.org/searchJSON?q=${searchValue}&maxRows=10&username=kastiel`
      );
      return response.data.geonames;
    } catch (error) {
      console.log('Помилка запиту:', error.message);
      return [];
    }
  };

  const handleOriginChange = async event => {
    const value1 = event.target.value;
    setOrigin(value1);

    const suggestions = await fetchSuggestions(value1);
    if (value1 === '') {
      setSuggestions([]);
    } else {
      setSuggestions(suggestions);
    }
  };

  const handleDestinationChange = async event => {
    const value = event.target.value;
    setDestination(value);

    const suggestions = await fetchSuggestions(value);
    setSuggestions(suggestions);
  };

  const handleDateChange = event => {
    const value = event.target.value;
    setDate(value);
  };

  const handleWeightChange = event => {
    const value = event.target.value;
    setWeight(value);
  };

  const handleSuggestionSelected = suggestion => {
    setOrigin(suggestion.toponymName);
    //setDestination(suggestion.display_name);
    setSuggestions([]);
  };

  return (
    <form>
      <div>
        <label htmlFor="origin">Початковий пункт:</label>
        <input
          type="text"
          id="origin"
          value={origin}
          onChange={handleOriginChange}
        />
        <ul>
          {suggestions.map(suggestion => (
            <li
              key={nanoid()}
              onClick={() => handleSuggestionSelected(suggestion)}
            >
              {suggestion.toponymName},{suggestion.countryName}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label htmlFor="destination">Кінцевий пункт:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={handleDestinationChange}
        />
        {/* <ul>
          {suggestions.map(suggestion => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSuggestionSelected(suggestion)}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul> */}
      </div>

      <div>
        <label htmlFor="date">Дата:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
      </div>

      <div>
        <label htmlFor="weight">Вага:</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>

      <button type="submit">Відправити</button>
    </form>
  );
};

export default OrderForm;
