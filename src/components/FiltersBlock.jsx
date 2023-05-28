import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const FiltersBlock = ({
  filters,
  handleFilterChange,
  handleResetFilters,
}) => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 2,
      }}
    >
      <TextField
        sx={{
          marginRight: 2,
          width: '200px',
        }}
        label="Номер перевезення"
        name="shipmentNumber"
        value={filters.shipmentNumber}
        onChange={handleFilterChange}
      />
      <TextField
        sx={{
          marginRight: 2,
          width: '200px',
        }}
        label="Статус"
        name="status"
        value={filters.status}
        onChange={handleFilterChange}
      />
      <TextField
        sx={{
          marginRight: 2,
          width: '200px',
        }}
        label="Початковий пункт"
        name="originCity"
        value={filters.originCity}
        onChange={handleFilterChange}
      />
      <TextField
        sx={{
          marginRight: 2,
          width: '200px',
        }}
        label="Кінцевий пункт"
        name="destinationCity"
        value={filters.destinationCity}
        onChange={handleFilterChange}
      />
      <Button
        sx={{
          marginLeft: 2,
        }}
        variant="contained"
        color="primary"
        onClick={handleResetFilters}
      >
        Скинути фільтри
      </Button>
    </div>
  );
};
