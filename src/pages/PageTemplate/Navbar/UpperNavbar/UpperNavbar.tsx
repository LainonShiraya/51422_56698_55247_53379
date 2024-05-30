import { Avatar, Box, Button, Menu, MenuItem, MobileStepper, Paper, Typography, useTheme } from '@mui/material';
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
import React from 'react';
import { CenterFocusStrong, KeyboardArrowLeft, KeyboardArrowRight, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const UpperNavbar = () => {
  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0();
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
      label: 'BEZPŁATNA dostawa zamówień o wartości powyżej 200 zł!*Więcej'
    },
    {
      label: 'Zapisz sie na nasz newsletter'

    },
    {
      label: 'Odkrywaj najnowsze kolekcję Lego'

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const accountView = () => {
    navigate("/user")
  };


  return (
    <AppBarUpperNavbarWrapper>
      <ContainerUpperNavbarWrapper>
        <ToolbarUpperNavbar>
          <Button>{`<-`} Strefa Zabawy </Button>
        </ToolbarUpperNavbar>
        <ToolbarUpperNavbar>

          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>

          <Box sx={{ width: 500, }}>
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
              <Typography >{text[activeStep].label}</Typography>
            </Paper>
          </Box>

          <Button
              size="small"
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
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <Avatar
                    alt={user?.name}
                    src={userIcon}
                    sx={{ width: 24, height: 24, marginInline: '0.5rem' }}
                  />
                  {user?.name}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={() => accountView()}>My account</MenuItem>
                  <MenuItem onClick={() => logout()}>Logout</MenuItem>
                </Menu>
              </div>
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

