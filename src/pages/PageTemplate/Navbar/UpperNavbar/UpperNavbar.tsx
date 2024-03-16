import { Button } from '@mui/material';
import {
  AppBarUpperNavbarWrapper,
  ButtonNoStyles,
  ContainerUpperNavbarWrapper,
  ToolbarUpperNavbar,
} from './UpperNavbarStyles';

const UpperNavbar = () => {
  const FullName = 'Jan Kowalski';
  const icon = 'icon';
  const points = 100;
  return (
    <AppBarUpperNavbarWrapper>
      <ContainerUpperNavbarWrapper>
        <ToolbarUpperNavbar>
          <Button>{`<-`} Strefa Zabawy </Button>
        </ToolbarUpperNavbar>
        <ToolbarUpperNavbar>
          <ButtonNoStyles>{`<`}</ButtonNoStyles>BEZPŁATNA dostawa zamówień o
          wartości powyżej 200 zł!*Więcej
          <ButtonNoStyles>{`>`}</ButtonNoStyles>
        </ToolbarUpperNavbar>
        <ToolbarUpperNavbar>
          
          <ButtonNoStyles>
            {icon} {FullName}
          </ButtonNoStyles>
          |
          <ButtonNoStyles>
            {icon} {points} pkt.
          </ButtonNoStyles>
        </ToolbarUpperNavbar>
      </ContainerUpperNavbarWrapper>
    </AppBarUpperNavbarWrapper>
  );
};

export default UpperNavbar;
