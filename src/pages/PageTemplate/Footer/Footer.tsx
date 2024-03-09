import Grid from '@mui/material/Grid';
import logo from '../../../assets/logo.png';
import Container from '@mui/material/Container';
import {
  ButtonRegionFooter,
  ButtonTextFooter,
  GridFooterVertical,
  TypographyTitleFooter,
} from './FooterStyles';
import students from '../../../assets/students';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
const Footer = () => {
  const moveToGithub = (link: string) => {
    window.open(link);
  };
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: '#5D2E8C',
        color: '#FFF',
      }}
    >
      <Grid
        container
        spacing={2}
        maxWidth='lg'
        sx={{ margin: 'auto' }}
      >
        <GridFooterVertical>
          <img
            src={logo}
            width='104px'
          />
          <ButtonRegionFooter>Polska</ButtonRegionFooter>
          <ButtonTextFooter>Karty Podarunkowe</ButtonTextFooter>
          <ButtonTextFooter>Zainspiruj się</ButtonTextFooter>
          <ButtonTextFooter>Katalogi LEGO</ButtonTextFooter>
          <ButtonTextFooter>Adresy sklepów</ButtonTextFooter>
        </GridFooterVertical>
        <GridFooterVertical>
          <TypographyTitleFooter>O nas</TypographyTitleFooter>
          <ButtonTextFooter>Kim jesteśmy</ButtonTextFooter>
          <ButtonTextFooter>Praca z nami</ButtonTextFooter>
          <ButtonTextFooter>Dostawy</ButtonTextFooter>
        </GridFooterVertical>
        <GridFooterVertical>
          <TypographyTitleFooter>Obsługa Klienta</TypographyTitleFooter>
          <ButtonTextFooter>Skontaktuj się z nami</ButtonTextFooter>
          <ButtonTextFooter>Zwrot produktów</ButtonTextFooter>
          <ButtonTextFooter>Sposoby płatności</ButtonTextFooter>
          <ButtonTextFooter>Zasady i warunki</ButtonTextFooter>
          <ButtonTextFooter>Reklamacje</ButtonTextFooter>
        </GridFooterVertical>
        <GridFooterVertical>
          <TypographyTitleFooter>Produkty</TypographyTitleFooter>
          <ButtonTextFooter>Nadchodzące zestawy</ButtonTextFooter>
          <ButtonTextFooter>Wycofane zestawy</ButtonTextFooter>
          <ButtonTextFooter>Wyprzedaże</ButtonTextFooter>
        </GridFooterVertical>
      </Grid>
      <Box
        sx={{
          marginBlock: '2rem',
          marginInline: 'auto',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          gap: '0.5rem',
        }}
      >
        <Typography
          fontWeight='700'
          variant='h6'
        >
          Studenci zajmujący się pracą zaliczeniową:{' '}
        </Typography>
        {students.map((student) => (
          <Button
            key={student.studentId}
            variant='text'
            sx={{ color: '#FFF' }}
            onClick={() => {
              moveToGithub(student.githubLink);
            }}
          >
            {student.fullname} - {student.studentId}{' '}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default Footer;
