import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const ConvexButtonShopIcon = () => {
  const userInfo = useQuery(api.users.getUserConvexInfo);
  return (
    <IconButton
      component={RouterLink}
      to='/cart'
      size='large'
    >
      <Badge
        badgeContent={userInfo?.cart.length}
        color='secondary'
      >
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default ConvexButtonShopIcon;
