import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import SnowWhite from '../../../../assets/WeeklyPicked/SnowWhite.jpeg';
import { Container } from '@mui/material';

const Product = () => {
  const title = 'Chatka Królewny Śnieżki i siedmiu krasnoludków';
  const cena = '299,99zł';
  const image = SnowWhite;
  return (
    <Card
      sx={{
        maxWidth: 380,
      }}
    >
      {`<3 Dodaj do listy życzeń`}
      <Container>
        <CardMedia
          sx={{ height: 260 }}
          image={image}
          title={title}
        />
        Nowość
      </Container>
      <CardContent sx={{ border: 'none', textAlign: 'center' }}>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {cena}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='medium'
          variant='text'
          disableRipple
          endIcon={<SendIcon />}
          sx={{
            fontWeight: '700',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          Zamówienie oczekujące
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
