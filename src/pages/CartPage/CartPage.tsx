import { Grid, Typography } from '@mui/material';
import PageTemplate from '../PageTemplate/PageTemplate';
import Cart from './Cart/Cart';
import OrderSummary from './OrderSummary/OrderSummary';
import { OrderProvider } from './CartContext';


const CartPage = () => {
  return (
    <OrderProvider>
    <PageTemplate>
      <Typography variant='h2' sx={{marginTop: '4rem', color: 'black' }}>Mój koszyk</Typography>
      <Grid container spacing={2} alignItems="flex-start" >
        <Grid
          item
            xs={8}
          sx={{
           // display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2rem',
           
          }}
        >
      <Cart />
      </Grid>
      <Grid
          item
            xs={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
      <OrderSummary/>
      </Grid>
      </Grid>
    </PageTemplate>
    </OrderProvider>
  );
 };

export default CartPage;
