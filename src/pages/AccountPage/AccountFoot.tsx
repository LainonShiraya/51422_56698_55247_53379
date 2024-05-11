import { Box, Divider, Grid, Typography } from "@mui/material";

const AccFoot = () => {

  return (
<div>
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

export default AccFoot;
