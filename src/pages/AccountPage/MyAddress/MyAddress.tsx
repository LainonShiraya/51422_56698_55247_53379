import React, { useState, useEffect } from 'react';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { saveToLocalStorage, loadFromLocalStorage } from './MyAddressStorage';

interface AdresItem {
  fname: string;
  sname: string;
  phone: string;
  country: string;
  adres: string;
}


const MyAddress: React.FC = () => {
  const [showBox, setShowBox] = useState(true);
  const [formData, setFormData] = useState<AdresItem>({
    fname: '',
    sname: '',
    phone: '',
    country: '',
    adres: ''
  });

  useEffect(() => {
    const storedData = loadFromLocalStorage<AdresItem>('formData');
    if (storedData) {
      setFormData(storedData);
    }
  }, []);


  const handleButtonClick = () => {
    if (isFormComplete()) {
      saveToLocalStorage('formData', formData);
    }
    setShowBox(!showBox);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setFormData({
      ...formData,
      country: event.target.value as string
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const isFormComplete = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  return (
    <div>
      <Typography variant="h3" textAlign="left" marginBottom="2rem" color={'black'}>
        Mój adres
      </Typography>

      <Container
        sx={{
          display: 'flex',
        }}
      >
        <Box
          p={2}
          marginBottom="3rem"
          sx={{
            border: isFormComplete() && showBox ? 'none' : '2px dashed grey',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {showBox ? (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" color={'black'}>{formData.fname} {formData.sname} {formData.phone}</Typography>
              <Typography variant="h6" color={'black'}>{formData.adres} {formData.country}</Typography>
              <Button variant="text" onClick={handleButtonClick}>
                {isFormComplete() ? <EditIcon /> : <AddIcon />}
              </Button>
            </Box>
          ) : (
            <Container>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                  required
                  id="fname"
                  label="Imię"
                  variant="filled"
                  value={formData.fname}
                  onChange={handleInputChange}
                  sx={{ marginRight: '1rem' }}
                />
                <TextField
                  required
                  id="sname"
                  label="Nazwisko"
                  variant="filled"
                  value={formData.sname}
                  onChange={handleInputChange}
                />
                <Button variant="text" onClick={handleButtonClick}>
                  <CloseIcon />
                </Button>
              </div>
              <div>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Numer telefonu"
                  variant="filled"
                  value={formData.phone}
                  onChange={handleInputChange}
                  sx={{ marginTop: '1rem', marginBottom: '1rem' }}
                />
              </div>
              <div>
                <FormControl fullWidth variant="filled">
                  <InputLabel id="country-label">Kraj</InputLabel>
                  <Select
                    labelId="country-label"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <MenuItem value="Polska">Polska</MenuItem>
                    <MenuItem value="Gurom">Gurom</MenuItem>
                    <MenuItem value="!!1!1!oneoneone">!!1!1!oneoneone</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <TextField
                  required
                  fullWidth
                  id="adres"
                  label="Kod pocztowy, numer i nazwa ulicy"
                  variant="filled"
                  value={formData.adres}
                  onChange={handleInputChange}
                  sx={{ marginTop: '1rem' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <Button 
                  variant="text" 
                  onClick={handleButtonClick}
                  disabled={!isFormComplete()}
                >
                  Zapisz
                </Button>
              </div>
            </Container>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default MyAddress;