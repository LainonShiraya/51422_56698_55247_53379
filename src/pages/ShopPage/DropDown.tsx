import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    disableScrollLock={true}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
    sx={{ zIndex: '1000' }}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 230,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function DropDown({
  sort,
  setSort,
}: {
  sort: {
    name: string;
    type: {
      index: 'by_sold' | 'by_price' | 'by_name' | 'by_creation_time';
      order: 'desc' | 'asc';
    };
  };
  setSort: React.Dispatch<
    React.SetStateAction<{
      name: string;
      type: {
        index: 'by_sold' | 'by_price' | 'by_name' | 'by_creation_time';
        order: 'desc' | 'asc';
      };
    }>
  >;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const sortCategories = [
    { name: 'Najnowsze', type: { index: 'by_creation_time', order: 'desc' } },
    {
      name: 'Cena: Od najniższej do najwyższej',
      type: { index: 'by_price', order: 'asc' },
    },
    {
      name: 'Cena: Od najwyższej do najniższej',
      type: { index: 'by_price', order: 'desc' },
    },
    { name: 'Alfabetycznie', type: { index: 'by_name', order: 'asc' } },
  ] as {
    name: string;
    type: {
      index: 'by_sold' | 'by_price' | 'by_name' | 'by_creation_time';
      order: 'desc' | 'asc';
    };
  }[];
  return (
    <div>
      <Button
        id='demo-customized-button'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Sortuj według: {sort.name}
      </Button>
      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
          sx: { minWidth: anchorEl && anchorEl.offsetWidth },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {sortCategories.map((category) => (
          <MenuItem
            onClick={() => {
              handleClose();
              setSort(category);
            }}
            disableRipple
          >
            {category.name}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
