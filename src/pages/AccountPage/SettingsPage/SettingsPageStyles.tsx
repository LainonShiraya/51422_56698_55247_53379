import { ListItem } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const ListItemStyles = ({ children }: { children?: React.ReactNode }) => (
  <ListItem
    sx={{
      color:'black',
      paddingInline: '0.5rem',
      '&.Mui-selected': { 
        backgroundColor: 'blue',
        
      },
    }}
  >
    {children}
    <ArrowForwardIosIcon /> 
  </ListItem>
);
