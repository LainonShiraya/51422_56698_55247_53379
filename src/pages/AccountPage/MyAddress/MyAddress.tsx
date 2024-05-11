import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const MyAddress: React.FC = () => {

  const [showBox, setShowBox] = useState(true);

  const handleButtonClick = () => {
    setShowBox(!showBox);
  };

  const [Country, setCountry] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  }

  return (
    <div>
  <Typography variant="h3" textAlign="left" marginBottom="2rem" color={'black'}>
    Mój adres
  </Typography>

  <Container
  // maxWidth='xl'
  sx={{
    display: 'flex',
  }}
>
<Box
  p={2}
  marginBottom="3rem"
  sx={{ 
    border: '2px dashed grey',
    display: 'flex',
    justifyContent: 'center', // Wycentrowanie zawartości poziomo
    alignItems: 'center', // Wycentrowanie zawartości pionowo
    width: '100%', // Ustawienie szerokości na 100%
  }}
>
{showBox && (
      <Button variant="text" onClick={handleButtonClick}>
        <AddIcon />
      </Button>)}

      {!showBox && (
        <Container>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <TextField
        required
        id="filled-required"
        label="Imię"
        variant="filled"
        sx={{ marginRight: '1rem' }}
      />
      <TextField
        required
        id="filled-required"
        label="Nazwisko"
        variant="filled"
      />
      <Button variant="text" onClick={handleButtonClick}>
        <CloseIcon />
      </Button>
    </div>
      <div>
      <TextField
        required
        fullWidth
        id="filled-required"
        label="Numer telefonu"
        variant="filled"
        sx={{ marginTop: '1rem', marginBottom: '1rem' }}
      />
      </div>
      <div>
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">Kraj</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Country}
          label="Kraj"
          onChange={handleChange}
        >
          <MenuItem value={10}>Polska</MenuItem>
          <MenuItem value={20}>Gurom</MenuItem>
          <MenuItem value={30}>!!1!1!oneoneone</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>
      <TextField
        required
        fullWidth
        id="filled-required"
        label="Kod pocztowy,numer i nazwa ulicy"
        variant="filled"
        sx={{ marginTop: '1rem' }}
      />
      </div>
        </Container>)}


</Box>;
</Container>

    </div>
  );
};

export default MyAddress;
