import { Container, Typography } from '@mui/material';
import OfferCard from './OfferCard/OfferCard';
import SnowWhite from '../../../assets/WeeklyPicked/SnowWhite.jpeg';
import Technic from '../../../assets/WeeklyPicked/Technic.jpeg';
import Senna from '../../../assets/WeeklyPicked/Senna.jpeg';

const WeeklyPicked = () => {
  const weeklyOferts = [
    {
      title: 'Chatka Królewny Śnieżki i siedmiu krasnoludków',
      description:
        'Przywołaj miłe wspomnienia, budując nowy, czarujący zestaw oparty na kultowym filmie.',
      image: SnowWhite,
    },
    {
      title: 'Podkręć kreatywne emocje',
      description:
        'Złóż hołd światu sportów motorowych za pomocą nowych zestawów LEGO® Icons.',
      image: Senna,
    },
    {
      title: 'Daj się ponieść kreatywności',
      description:
        'Nowe zestawy LEGO® Technic zawierają mnóstwo autentycznych detali dla fanów motoryzacji.',
      image: Technic,
    },
  ];
  return (
    <Container maxWidth='xl'>
      <Typography
        variant='h4'
        color='#000'
        fontWeight='500'
        marginBlock='2rem'
      >
        Najczęściej wybierane w tym tygodniu
      </Typography>
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          padding: '0 !important',
          margin: 'auto',
        }}
      >
        {weeklyOferts.map((ofert) => (
          <OfferCard
            image={ofert.image}
            title={ofert.title}
            description={ofert.description}
          />
        ))}
      </Container>
    </Container>
  );
};

export default WeeklyPicked;
