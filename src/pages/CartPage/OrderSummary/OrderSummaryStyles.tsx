//import Box from '@mui/material';
import Button from '@mui/material/Button';

// export const BoxOptionPickerOption = ({
//   icon,
//   title,
// }: {
//   children?: React.ReactNode;
//   icon: string;
//   title: string;
// }) => (
//   <Button
//     disableRipple
//     variant='text'
//     sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       '&:focus': {
//         outline: 'none',
//       },
//       '&:active': {
//         outline: 'none',
//       },
//       '&:hover': {
//         backgroundColor: 'transparent',
//       },
//     }}
//   >
//     <Box>
//       <img src={icon} />
//     </Box>
//     {title}
//   </Button>
// );

export const ButtonSemiCircular = ({
  children,
  onClick,
  disabled,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) => (
  <Button
    variant='contained'
    disableRipple
    disabled={disabled}
    style={{
      borderRadius: '20px 20px 20px 20px', // Ustawiamy 50% dla każdego rogu górnego
      width: '100%',
    }}
    onClick={onClick}
  >
    {children}
  </Button>
);

// export const OrderSummaryStyle = {
//   color: 'black',
//   listStyleType: 'none',
//   lineHeight: '3'
// };

// eslint-disable-next-line react-refresh/only-export-components
export const OrderValueStyle = {
  color: 'black',
  textAlign: 'right',
  fontWeight: 'bold',
};
