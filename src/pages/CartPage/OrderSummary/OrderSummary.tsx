import { Collapse, Divider, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { ButtonSemiCircular, OrderValueStyle } from './OrderSummaryStyles';
import { useState } from 'react';
import React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const OrderSummary = () => {
  const [OrderCost, setOrderCost] = useState(0.00);
  const [DeliveryCost, setDeliveryCost] = useState(0);
  const TotalCost = OrderCost + DeliveryCost;
  const [open, setOpen] = React.useState(false);

  const OpenClick = () => {
    setOpen(!open);
  };

  const setDelivery = (cost:number) => {
    setDeliveryCost(cost);
  };

  return (
    <Container
      maxWidth='xl'
      sx={{
        background: 'white',
        minHeight: '50vh',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2rem',
            marginTop: '2rem',
          }}
        >
          <Typography variant='body1' sx={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
            Podsumowanie zamówienia
          </Typography>
          <Divider variant="middle" component="li" />
          <ListItemButton sx={{ color: 'black' }} onClick={OpenClick}>
            <ListItemText sx={{ color: 'black' }} primary="Opcje dostawy" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => {setDelivery(100); OpenClick()}}>
                <ListItemText sx={{ color: 'black' }} primary="Courier (100)" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => {setDelivery(10); OpenClick()}}>
                <ListItemText sx={{ color: 'black' }} primary="Boxmat (10)" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={() => {setDelivery(0); OpenClick()}}>
                <ListItemText sx={{ color: 'black' }} primary="Odbiór osobisty (0)" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider variant="middle" component="li" />
          <Grid container justifyContent="space-between">
            <Typography variant='body1' sx={{ color: 'black' }}>
              Wartość zamówienia
            </Typography>
            <Typography variant='body1' sx={OrderValueStyle}>
              {OrderCost}
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between">
            <Typography variant='body1' sx={{ color: 'black' }}>
              Dostawa
            </Typography>
            <Typography variant='body1' sx={OrderValueStyle}>
              {DeliveryCost}
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between">
            <Typography variant='body1' sx={{ color: 'black' }}>
              Łączna wartość zamówienia
            </Typography>
            <Typography variant='body1' sx={OrderValueStyle}>
              {TotalCost}
            </Typography>
          </Grid>
          <ButtonSemiCircular>Zapłać</ButtonSemiCircular>
          <Divider variant="middle" component="li" />
          <Typography variant='body1' sx={{ color: 'black' }}>Finalizacja ekspresowa</Typography>
          <ButtonSemiCircular>Zapłać z PayPal</ButtonSemiCircular>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderSummary;
