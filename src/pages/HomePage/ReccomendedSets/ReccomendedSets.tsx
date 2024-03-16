import { Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Product from './Product.tsx/Product';

function ReccomendedSets() {
  return (
    <Container maxWidth='xl'>
      <Container
        maxWidth='xl'
        sx={{ backgroundColor: '#FFD100', height: '600px', margin: '0' }}
      >
        <Typography
          variant='h5'
          fontWeight={500}
          sx={{ color: '#000' }}
        >
          {' '}
          Polecane Zestawy
        </Typography>
        <Container>
          <Product />
        </Container>
      </Container>
      <Grid
        container
        maxWidth='xl'
        sx={{ backgroundColor: '#002e41', height: '300px' }}
      >
        <Grid
          item
          xs={4}
        >
          <Typography>Upominki przy zakupie</Typography>
        </Grid>
        <Grid
          item
          xs={8}
        >
          <Typography>Upominki przy zakupie</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ReccomendedSets;
