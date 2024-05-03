import Container from '@mui/material/Container';
import Product from '../HomePage/ReccomendedSets/Product/Product';

const ProductDisplay = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        padding: '0 !important',
      }}
    >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Container>
  );
};

export default ProductDisplay;
