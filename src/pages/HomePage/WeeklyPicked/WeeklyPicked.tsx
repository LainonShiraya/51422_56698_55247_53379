import { Container, Typography } from '@mui/material';
import OfferCard from './OfferCard/OfferCard';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
const WeeklyPicked = () => {
  const weeklyOferts = useQuery(api.products.getTop3WeeklySets);
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
        {weeklyOferts?.map((ofert) => (
          <OfferCard
            key={ofert._id}
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
