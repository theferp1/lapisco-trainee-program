import {
  Container,
  Container01,
  NormalText,
  Icon,
  Container02,
  TitleText,
  Container03,
  ContainerBar,
  Bar,
  ContainerCircle,
  Circle,
} from "./style";

import bolinhas from "../../../public/bolinhas.png"
import Menu from "../../../public/Menu.svg";

function NavBar() {

  return (
    <Container>
      <Container01>
          <NormalText><a href='#'>Home</a></NormalText>
          <NormalText  lText><a href='#'>Trainee</a></NormalText>
          <NormalText><a href='#'>About us</a></NormalText>
        <Icon src={Menu}></Icon>
      </Container01>
      <Container02>
        <TitleText>Lapisco</TitleText>
        <TitleText>Trainee Program</TitleText>
      </Container02>
      <Container03>
        <ContainerBar src={bolinhas}>
          <Bar />
        </ContainerBar>
        <ContainerCircle>  
          <Circle />
        </ContainerCircle>
        <ContainerBar> 
          <Bar />
        </ContainerBar> 
      </Container03>
    </Container>
  );
}

export default NavBar;
