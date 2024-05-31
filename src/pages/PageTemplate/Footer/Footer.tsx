import Grid from '@mui/material/Grid';
import logo from '../../../assets/logo.png';
import Container from '@mui/material/Container';
import {
  ButtonRegionFooter,
  ButtonTextFooter,
  GridFooterVertical,
  TypographyTitleFooter,
} from './FooterStyles';
const Footer = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: '#5D2E8C',
        color: '#FFF',
        paddingBottom: '2rem',
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
    </Container>
  );
};

export default Footer;
