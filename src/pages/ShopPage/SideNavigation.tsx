import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SideNavigation = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        position: 'sticky',
        top: '2rem',
        padding: '0 !important',
      }}
    >
      <Divider sx={{ height: '2px' }} />
      <Checkbox /> Pokaż tylko dostępne
      <Accordion
        defaultExpanded
        sx={{ backgroundColor: 'inherit', border: 'none', boxShadow: 'none' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography fontWeight='700'>Rodzaj Produktu</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 !important', textWrap: 'wrap' }}>
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
        </AccordionDetails>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography fontWeight='700'>Cena</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 !important', textWrap: 'wrap' }}>
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
        </AccordionDetails>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography fontWeight='700'>Tematyka</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 !important', textWrap: 'wrap' }}>
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
        </AccordionDetails>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <Typography fontWeight='700'>Zainteresowania</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 !important', textWrap: 'wrap' }}>
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
          <Checkbox /> Pokaż tylko dostępne
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default SideNavigation;
