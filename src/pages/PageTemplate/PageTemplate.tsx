import Navbar from './Navbar/Navbar';
import { PageWrapper } from './PageTemplateStyles';
import Footer from './Footer/Footer';
import Container from '@mui/material/Container';

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper>
      <Navbar />
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginBottom: '2rem',
        }}
      >
        {children}
      </Container>
      <Footer />
    </PageWrapper>
  );
};

export default HomePage;
