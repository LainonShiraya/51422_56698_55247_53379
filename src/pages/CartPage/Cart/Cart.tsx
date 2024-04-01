import { Container, Grid } from '@mui/material';
const Cart = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        background: 'red',
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

        </Grid>
        <Grid
          item
          xs={6}
        ></Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
