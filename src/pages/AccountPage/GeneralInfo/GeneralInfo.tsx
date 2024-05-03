import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
const GeneralInfo = () => {

  const points = 100;
  const { user } = useAuth0();

  return (
<div>
  <Typography variant="h3" textAlign="left" marginBottom="2rem" color={'black'}>
    Moje konto
  </Typography>
  <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
      }}
    >
  <Grid container spacing={0} justifyContent="center" alignItems="center">
    <Grid item xs={6}>
      <Box
        display="flex"
        flexDirection="column"
        p={4}
        sx={{ backgroundColor: 'grey', flex: 1, heigh: '100%' }}
      >
        <Typography variant="h5" textAlign="left" color={'black'}>
          Hej, uczestniku programu LEGO Insiders! (Tak, to Ty!)
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={6}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box
            display="flex"
            p={1}
            sx={{ backgroundColor: 'yellow', }}
          >
            <div>
              <Typography variant="h6" textAlign="left" marginBottom="0.1rem" color={'black'} sx={{ display: 'block' }}>
                Witaj,
              </Typography>
              <Typography variant="h5" textAlign="left" marginBottom="0.1rem" color={'black'} sx={{ display: 'block' }}>
                {user?.name}
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            display="flex"
            p={1}
            sx={{backgroundColor: 'red', }}
          >
            <div>
              <Typography variant="h6" textAlign="left" marginBottom="0.1rem" color={'black'} sx={{ display: 'block' }}>
                Punkty LEGO Insiders
              </Typography>
              <Typography variant="h6" textAlign="left" marginBottom="0.1rem" color={'black'} sx={{ display: 'block' }}>
                {points}
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Box
        display="flex"
        p={1}
        justifyContent="center"
        alignItems="center"
        sx={{backgroundColor: 'blue', }}
      >
        <div>
          <Typography variant="h6" textAlign="center" marginBottom="1rem" sx={{ display: 'block' }}>
            Twój numer karty LEGO Insiders :694202137
          </Typography>
          <Button
            variant="contained"
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
  <Box
  display="flex"
  p={1}>
  <Typography variant="h5" textAlign="left" marginBottom="1rem" color={'black'} sx={{ display: 'block' }}>
   Obsługa klienta
  </Typography>
  </Box>
    <Divider variant="middle" />
    <Grid container spacing={2}>
  <Grid item xs={6}>
  <Typography variant="h6" textAlign="left" marginTop="1rem" color={'black'} sx={{ display: 'block' }}>
   Dostawa i zwrot produktów
  </Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography variant="h6" textAlign="left" marginTop="1rem" color={'black'} sx={{ display: 'block' }}>
   Skontaktuj się z nami
  </Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography variant="h6" textAlign="left" marginTop="0.1rem" color={'black'} sx={{ display: 'block' }}>
   Często zadawane pytania
  </Typography>
  </Grid>
  <Grid item xs={6}>
  <Typography variant="h6" textAlign="left" marginTop="0.1rem" color={'black'} sx={{ display: 'block' }}>
   Części zamienne i instrukcje
  </Typography>
  </Grid>
</Grid>
</div>

  );
};

export default GeneralInfo;
