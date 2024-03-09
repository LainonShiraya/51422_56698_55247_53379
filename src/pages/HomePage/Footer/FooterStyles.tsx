import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Typography } from '@mui/material';
export const GridFooterVertical = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <Grid
    item
    xs={3}
    sx={{
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}
  >
    {children}
  </Grid>
);

export const ButtonTextFooter = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <Button
    variant='text'
    disableRipple
    sx={{
      padding: '0',
      color: '#FFF',
      fontSize: '1rem',
      margin: '0',
      '&:hover': {
        boxShadow: '0 4px 2px -2px  #FFF',
      },
    }}
  >
    {children}
  </Button>
);

export const ButtonRegionFooter = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <Button
    variant='contained'
    startIcon={<FmdGoodIcon />}
    sx={{
      marginLeft: '0',
      marginBottom: '1rem',
      fontWeight: '700',
      backgroundColor: '#ED1C24',
      color: '#FFF',
      '&:hover': {
        backgroundColor: '#ED1C24',
      },
    }}
  >
    {children}
  </Button>
);

export const TypographyTitleFooter = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <Typography
    variant='h6'
    fontWeight='700'
    textTransform='uppercase'
  >
    {children}
  </Typography>
);
