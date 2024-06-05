import {
  Container,
  Container01,
  Container01Scrolled, 
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

import Bg from "../../../public/bgImage.png";
import Menu from "../../../public/Menu.svg";

function NavBar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  return (
    <Container>
      <Container01>
        <NormalText>Home</NormalText>
        <NormalText>Trainee</NormalText>
        <NormalText>Home</NormalText>
        <NormalText>About us</NormalText>
        <Icon src={Menu}></Icon>
      </Container01>
      <Container02>
        <TitleText>Lapisco</TitleText>
        <TitleText>Trainee Program</TitleText>
      </Container02>
      <Container03>
        <ContainerBar>
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
