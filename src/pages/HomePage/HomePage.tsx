import PageTemplate from '../PageTemplate/PageTemplate';
import Banner from './Banner/Banner';
import OptionPicker from './OptionPicker/OptionPicker';
import ReccomendedSets from './ReccomendedSets/ReccomendedSets';
import WeeklyPicked from './WeeklyPicked/WeeklyPicked';

const HomePage = () => {
  return (
    <PageTemplate>
      <Banner />
      <OptionPicker />
      <WeeklyPicked />
      <ReccomendedSets />
    </PageTemplate>
  );
};

export default HomePage;
