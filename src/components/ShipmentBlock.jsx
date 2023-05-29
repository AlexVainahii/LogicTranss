import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  CardWrapper,
  ProductName,
  Wrapper,
  Status,
  Wrap,
  WrapArrow,
  Dates,
  Pag,
  Weight,
  ButtonWrapper,
} from './ShipmentBlock.styled';
import {
  StyledIconRadioButton,
  StyledIconCancelButton,
  StyledIconCheckButton,
  StyledIconDeleteButton,
} from './ShipmentBlockIcon.styled';
import { isInternational } from 'fakeApi';

const getStatusColor = status => {
  let className = 'default';

  switch (status) {
    case 'В процесі':
      className = 'in-progress';
      break;
    case 'Доставлено':
      className = 'completed';
      break;
    default:
      className = 'default';
      break;
  }

  return className;
};

export const ShipmentBlock = ({
  shipment,
  condition,
  handleStatusChange,
  handleDelete,
}) => {
  const location = useLocation();

  return (
    <CardWrapper key={shipment.id} className={getStatusColor(shipment.status)}>
      <Link
        to={`${shipment.id}`}
        state={{ from: location }}
        onClick={!condition ? e => e.preventDefault() : undefined}
        key={shipment.id}
        shipment={shipment}
        condition={true}
        handleStatusChange={handleStatusChange}
        handleDelete={handleDelete}
      >
        <ProductName>
          {isInternational(shipment)
            ? 'Міжнародне перевезення'
            : 'Внутрішнє перевезення'}{' '}
          №: {shipment.shipmentNumber}
          <Weight>Вага: {shipment.weight} кг</Weight>
          <Dates>Дата: {new Date(shipment.date).toLocaleDateString()}</Dates>
        </ProductName>
        <Status>Статус: {shipment.status}</Status>
        <Wrapper>
          <Wrap>
            <Pag>Початковий пункт:</Pag>
            <Pag>
              {shipment.origin.city}, {shipment.origin.country}
            </Pag>
          </Wrap>
          <WrapArrow>
            <Icon component={ArrowForwardIcon} />
          </WrapArrow>
          <Wrap>
            <Pag>Кінцевий пункт:</Pag>
            <Pag>
              {shipment.destination.city}, {shipment.destination.country}
            </Pag>
          </Wrap>
        </Wrapper>
      </Link>

      {condition && (
        <ButtonWrapper>
          {shipment.status !== 'В процесі' && (
            <Tooltip title="Встановити статус 'Вибрати'" placement="left">
              <StyledIconRadioButton
                onClick={() => handleStatusChange(shipment.id, 'В процесі')}
                style={{
                  width: '24px',
                  height: '24px',
                }}
              >
                <RadioButtonUncheckedIcon />
              </StyledIconRadioButton>
            </Tooltip>
          )}
          {shipment.status !== 'Відмінено' && (
            <Tooltip title="Встановити статус 'Відмінено'" placement="left">
              <StyledIconCancelButton
                onClick={() => handleStatusChange(shipment.id, 'Відмінено')}
                style={{ width: '24px', height: '24px' }}
              >
                <CancelIcon />
              </StyledIconCancelButton>
            </Tooltip>
          )}
          {shipment.status !== 'Доставлено' && (
            <Tooltip title="Встановити статус 'Доставлено'" placement="left">
              <StyledIconCheckButton
                onClick={() => handleStatusChange(shipment.id, 'Доставлено')}
                disabled={shipment.status === 'Доставлено'}
                style={{ width: '24px', height: '24px' }}
              >
                <CheckIcon />
              </StyledIconCheckButton>
            </Tooltip>
          )}
          <Tooltip title="Видалити перевезення" placement="left">
            <StyledIconDeleteButton
              onClick={() => handleDelete(shipment.id)}
              style={{ width: '24px', height: '24px' }}
            >
              <DeleteIcon />
            </StyledIconDeleteButton>
          </Tooltip>
        </ButtonWrapper>
      )}
    </CardWrapper>
  );
};
