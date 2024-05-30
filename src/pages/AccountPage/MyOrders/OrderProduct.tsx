import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Container,
  Rating,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
} from '@mui/material';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';
const OrderProduct = ({
  product,
}: {
  product: {
    name: string;
    price: number;
    url: string;
    count: number;
    id: Id<'products'>;
  };
}) => {
  const addProduct = useMutation(api.users.addProductToUserCart);
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 16,
    },
  }));
  return (
    <Card
      sx={{
        maxWidth: 330,
        flexGrow: '1',
        backgroundColor: 'inherit',
        border: 'none',
        boxShadow: 'none',
        padding: '0.25rem !important',
      }}
    >
      <Container
        sx={{
          border: '1px solid #e0e0e0',
          paddingInline: '1.2rem !important',
          paddingBlock: '0.5rem !important',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          justifyContent: 'flex-start',
        }}
      >
        <CardMedia
          sx={{
            height: 200,
            overflow: 'hidden',
            padding: '1rem !important',
            transition: 'all .5s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
          image={product.url}
          title={product.name}
        />
      </Container>
      <CardContent sx={{ border: 'none', textAlign: 'Left' }}>
        {product.name.length > 21 ? (
          <LightTooltip title={product.name}>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              noWrap
            >
              {product.name}
            </Typography>
          </LightTooltip>
        ) : (
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            noWrap
          >
            {product.name}
          </Typography>
        )}
        <Rating
          name='size-medium'
          defaultValue={5}
          readOnly
        />
        <Typography
          variant='h6'
          color='text.secondary'
        >
          {product.price}
        </Typography>
        <Typography
          variant='h6'
          color='black'
        >
          {`Bought: ${product.count}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ textAlign: 'Left' }}>
        <Button
          size='medium'
          variant='contained'
          disableRipple
          fullWidth
          sx={{
            fontWeight: '700',
            fontSize: '1rem',
            textAlign: 'Left',
            padding: '0.75rem',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          onClick={async () => {
            await addProduct({ newProductId: product.id! });
          }}
        >
          Kup ponownie
        </Button>
      </CardActions>
    </Card>
  );
};

export default OrderProduct;
