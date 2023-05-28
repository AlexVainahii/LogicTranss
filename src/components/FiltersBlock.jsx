import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';

export const FiltersBlock = ({
  filters,
  handleFilterChange,
  handleResetFilters,
}) => {
  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  return (
    <div
      style={{
        marginBottom: 16,
      }}
    >
      <Button startIcon={<FilterListIcon />} onClick={toggleFilter}>
        Фільтри
      </Button>
      {isFilterVisible && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 16,
          }}
        >
          <TextField
            style={{
              marginRight: 16,
              width: '180px',
            }}
            label="Номер перевезення"
            name="shipmentNumber"
            value={filters.shipmentNumber}
            onChange={handleFilterChange}
          />
          <TextField
            style={{
              marginRight: 16,
              width: '180px',
            }}
            label="Статус"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          />
          <TextField
            style={{
              marginRight: 16,
              width: '180px',
            }}
            label="Початковий пункт"
            name="originCity"
            value={filters.originCity}
            onChange={handleFilterChange}
          />
          <TextField
            style={{
              marginRight: 16,
              width: '180px',
            }}
            label="Кінцевий пункт"
            name="destinationCity"
            value={filters.destinationCity}
            onChange={handleFilterChange}
          />
          <IconButton
            style={{
              marginLeft: 16,
            }}
            variant="contained"
            color="primary"
            onClick={handleResetFilters}
          >
            <ClearIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};
