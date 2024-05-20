import React from 'react';
import { Box, Grid } from '@mui/material';
import { useConvexAuth, useMutation, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
// import { ButtonAddToFavoriteStyles } from './WishListStyles';
// import { Id } from '../../../../convex/_generated/dataModel';

const WishList: React.FC = () => {
// const WishList: React.FC<{ _id: Id<'products'> }> = ({ _id }) => {
  const initialFavorites = useQuery(api.products.getUserFavorites) ?? [];
  // const isFavorite = useQuery(api.products.checkIsFavorite, {
  //   productId: _id!,
  // });
  // const { isAuthenticated, isLoading } = useConvexAuth();
  // const AddOrRemoveToFavorites = useMutation(
  //   api.products.AddOrRemoveToFavorites
  // );
  // const tryToAddorRemoveFavorites = async () => {
  //   if (isAuthenticated && !isLoading) {
  //     await AddOrRemoveToFavorites({ productId: _id! });
  //   }
  // };


  return (
    <div>
      <ul>
      {initialFavorites.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: 'flex',
            marginBottom: '2rem',
          }}
        >
          <li
            key={item.id}
            style={{ listStyle: 'none' }}
          >
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={3}
              >
                <img
                  src={item.url}
                  alt={item.name}
                  style={{
                    width: '14rem',
                    height: 'auto',
                    paddingLeft: '1rem',
                    borderRadius: '10%',
                  }}
                />
              </Grid>
              <Grid
                item
                xs={9}
              >
                <Grid
                  container
                  justifyContent='space-between'
                >
                  <Grid
                    item
                    xs={11}
                  >
                    <p
                      style={{
                        textAlign: 'left',
                        marginBottom: '2rem',
                        color: 'black',
                        fontFamily: 'monospace',
                        fontSize: 31,
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        textAlign: 'left',
                        marginBottom: '1rem',
                        color: 'black',
                      }}
                    >
                    </p>

                  </Grid>
                  <Grid
                    item
                    xs={1}
                  >
                 {/* <ButtonAddToFavoriteStyles
                   isFavorite={isFavorite}
                   onClick={tryToAddorRemoveFavorites}
                   /> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </li>
        </Box>
      ))}
    </ul>
    </div>
  );
};

export default WishList;
