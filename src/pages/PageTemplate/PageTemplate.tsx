import Navbar from './Navbar/Navbar';
import Slider from './slider/Slider';
import { PageWrapper } from './PageTemplateStyles';
import Footer from './Footer/Footer';
import Container from '@mui/material/Container';

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper>
      <Navbar />
      <Slider />
      <Container maxWidth='xl'>{children}</Container>
      <Footer />
    </PageWrapper>
  );
};

export default HomePage;
