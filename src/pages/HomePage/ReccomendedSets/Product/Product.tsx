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
import { BoxTagStyles, ButtonAddToFavoriteStyles } from './ProductStyles';
import { Doc, Id } from '../../../../../convex/_generated/dataModel';
import { useConvexAuth, useMutation, useQuery } from 'convex/react';
import { api } from '../../../../../convex/_generated/api';
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom';

const Product = ({
  name,
  price,
  url,
  _id,
  categories,
}: {
  name: string;
  price: number;
  url: string;
  _id: Id<'products'>;
  categories: Partial<Doc<'category'>[]>;
}) => {
  const addProduct = useMutation(api.users.addProductToUserCart);
  const { category } = useParams();
  const AddOrRemoveToFavorites = useMutation(
    api.products.AddOrRemoveToFavorites
  );
  const isFavorite = useQuery(api.products.checkIsFavorite, {
    productId: _id!,
  });
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { loginWithRedirect } = useAuth0();
  const tryToAddProduct = async () => {
    if (isAuthenticated && !isLoading) {
      await addProduct({ newProductId: _id! });
    }
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  };
  const tryToAddorRemoveFavorites = async () => {
    if (isAuthenticated && !isLoading) {
      await AddOrRemoveToFavorites({ productId: _id! });
    }
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  };
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
  const categoryToDisplay = category ?? categories[0]?.tag;
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
        <ButtonAddToFavoriteStyles
          isFavorite={isFavorite}
          onClick={tryToAddorRemoveFavorites}
        />
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
          image={url}
          title={name}
        />
        <BoxTagStyles>{categoryToDisplay}</BoxTagStyles>
      </Container>
      <CardContent sx={{ border: 'none', textAlign: 'Left' }}>
        {name.length > 21 ? (
          <LightTooltip title={name}>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              noWrap
            >
              {name}
            </Typography>
          </LightTooltip>
        ) : (
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            noWrap
          >
            {name}
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
          {price}
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
          onClick={tryToAddProduct}
        >
          Dodaj do Koszyka
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
