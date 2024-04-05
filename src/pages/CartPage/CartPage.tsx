import { Grid, Typography } from '@mui/material';
import PageTemplate from '../PageTemplate/PageTemplate';
import Cart from './Cart/Cart';
import OrderSummary from './OrderSummary/OrderSummary';
// import ReccomendedSets from './ReccomendedSets/ReccomendedSets';
// import WeeklyPicked from './WeeklyPicked/WeeklyPicked';

const CartPage = () => {
  return (
    <PageTemplate>
      <Typography variant='h2' sx={{marginTop: '4rem', color: 'black' }}>Mój koszyk</Typography>
      {/* <Toolbar sx={{ gap: '2rem', alignItems: 'flex-start' }}> */}
      <Grid container spacing={2} >
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
      <OrderSummary />
      </Grid>
      </Grid>
      {/* <WeeklyPicked /> */}
      {/* <ReccomendedSets /> */}
      {/* </Toolbar> */}
    </PageTemplate>
  );
 };

export default CartPage;
