import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import Product from '../../HomePage/ReccomendedSets/Product/Product';
import { Container } from '@mui/material';

const WishList: React.FC = () => {
  const initialFavorites = useQuery(api.products.getUserFavorites) ?? [];

  return (
    <Container sx={{ display: 'flex', flexDirection: 'row' }}>
      {initialFavorites.map((item) => (
        <Product
          name={item.name}
          price={item.price}
          url={item.url}
          _id={item.id}
          categories={[]}
        />
      ))}
    </Container>
  );
};

export default WishList;
