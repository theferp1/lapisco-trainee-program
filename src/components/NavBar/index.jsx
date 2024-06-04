import {
  Container,
  Container01,
  NormalText,
  Icon,
  Container02,
  TitleText,
  Container03,
  Bar,
  Circle,
} from "./style";

import Bg from "../../../public/bgImage.png";
import Menu from "../../../public/Menu.svg"

function NavBar() {
  return (
    <Container>
      <Container01>
        <NormalText>Home</NormalText>
        <NormalText>Trainee</NormalText>
        <NormalText>Home</NormalText>
        <Icon src={Menu}></Icon>
      </Container01>
      <Container02>
        <TitleText>Lapisco</TitleText>
        <TitleText>Trainee Program</TitleText>
      </Container02>
      <Container03>
        <Bar />
        <Circle />
        <Bar />
      </Container03>
    </Container>
  );
}

export default NavBar;
