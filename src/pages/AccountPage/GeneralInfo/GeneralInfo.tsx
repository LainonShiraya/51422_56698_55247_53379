import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useNavigate } from 'react-router-dom';
const GeneralInfo = () => {
  const [Status] = useState(2);
  const { user } = useAuth0();
  const userInfo = useQuery(api.users.getUserConvexInfo);
  const getOrders = useQuery(api.orders.getOrder);

  const date = new Date(getOrders?._creationTime as number);
  const navigate = useNavigate();
  return (
    <div>
      <Typography
        variant='h3'
        textAlign='left'
        marginBottom='2rem'
        color={'black'}
      >
        Moje konto
      </Typography>
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{ display: 'flex' }}
        >
          <Grid
            item
            xs={6}
          >
            <Box
              p={4}
              sx={{ backgroundColor: '#E9E9E9', height: '56%' }}
            >
              <Typography
                variant='h5'
                textAlign='left'
                color={'black'}
              >
                Hej, uczestniku programu LEGO Insiders! (Tak, to Ty!)
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Grid
              container
              spacing={0}
            >
              <Grid
                item
                xs={6}
              >
                <Box
                  display='flex'
                  p={1}
                  sx={{ backgroundColor: '#FFD700' }}
                >
                  <div>
                    <Typography
                      variant='subtitle2'
                      textAlign='left'
                      marginBottom='0.1rem'
                      color={'black'}
                      sx={{ display: 'block' }}
                    >
                      Witaj,
                    </Typography>
                    <Typography
                      variant='body1'
                      textAlign='left'
                      marginBottom='0.1rem'
                      color={'black'}
                      sx={{ display: 'block' }}
                    >
                      {user?.name}
                    </Typography>
                  </div>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
              >
                <Box
                  display='flex'
                  p={1}
                  sx={{ backgroundColor: '#DF0000' }}
                >
                  <div>
                    <Typography
                      variant='subtitle2'
                      textAlign='left'
                      marginBottom='0.1rem'
                      sx={{ display: 'block' }}
                    >
                      Punkty LEGO Insiders
                    </Typography>
                    <Typography
                      variant='body1'
                      textAlign='left'
                      marginBottom='0.1rem'
                      sx={{ display: 'block' }}
                    >
                      {userInfo?.legoPoints ?? '0'}
                    </Typography>
                  </div>
                </Box>
              </Grid>
            </Grid>
            <Box
              display='flex'
              p={1}
              justifyContent='center'
              alignItems='center'
              sx={{ backgroundColor: 'blue' }}
            >
              <div>
                <Typography
                  variant='subtitle2'
                  textAlign='center'
                  marginBottom='0.2rem'
                  sx={{ display: 'block' }}
                >
                  Twój numer karty LEGO Insiders: {userInfo?.id}
                </Typography>
                <Button
                  variant='contained'
                  disableRipple
                  style={{
                    borderRadius: '20px 20px 20px 20px',
                    width: '100%',
                    backgroundColor: 'white',
                  }}
                >
                  Odkryj program LEGO Insiders
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Typography
        variant='h5'
        textAlign='left'
        marginBottom='1rem'
        marginTop='2rem'
        color={'black'}
      >
        Ostatnie zamówienie
      </Typography>

      <Container
        // maxWidth='xl'
        sx={{
          display: 'flex',
        }}
      >
        <Box
          p={2}
          marginBottom='3rem'
          sx={{
            backgroundColor: '#E9E9E9',
            display: 'flex',
            width: '100%', // Ustawienie szerokości na 100%
          }}
        >
          <Grid
            container
            justifyContent='space-between'
          >
            <Grid
              item
              xs={9}
            >
              <Typography
                variant='body1'
                textAlign='left'
                color={
                  Status === 0 ? 'blue' : Status === 1 ? '#FFD700' : 'green'
                }
              >
                {Status === 0
                  ? 'Opłacone'
                  : Status === 1
                  ? 'W realizacji'
                  : 'Wysłane'}
              </Typography>
              <Typography
                variant='body1'
                textAlign='left'
                color={'black'}
              >
                Numer zamówienia: {getOrders?._id}
              </Typography>
              <Typography
                variant='body1'
                textAlign='left'
                color={'black'}
              >
                Data zamówienia: {date.toUTCString() ?? 'Brak Danych'}
              </Typography>
              <Typography
                variant='body1'
                textAlign='left'
                marginBottom='2rem'
                color={'black'}
              >
                Suma: {getOrders?.totalPrice}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{ alignSelf: 'flex-end', justifySelf: 'flex-end' }}
            >
              <Button
                variant='contained'
                disableRipple
                sx={{ alignSelf: 'flex-start' }}
                style={{
                  borderRadius: '5px',
                  backgroundColor: 'blue',
                  color: 'white',
                }}
                onClick={() => {
                  navigate('../orders');
                }}
              >
                Zobacz zamówienie
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default GeneralInfo;
