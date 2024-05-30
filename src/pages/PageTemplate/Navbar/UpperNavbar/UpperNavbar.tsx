import { Avatar } from '@mui/material';
import {
  AppBarUpperNavbarWrapper,
  ButtonNoStyles,
  ContainerUpperNavbarWrapper,
  ToolbarUpperNavbar,
} from './UpperNavbarStyles';
import { useAuth0 } from '@auth0/auth0-react';
import userIcon from '../../../../assets/user-icon.png';
import pointsIcon from '../../../../assets/points-icon.svg';
import { useMutation } from 'convex/react';
import { api } from '../../../../../convex/_generated/api';
import { useEffect, useState } from 'react';
import { Id } from '../../../../../convex/_generated/dataModel';
import { Link as RouterLink } from 'react-router-dom';

const UpperNavbar = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const getConvexUser = useMutation(api.users.getConvexUser);
  const [userConvex, setUserConvex] = useState<{
    cart: {
      productId: Id<'products'>;
      count: number;
    }[];
    legoPoints: number;
    favorites: {
      productId: Id<'products'>;
      count: number;
    }[];
  } | null>({ legoPoints: 0, cart: [], favorites: [] });
  useEffect(() => {
    async function createOrUpdateUser() {
      return await getConvexUser();
    }
    if (isAuthenticated) {
      createOrUpdateUser()
        .then((savedUser) => setUserConvex(savedUser))
        .catch(console.error);
    }
  }, [getConvexUser, isAuthenticated]);
  return (
    <AppBarUpperNavbarWrapper>
      <ContainerUpperNavbarWrapper>
        {/* <ToolbarUpperNavbar>
          <Button>{`<-`} Strefa Zabawy </Button>
        </ToolbarUpperNavbar>
        <ToolbarUpperNavbar>
          <ButtonNoStyles>{`<`}</ButtonNoStyles>BEZPŁATNA dostawa zamówień o
          wartości powyżej 200 zł!*Więcej
          <ButtonNoStyles>{`>`}</ButtonNoStyles>
        </ToolbarUpperNavbar> */}
        <ToolbarUpperNavbar>
          {isAuthenticated ? (
            <>
                <Button component={RouterLink} to="/account" disableRipple sx={{minHeight: '0',padding: '0','&:hover': {backgroundColor: 'transparent',}, }}>
                <Avatar
                  alt={user?.name}
                  src={userIcon}
                  sx={{ width: 24, height: 24, marginInline: '0.5rem' }}
                />
                {user?.name}
              </Button>
              |
              <ButtonNoStyles>
                <Avatar
                  alt={'points'}
                  src={pointsIcon}
                  sx={{ width: 24, height: 24, marginInline: '0.5rem' }}
                />
                {userConvex?.legoPoints} pkt.
              </ButtonNoStyles>
            </>
          ) : (
            <ButtonNoStyles onClick={() => loginWithRedirect()}>
              Login
            </ButtonNoStyles>
          )}
        </ToolbarUpperNavbar>
      </ContainerUpperNavbarWrapper>
    </AppBarUpperNavbarWrapper>
  );
};

export default UpperNavbar;
