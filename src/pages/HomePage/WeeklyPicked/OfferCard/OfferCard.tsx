import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { Doc } from '../../../../../convex/_generated/dataModel';

export default function OfferCard({
  title,
  description,
  image,
  size = 'lg',
  color = 'black',
  category,
}: {
  title: string;
  description: string;
  image: string;
  size?: 'lg' | 'sm';
  color?: string;
  category: Partial<Doc<'category'>>;
}) {
  return (
    <Card
      sx={{
        maxWidth: size === 'lg' ? 380 : 260,
        border: 'none',
        boxShadow: 'none',
        backgroundColor: 'inherit',
      }}
    >
      <CardMedia
        sx={{ height: size === 'lg' ? 260 : 220 }}
        image={image}
        title={title}
      />
      <CardContent sx={{ border: 'none', textAlign: 'center' }}>
        <Typography
          gutterBottom
          variant={size === 'lg' ? 'h5' : 'h6'}
          component='div'
          color={color}
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          color={color}
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
            color: color,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          href={`/shop/sortCategory/${category.tag}`}
        >
          Do sklepu
        </Button>
      </CardActions>
    </Card>
  );
}
