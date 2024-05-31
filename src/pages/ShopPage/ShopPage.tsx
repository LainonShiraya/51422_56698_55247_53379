import Container from '@mui/material/Container';
import PageTemplate from '../PageTemplate/PageTemplate';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import DropDown from './DropDown';
import { useEffect, useState } from 'react';
import ProductDisplay from './ProductDisplay';
import SideNavigation from './SideNavigation';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { Id } from '../../../convex/_generated/dataModel';

const ShopPage = () => {
  const { sortCategory } = useParams();
  const [sort, setSort] = useState<{
    name: string;
    type: {
      index: 'by_sold' | 'by_price' | 'by_name' | 'by_creation_time';
      order: 'desc' | 'asc';
    };
  }>({ name: 'Najnowsze', type: { index: 'by_sold', order: 'desc' } });
  const [sortingCategory, setSortingCategory] = useState(sortCategory);
  const sortPageQuery = useQuery(api.category.getCategoryInfo, {
    tag: sortingCategory,
  });
  const [sortPage, setSortPage] = useState<{
    _id: Id<'category'>;
    _creationTime: number;
    name: string;
    description: string;
    tag: string;
  }>();
  const productsToDisplayByCategory = useQuery(
    api.products.getProductsBySelectedCategory,
    { productTag: sortingCategory, sortType: sort.type }
  );
  useEffect(() => {
    if (sortPageQuery) {
      setSortPage(sortPageQuery);
    }
  }, [sortPageQuery]);
  useEffect(() => {
    setSortingCategory(sortCategory);
  }, [sortCategory]);
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
            {sortPage ? sortPage.name : 'Nasze Produkty'}
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
            {sortPage ? sortPage.name : 'Nasze Produkty'}
          </Typography>
          {sortPage ? (
            <Typography
              variant='body2'
              fontWeight='400'
            >
              {sortPage.description}
            </Typography>
          ) : (
            <Typography
              variant='body2'
              fontWeight='400'
            >
              Jeśli uwielbiasz ekskluzywne zestawy LEGO®, dostępne tylko w
              naszym sklepie lub u wybranych partnerów, koniecznie sprawdź naszą
              ofertę. Ekskluzywna kolekcja unikatowych klocków LEGO obudzi Twoją
              kreatywność. W ofercie specjalnej LEGO znajdziesz limitowane
              edycje zestawów klocków LEGO oraz limitowane produkty LEGO dla
              chłopców i dziewczynek w wieku od 6 lat. Wśród dostępnych
              produktów oferujemy również szeroką gamę zestawów LEGO dla
              dorosłych konstruktorów. Na miłośników i miłośniczki science
              fiction i fantastyki czekają zestawy LEGO® Star Wars™, Marvel i
              Harry Potter™. Od niesamowitych modeli z serii Harry Potter™ po
              urocze, kolekcjonerskie zestawy BrickHeadz™ — każdy znajdzie dla
              siebie coś ekscytującego. W naszej ofercie znajdziesz też
              wyjątkowy prezent dla każdego znajomego miłośnika LEGO: chłopca
              czy dziewczynki w wieku od 6 lat, a nawet dorosłego konstruktora.
              Lubisz superbohaterów? Zobacz nasze zestawy z serii Marvel w
              ofercie specjalnej. Rzadsze i jeszcze bardziej imponujące modele
              znajdziesz wśród zestawów LEGO® Star Wars™ z kolekcji Ultimate
              Collector Series! Czytaj więcej
            </Typography>
          )}
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
            Wyświetlane produkty: {productsToDisplayByCategory?.length ?? 0}
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
            <SideNavigation setSortingCategory={setSortingCategory} />
          </Grid>
          <Grid
            item
            xs={10}
          >
            <ProductDisplay
              productsToDisplayByCategory={productsToDisplayByCategory}
              categorySortedBy={sortingCategory}
            />
          </Grid>
        </Grid>
      </Container>
    </PageTemplate>
  );
};

export default ShopPage;
