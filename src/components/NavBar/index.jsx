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
  AnimationLogo,
} from "./style";
import React, { useState, useEffect } from "react";

import Menu from "../../../public/Menu.svg";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent > 9) { // 9% de scroll
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
            <AnimationLogo src="animation-lapisco.gif" width={"260%"} loop autoPlay muted ></AnimationLogo>
            </MiddleCircle>
          </Semicircle>
        </ContainerBar>
      </Container03>
    </Container>
  );
}

export default NavBar;
