import React from 'react';
import { Box, Grid } from '@mui/material';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

const WishList: React.FC = () => {
  const initialFavorites = useQuery(api.products.getUserFavorites) ?? [];

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
