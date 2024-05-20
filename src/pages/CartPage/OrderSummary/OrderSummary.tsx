import {
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import { ButtonSemiCircular, OrderValueStyle } from './OrderSummaryStyles';
import { useState } from 'react';
import React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useOrderContext } from '../CartContext';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Doc } from '../../../../convex/_generated/dataModel';

const OrderSummary = () => {
  const { OrderCost } = useOrderContext();
  const [deliveryType, setDeliveryType] = useState<Partial<Doc<'delivery'>>>({
    price: 0,
    type: 'Odbiór Osobisty',
  });
  const TotalCost = (OrderCost + deliveryType.price! ?? '0').toFixed(2);
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const deliveryTypes = useQuery(api.orders.getDeliveries);
  const finalizeOrder = useMutation(api.orders.SumarizeOrder);
  const OpenClick = () => {
    setOpen(!open);
  };

  const setDelivery = (delivery: Partial<Doc<'delivery'>>) => {
    setDeliveryType(delivery);
  };
  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  console.log(deliveryType);

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
      <Dialog
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Czy na pewno chcesz złożyć zamówienie?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Potwierdź zamówienie kliknięciem Tak, złoży to zamówienie w bazie
            danych oraz wyczyści Twój koszyk
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Anuluj</Button>
          <Button
            onClick={() => {
              handleClose();
              finalizeOrder({ deliveryId: deliveryType._id! });
            }}
            autoFocus
          >
            Złóż zamówienie
          </Button>
        </DialogActions>
      </Dialog>
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
          <Typography
            variant='body1'
            sx={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}
          >
            Podsumowanie zamówienia
          </Typography>
          <Divider
            variant='middle'
            component='li'
          />
          <ListItemButton
            sx={{ color: 'black' }}
            onClick={OpenClick}
          >
            <ListItemText
              sx={{ color: 'black' }}
              primary='Opcje dostawy'
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={open}
            timeout='auto'
            unmountOnExit
          >
            <List
              component='div'
              disablePadding
            >
              {deliveryTypes?.map((delivery) => (
                <ListItemButton
                  sx={{ pl: 4 }}
                  selected={deliveryType._id === delivery._id}
                  onClick={() => {
                    setDelivery(delivery);
                    OpenClick();
                  }}
                >
                  <ListItemText
                    sx={{ color: 'black' }}
                    primary={`${delivery.type} (${delivery.price.toFixed(2)})`}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
          <Divider
            variant='middle'
            component='li'
          />
          <Grid
            container
            justifyContent='space-between'
          >
            <Typography
              variant='body1'
              sx={{ color: 'black' }}
            >
              Wartość zamówienia
            </Typography>
            <Typography
              variant='body1'
              sx={OrderValueStyle}
            >
              {OrderCost.toFixed(2)} gold
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent='space-between'
          >
            <Typography
              variant='body1'
              sx={{ color: 'black' }}
            >
              Dostawa
            </Typography>
            <Typography
              variant='body1'
              sx={OrderValueStyle}
            >
              {deliveryType.price} gold
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent='space-between'
          >
            <Typography
              variant='body1'
              sx={{ color: 'black' }}
            >
              Łączna wartość zamówienia
            </Typography>
            <Typography
              variant='body1'
              sx={OrderValueStyle}
            >
              {TotalCost} gold
            </Typography>
          </Grid>
          <ButtonSemiCircular
            onClick={handleClickOpen}
            disabled={!deliveryType._id}
          >
            Zapłać
          </ButtonSemiCircular>
          <Divider
            variant='middle'
            component='li'
          />
          <Typography
            variant='body1'
            sx={{ color: 'black' }}
          >
            Finalizacja ekspresowa
          </Typography>
          <ButtonSemiCircular
            onClick={handleClickOpen}
            disabled={!deliveryType._id}
          >
            Zapłać z PayPal
          </ButtonSemiCircular>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderSummary;
