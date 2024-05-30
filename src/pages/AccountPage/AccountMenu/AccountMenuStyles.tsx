import { ListItem } from "@mui/material";

export const ListItemStyles = ({ children }: { children?: React.ReactNode }) => (
  <ListItem
    sx={{
      paddingInline: '0.5rem',
      '&.Mui-selected': { 
        backgroundColor: 'blue',
      },
    }}
  >
    {children}
  </ListItem>
);
