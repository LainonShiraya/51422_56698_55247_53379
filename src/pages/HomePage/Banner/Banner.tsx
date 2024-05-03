import { Box, Container, Grid, Typography } from '@mui/material';
import banner from '../../../assets/banner.jpeg';
import { ButtonSpecial } from '../../PageTemplate/Navbar/NavbarStyles';
const Banner = () => {
  return (
    <Container
      data-testid="banner-container"
      maxWidth='xl'
      sx={{
        backgroundImage: `url(${banner})`,
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
          <Typography
            className='protest-revolution-regular'
            variant='h1'
          >
            Icons
          </Typography>
          <Typography variant='h3'>Zwiedzaj średniowieczne miasto</Typography>
          <Typography variant='h5'>
            Tchnij życie w wiekowe mury, budując zestaw LEGO® Icons
            Średniowieczny plac miejski.
          </Typography>
          <Box
            sx={{ display: 'flex', gap: '1rem', flexDirection: 'flex-start' }}
          >
            <ButtonSpecial hasIcon>Do sklepu </ButtonSpecial>
            <ButtonSpecial hasIcon> Więcej </ButtonSpecial>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
        ></Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
