import PageTemplate from '../PageTemplate/PageTemplate';
import Banner from './Banner/Banner';
import OptionPicker from './OptionPicker/OptionPicker';

const HomePage = () => {
  return (
    <PageTemplate>
      <Banner />
      <OptionPicker />
    </PageTemplate>
  );
};

export default HomePage;
