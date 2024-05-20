import { Box, Button, Grid } from '@mui/material';
import { useEffect } from 'react';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { useOrderContext } from '../CartContext';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

const Cart: React.FC = () => {
  const initialCartData = useQuery(api.products.getUserCart) ?? [];
  const increaseQuantity = useMutation(api.products.increaseProductCountInCart);
  const decreaseQuantity = useMutation(api.products.decreaseProductCountInCart);
  const removeProductFromCart = useMutation(api.products.removeProductInCart);
  let orderCost: number | undefined = 0;
  const { updateOrderCost } = useOrderContext();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    orderCost = initialCartData
      ?.map((product) => {
        return product.price * product.count;
      })
      .reduce((partialSum, productPrice) => partialSum + productPrice, 0);
    updateOrderCost(orderCost);
  }, [initialCartData]);

  return (
    <ul>
      {initialCartData.map((item) => (
        <Box
          key={item.id}
          sx={{
            bgcolor: 'white',
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
                      {item.price} gold
                    </p>
                    <Grid
                      container
                      justifyContent='space-between'
                      xs={3}
                      alignItems='center'
                    >
                      <Button
                        variant='outlined'
                        style={{ color: 'black', borderColor: 'black' }}
                        onClick={() =>
                          decreaseQuantity({ productIdToIncrease: item.id })
                        }
                      >
                        -
                      </Button>
                      <p
                        style={{ textAlign: 'left', margin: 0, color: 'black' }}
                      >
                        {item.count}
                      </p>
                      <Button
                        variant='outlined'
                        style={{ color: 'black', borderColor: 'black' }}
                        onClick={() =>
                          increaseQuantity({ productIdToIncrease: item.id })
                        }
                      >
                        +
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                  >
                    <Button
                      startIcon={<DeleteSharpIcon />}
                      sx={{ alignSelf: 'flex-start' }}
                      onClick={() =>
                        removeProductFromCart({ productIdToIncrease: item.id })
                      }
                    ></Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </li>
        </Box>
      ))}
    </ul>
  );
};

export default Cart;
