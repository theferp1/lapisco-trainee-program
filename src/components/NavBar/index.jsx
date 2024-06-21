import {
  Container,
  Container01,
  NormalText,
  Icon,
  Container02,
  TitleText,
  Container03,
  ContainerBar,
  Semicircle,
  MiddleCircle,
} from "./style";
import React, { useState, useEffect } from "react";

import Menu from "../../../public/Menu.svg";

function NavBar() {
  /*Logica para o scroll da NavBar */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Container01 scrolled={scrolled}>
        <NormalText scrolled={scrolled}>
          <a href="#">Home</a>
        </NormalText>
        <NormalText scrolled={scrolled}>
          <a href="#">Trainee</a>
        </NormalText>
        <NormalText scrolled={scrolled}>
          <a href="#">About us</a>
        </NormalText>
        <Icon src={Menu} scrolled={scrolled}></Icon>
      </Container01>
      <Container02>
        <TitleText>Lapisco</TitleText>
        <TitleText>Trainee Program</TitleText>
      </Container02>
      <Container03>
        <ContainerBar>
          <Semicircle>
            <MiddleCircle>
              <img src="lapiscoLogo.svg" width={"80%"} />
            </MiddleCircle>
          </Semicircle>
        </ContainerBar>
      </Container03>
    </Container>
  );
}

export default NavBar;
