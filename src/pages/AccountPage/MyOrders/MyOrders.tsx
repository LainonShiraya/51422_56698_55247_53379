import React from 'react';
import Error from '../../../assets/AccountPages/404-2.jpg';
import { Typography } from '@mui/material';

const MyOrders: React.FC = () => {
  return (
    <div>
  <Typography variant="h3" textAlign="left" marginBottom="2rem" color={'black'}>
    Moje zamówienia
  </Typography>
    <img src={Error} alt="Not Found" width="500" height="500"/>
    </div>
  );
};

export default MyOrders;
