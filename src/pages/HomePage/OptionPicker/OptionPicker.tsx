import Container from '@mui/material/Container';
import { BoxOptionPickerOption } from './OptionPickerStyles';
import Disney from '../../../assets/OptionPickerIcons/Disney.png';
import News from '../../../assets/OptionPickerIcons/News.png';
import Oferts from '../../../assets/OptionPickerIcons/Oferts.png';
import StarWars from '../../../assets/OptionPickerIcons/Starwars.png';
import { useNavigate } from 'react-router-dom';
const OptionPicker = () => {
  const navigate = useNavigate();
  const options = [
    {
      img: News,
      title: 'Nowości',
      tag: 'new',
    },
    {
      img: Oferts,
      title: 'Oferty',
      tag: 'sale',
    },
    {
      img: Disney,
      title: 'Disney',
      tag: 'Disney',
    },
    {
      img: StarWars,
      title: 'Star Wars™',
      tag: 'starWars',
    },
  ];

  return (
    <Container sx={{ display: 'flex', flexDirection: 'row' }}>
      {options.map((option, key) => (
        <BoxOptionPickerOption
          key={key}
          title={option.title}
          icon={option.img}
          onClick={() => {
            navigate(`../shop/sortCategory/${option.tag}`);
          }}
        />
      ))}
    </Container>
  );
};

export default OptionPicker;
