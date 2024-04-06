import Container from '@mui/material/Container';
import { BoxOptionPickerOption } from './OptionPickerStyles';
import Disney from '../../../assets/OptionPickerIcons/Disney.png';
import News from '../../../assets/OptionPickerIcons/News.png';
import Oferts from '../../../assets/OptionPickerIcons/Oferts.png';
import StarWars from '../../../assets/OptionPickerIcons/Starwars.png';
const OptionPicker = () => {
  const options = [
    {
      img: News,
      title: 'Nowości',
    },
    {
      img: Oferts,
      title: 'Oferty',
    },
    {
      img: Disney,
      title: 'Disney',
    },
    {
      img: StarWars,
      title: 'Star Wars™',
    },
  ];

  return (
    <Container sx={{ display: 'flex', flexDirection: 'row' }}>
      {options.map((option) => (
        <BoxOptionPickerOption
          title={option.title}
          icon={option.img}
        />
      ))}
    </Container>
  );
};

export default OptionPicker;
