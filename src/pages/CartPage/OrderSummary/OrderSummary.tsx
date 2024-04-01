import { Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
// import { BoxOptionPickerOption } from './OrderSummaryStyles';

const OrderSummary = () => {


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
          xs={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
      <Typography variant='body1' sx={{ color: 'black' }}>Podsumowanie zamówienia</Typography>
      <Typography variant='body1' sx={{ color: 'black' }}>Dodaj Kod promocyjny</Typography>
      <Typography variant='body1' sx={{ color: 'black' }}>Wartość zamówienia</Typography>
      <Typography variant='body1' sx={{ color: 'black' }}>Dostawa</Typography>
      <Typography variant='body1' sx={{ color: 'black' }}>Łączna Wartość</Typography>
      <Typography variant='body1' sx={{ color: 'black' }}>W tym</Typography>
      <Typography variant='body1' sx={{ color: 'black' }}>Finalizacja ekspresowa</Typography>
      </Grid>
      </Grid>
    </Container>
  );
};

export default OrderSummary;
