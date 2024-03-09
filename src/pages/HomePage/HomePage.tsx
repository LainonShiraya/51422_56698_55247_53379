import Navbar from './Navbar/Navbar';
import { PageWrapper } from './HomePageStyles';
import Footer from './Footer/Footer';
import Container from '@mui/material/Container';

const HomePage = () => {
  return (
    <PageWrapper>
      <Navbar />
      <Container maxWidth='xl'>Homepage</Container>
      <Footer />
    </PageWrapper>
  );
};

export default HomePage;
