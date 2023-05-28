import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  formControl: {
    marginRight: theme.spacing(2),
    minWidth: 200,
  },
}));

export const SortingBlock = React.forwardRef(
  ({ sortField, sortOrder, handleSortChange }, ref) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel>Поле сортування</InputLabel>
          <Select value={sortField} onChange={handleSortChange('sortField')}>
            <MenuItem value="shipmentNumber">Номер перевезення</MenuItem>
            <MenuItem value="status">Статус</MenuItem>
            <MenuItem value="date">Дата</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Порядок сортування</InputLabel>
          <Select value={sortOrder} onChange={handleSortChange('sortOrder')}>
            <MenuItem value="asc">За зростанням</MenuItem>
            <MenuItem value="desc">За спаданням</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
);
