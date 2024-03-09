import Navbar from './Navbar/Navbar';
import { PageWrapper } from './PageTemplateStyles';
import Footer from './Footer/Footer';
import Container from '@mui/material/Container';

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper>
      <Navbar />
      <Container maxWidth='xl'>{children}</Container>
      <Footer />
    </PageWrapper>
  );
};

export default HomePage;
