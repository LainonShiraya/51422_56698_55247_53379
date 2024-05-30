import { Id } from '../../../../convex/_generated/dataModel';
import { MenuItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
const MiniProduct = ({
  product,
}: {
  product: { id: Id<'products'>; name: string; price: number; url: string };
}) => {
  const addProductToUserCart = useMutation(api.users.addProductToUserCart);
  const removeFromFavorites = useMutation(api.products.AddOrRemoveToFavorites);

  console.log(product.id);
  return (
    <div>
      <MenuItem
        disableGutters
        sx={{ paddingRight: '1rem' }}
      >
        <ListItemIcon sx={{ paddingInline: '4px' }}>
          <Avatar
            src={product.url}
            alt={product.name}
          />
        </ListItemIcon>
        <ListItemText
          primary={product.name}
          secondary={`$${product.price}`}
        />
      </MenuItem>
      <MenuItem
        onClick={() => {
          addProductToUserCart({ newProductId: product.id! });
        }}
      >
        <ListItemIcon>
          <AddShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary='Add to Cart' />
      </MenuItem>
      <MenuItem
        divider
        onClick={async () => {
          await removeFromFavorites({ productId: product.id! });
        }}
      >
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary='Remove from Favorites' />
      </MenuItem>
    </div>
  );
};

export default MiniProduct;
