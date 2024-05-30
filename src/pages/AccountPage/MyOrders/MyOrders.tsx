import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderProduct from './OrderProduct';

const MyOrders: React.FC = () => {
  const myOrders = useQuery(api.orders.getOrders);

  return (
    <div>
      <Typography
        variant='h3'
        textAlign='left'
        marginBottom='2rem'
        color={'black'}
      >
        Moje zamówienia
      </Typography>
      {myOrders?.map((order) => {
        const date = new Date(order._creationTime as number);
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={order._id}
              id={order._id}
            >
              Order number: {order._id}
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'row' }}>
              {order.products.map((product) => (
                <OrderProduct product={product!} />
              ))}
            </AccordionDetails>
            <Divider />
            <Container
              sx={{
                paddingBlock: '2rem',
                display: 'flex',
                flexDirection: 'row',
                gap: '2rem',
                textAlign: 'center',
              }}
            >
              <Typography variant='h5'>
                Total Price: {order.totalPrice}
              </Typography>
              <Typography variant='h5'>
                Order Date: {date.toLocaleDateString()}
              </Typography>
              <Typography variant='h5'>
                Lego Points Earned: {order.legoPoints}
              </Typography>
            </Container>
          </Accordion>
        );
      })}
      {/* <img
        src={Error}
        alt='Not Found'
        width='500'
        height='500'
      /> */}
    </div>
  );
};

export default MyOrders;
