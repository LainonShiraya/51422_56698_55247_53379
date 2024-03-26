import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const Theme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: '#FFD100',
        contrastText: '#000',
      },
      secondary: {
        main: 'hsl(0, 0%, 100%)',
        contrastText: '#000',
      },
    },
    typography: {
      allVariants: {
        fontFamily: '"Lato",sans-serif',
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'text' &&
              ownerState.color === 'primary' && {
                backgroundColor: 'inherit',
                color: '#4b4f56',
                textTransform: 'none',
                margin: 'auto',
                '&:hover': {
                  backgroundColor: 'inherit',
                  textDecoration: 'underline',
                },
                '&:focus': {
                  outline: 'none',
                },
                '&:active': {
                  outline: 'none',
                },
              }),
            ...(ownerState.variant === 'contained' && {
              textTransform: 'none',
              fontSize: '1rem',
              margin: 'auto',
            }),
          }),
        },
      },
    },
  })
);
