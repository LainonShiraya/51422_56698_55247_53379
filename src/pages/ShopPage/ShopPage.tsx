import Container from '@mui/material/Container';
import PageTemplate from '../PageTemplate/PageTemplate';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import DropDown from './DropDown';
import { useState } from 'react';
import ProductDisplay from './ProductDisplay';
import SideNavigation from './SideNavigation';

const ShopPage = () => {
  const { sortCategory } = useParams();
  const [sort, setSort] = useState('Polecane');
  enum sortCategoriesEnum {
    promotions = 'Oferty Specjalne',
  }
  return (
    <PageTemplate>
      <Container maxWidth='xl'>
        <Container
          sx={{
            backgroundColor: 'black',
            textAlign: 'center',
            marginTop: '1rem',
            padding: '1rem',
          }}
          maxWidth='xl'
        >
          <Typography
            variant='h4'
            fontWeight='700'
            sx={{ textTransform: 'capitalize' }}
          >
            {sortCategory! in sortCategoriesEnum
              ? sortCategory
              : 'Nasze Produkty'}
          </Typography>
        </Container>
        <Container
          sx={{
            backgroundColor: '#f2f2f2',
            padding: '1rem',
            color: 'black',
          }}
          maxWidth='xl'
        >
          <Typography
            variant='h5'
            fontWeight='600'
            marginBlock='1rem'
          >
            {sortCategory! in sortCategoriesEnum
              ? sortCategory
              : 'Nasze Produkty'}
          </Typography>
          <Typography
            variant='body2'
            fontWeight='400'
          >
            Jeśli uwielbiasz ekskluzywne zestawy LEGO®, dostępne tylko w naszym
            sklepie lub u wybranych partnerów, koniecznie sprawdź naszą ofertę.
            Ekskluzywna kolekcja unikatowych klocków LEGO obudzi Twoją
            kreatywność. W ofercie specjalnej LEGO znajdziesz limitowane edycje
            zestawów klocków LEGO oraz limitowane produkty LEGO dla chłopców i
            dziewczynek w wieku od 6 lat. Wśród dostępnych produktów oferujemy
            również szeroką gamę zestawów LEGO dla dorosłych konstruktorów. Na
            miłośników i miłośniczki science fiction i fantastyki czekają
            zestawy LEGO® Star Wars™, Marvel i Harry Potter™. Od niesamowitych
            modeli z serii Harry Potter™ po urocze, kolekcjonerskie zestawy
            BrickHeadz™ — każdy znajdzie dla siebie coś ekscytującego. W naszej
            ofercie znajdziesz też wyjątkowy prezent dla każdego znajomego
            miłośnika LEGO: chłopca czy dziewczynki w wieku od 6 lat, a nawet
            dorosłego konstruktora. Lubisz superbohaterów? Zobacz nasze zestawy
            z serii Marvel w ofercie specjalnej. Rzadsze i jeszcze bardziej
            imponujące modele znajdziesz wśród zestawów LEGO® Star Wars™ z
            kolekcji Ultimate Collector Series! Czytaj więcej
          </Typography>
        </Container>
      </Container>
      <Container
        maxWidth='xl'
        sx={{ color: '#2c2c2c', marginBlock: '2rem' }}
      >
        <Container
          maxWidth='xl'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingInline: '0 !important',
            paddingBlock: '1rem',
          }}
        >
          <Typography
            variant='body1'
            fontWeight='700'
            sx={{ alignSelf: 'flex-end' }}
          >
            Wyświetlane produkty: 72
          </Typography>
          <DropDown
            setSort={setSort}
            sort={sort}
          />
        </Container>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={2}
          >
            <SideNavigation />
          </Grid>
          <Grid
            item
            xs={10}
          >
            <ProductDisplay />
          </Grid>
        </Grid>
      </Container>
    </PageTemplate>
  );
};

export default ShopPage;
