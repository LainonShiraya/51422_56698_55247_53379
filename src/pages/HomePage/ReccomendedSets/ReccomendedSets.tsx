import { Button, Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Product from './Product/Product';
import girlHeroImage from '../../../assets/ReccomendedSets/girl-hero.jpeg';
import { ButtonSpecial } from '../../PageTemplate/Navbar/NavbarStyles';
import OfferCard from '../WeeklyPicked/OfferCard/OfferCard';
import KidsLego from '../../../assets/ReccomendedSets/kids-lego.jpeg';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

function ReccomendedSets() {
  const products = useQuery(api.products.getReccomendedTop4Products);
  const weeklyOferts = useQuery(api.products.getTop3WeeklySets);
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
        {products?.map((product) => (
          <Product
            key={product._id}
            url={product.url}
            name={product.name}
            price={product.price}
          />
        ))}
      </Container>
      <Container
        maxWidth='xl'
        sx={{
          backgroundColor: '#300C54',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          textAlign: 'center',
          paddingTop: '2rem',
          paddingBottom: '8rem',
          paddingInline: '0 !important',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 93%, 0% 100%)',
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
            minHeight: '500px',
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
        <Container
          maxWidth='xl'
          sx={{ marginBlock: '2rem' }}
        >
          <Typography
            variant='h4'
            fontWeight='500'
            sx={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '2rem',
            }}
          >
            Kupuj według tematyki
          </Typography>
          <Container
            maxWidth='xl'
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              padding: '0 !important',
              margin: 'auto',
            }}
          >
            {weeklyOferts?.map((ofert) => (
              <OfferCard
                key={ofert._id}
                image={ofert.image}
                title={ofert.title}
                description={ofert.description}
                color='white'
              />
            ))}
          </Container>
        </Container>
        <Grid
          container
          sx={{
            margin: '0',
            backgroundColor: 'rgb(254, 224, 201)',
          }}
        >
          <Grid
            item
            xs={6}
            sx={{
              textAlign: 'Left',
              height: 'inherit',
              color: 'black',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <img src={KidsLego} />
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              textAlign: 'Left',
              height: 'inherit',
              color: 'black',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {' '}
            <Typography variant='h4'>Kreatywność w domu</Typography>
            <Typography variant='body2'>
              Potęga zabawy jest nieograniczona — zwłaszcza w domu. Nasi
              niesamowici twórcy przygotowali wirtualne warsztaty, w których
              dzieci mogą wziąć udział bez wychodzenia z domu. Rezerwacja nie
              jest konieczna. Wystarczy obejrzeć warsztaty i użyć własnych
              klocków LEGO® do budowania modeli, wymyślania historii i zabawy.
            </Typography>
            <ButtonSpecial hasIcon> Zobacz teraz </ButtonSpecial>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth='xl'
        sx={{
          backgroundColor: '#d9d9d9',
          color: 'black',
          marginTop: '4rem',
          padding: '2rem',
        }}
      >
        {' '}
        <Typography variant='subtitle2'>
          Witamy w oficjalnym sklepie LEGO® — to w tym niesamowitym miejscu
          znajdziesz zabawki LEGO do składania, prezenty, wspaniałe zestawy do
          eksponowania i nie tylko, zarówno dla dzieci, jak i dorosłych. Znajdź
          idealne prezenty dla małych i starszych dzieci, nastolatków i
          dorosłych z okazji urodzin lub dowolnej innej okazji, takiej jak
          walentynki, Dzień Matki lub Dzień Ojca. Teraz jeszcze łatwiej kupisz
          zabawki, które zapewniają wiele godzin twórczej zabawy. W naszym
          sklepie znajdziesz też zestawy LEGO dla dorosłych, które sprawdzą się
          świetnie dla osób o różnych zainteresowaniach, takich jak samochody,
          kwiaty, gry i nie tylko!
        </Typography>
      </Container>
    </Container>
  );
}

export default ReccomendedSets;
