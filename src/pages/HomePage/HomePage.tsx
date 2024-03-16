import PageTemplate from '../PageTemplate/PageTemplate';
import Banner from './Banner/Banner';
import OptionPicker from './OptionPicker/OptionPicker';
import WeeklyPicked from './WeeklyPicked/WeeklyPicked';

const HomePage = () => {
  return (
    <PageTemplate>
      <Banner />
      <OptionPicker />
      <WeeklyPicked />
    </PageTemplate>
  );
};

export default HomePage;
