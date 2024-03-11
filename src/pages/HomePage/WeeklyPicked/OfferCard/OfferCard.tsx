import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';

export default function OfferCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card
      sx={{
        maxWidth: 380,
        border: 'none',
        boxShadow: 'none',
        backgroundColor: 'inherit',
      }}
    >
      <CardMedia
        sx={{ height: 260 }}
        image={image}
        title={title}
      />
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
          {description}
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
          Do sklepu
        </Button>
      </CardActions>
    </Card>
  );
}
