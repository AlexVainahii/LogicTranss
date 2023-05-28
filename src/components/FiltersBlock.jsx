import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginRight: theme.spacing(2),
    width: '200px',
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

export const FiltersBlock = ({
  filters,
  handleFilterChange,
  handleResetFilters,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        label="Номер перевезення"
        name="shipmentNumber"
        value={filters.shipmentNumber}
        onChange={handleFilterChange}
      />
      <TextField
        className={classes.textField}
        label="Статус"
        name="status"
        value={filters.status}
        onChange={handleFilterChange}
      />
      <TextField
        className={classes.textField}
        label="Початковий пункт"
        name="originCity"
        value={filters.originCity}
        onChange={handleFilterChange}
      />
      <TextField
        className={classes.textField}
        label="Кінцевий пункт"
        name="destinationCity"
        value={filters.destinationCity}
        onChange={handleFilterChange}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleResetFilters}
      >
        Скинути фільтри
      </Button>
    </div>
  );
};
