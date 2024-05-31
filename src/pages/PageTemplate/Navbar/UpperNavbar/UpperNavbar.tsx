import {
  Avatar,
  Box,
  Button,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
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
import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

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

  const text = [
    {
      label: 'BEZPŁATNA dostawa zamówień o wartości powyżej 200 zł!*Więcej',
    },
    {
      label: 'Zapisz sie na nasz newsletter',
    },
    {
      label: 'Odkrywaj najnowsze kolekcję Lego',
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = text.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <AppBarUpperNavbarWrapper>
      <ContainerUpperNavbarWrapper>
        <ToolbarUpperNavbar>
          <Button
            variant='contained'
            size='small'
            sx={{ padding: '0.2rem 0.5rem !important' }}
          >
            {`<-`} Strefa Zabawy{' '}
          </Button>
        </ToolbarUpperNavbar>
        <ToolbarUpperNavbar>
          <Button
            size='small'
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>

          <Box sx={{ width: 500 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 20,
                pl: 2,
                bgcolor: 'transparent',
              }}
            >
              <Typography>{text[activeStep].label}</Typography>
            </Paper>
          </Box>

          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        </ToolbarUpperNavbar>
        <ToolbarUpperNavbar>
          {isAuthenticated ? (
            <>
              <Button
                component={RouterLink}
                to='/account'
                disableRipple
                sx={{
                  minHeight: '0',
                  padding: '0',
                  '&:hover': { backgroundColor: 'transparent' },
                }}
              >
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
