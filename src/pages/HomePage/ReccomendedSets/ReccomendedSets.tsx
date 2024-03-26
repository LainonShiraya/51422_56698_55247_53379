import { Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Product from './Product/Product';

function ReccomendedSets() {
  return (
    <Container maxWidth='xl'>
      <Typography
        variant='h4'
        fontWeight={500}
        sx={{ color: '#000' }}
      >
        {' '}
        Co kupują inni
      </Typography>
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBlock: '1rem',
          padding: '0 !important',
        }}
      >
        <Product />
        <Product />
        <Product />
        <Product />
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
