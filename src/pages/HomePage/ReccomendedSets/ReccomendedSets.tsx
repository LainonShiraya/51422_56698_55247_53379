import { Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Product from './Product/Product';
import girlHeroImage from '../../../assets/ReccomendedSets/girl-hero.jpeg';
import { ButtonSpecial } from '../../PageTemplate/Navbar/NavbarStyles';
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
      <Container
        maxWidth='xl'
        sx={{
          backgroundColor: '#300C54',
          height: '1200px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          textAlign: 'center',
          paddingBlock: '2rem',
          paddingInline: '0 !important',
        }}
      >
        <Typography
          variant='h4'
          fontWeight='700'
          sx={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          Odkrywaj i twórz światy bez granic
          <Button
            variant='outlined'
            sx={{
              borderRadius: '20px',
              color: '#FFF',
              border: '2px solid #FFF',
              fontWeight: '700',
              '&:hover': {
                border: '2px solid #ED1C24',
                backgroundColor: '#ED1C24',
              },
            }}
          >
            Produkty
          </Button>
          <Button
            variant='outlined'
            sx={{
              borderRadius: '20px',
              color: '#FFF',
              border: '2px solid #FFF',
              fontWeight: '700',
              '&:hover': {
                border: '2px solid #ED1C24',
                backgroundColor: '#ED1C24',
              },
            }}
          >
            Informacje
          </Button>
        </Typography>
        <Grid
          container
          sx={{
            backgroundImage: `url(${girlHeroImage})`,
            height: '500px',
            margin: '0',
            position: 'relative',
          }}
        >
          <Grid
            item
            xs={6}
            sx={{
              textAlign: 'Left',
              height: 'inherit',
              color: 'black',
              padding: '4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {' '}
            <Typography variant='h3'>
              Pomóż dziewczynkom budować nieograniczone światy
            </Typography>
            <Typography variant='h6'>
              Zobacz, jak dziewczynki budują bez granic, i inspiruj je do
              kreatywnej zabawy bez ograniczeń.
            </Typography>
            <ButtonSpecial hasIcon>Do sklepu </ButtonSpecial>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default ReccomendedSets;
