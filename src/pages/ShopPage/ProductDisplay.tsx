/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '@mui/material/Container';
import Product from '../HomePage/ReccomendedSets/Product/Product';

const ProductDisplay = ({
  productsToDisplayByCategory,
}: {
  productsToDisplayByCategory: any;
}) => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        padding: '0 !important',
      }}
    >
      {productsToDisplayByCategory?.map((product: any) => (
        <Product
          key={product._id}
          url={product.url}
          name={product.name}
          price={product.price}
          _id={product._id}
          categories={product.categories}
        />
      ))}
    </Container>
  );
};

export default ProductDisplay;
