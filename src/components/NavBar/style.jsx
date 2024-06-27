import styled from "styled-components";
import { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 70vh;

  background-image: url("../../../public/bgImage.png");

  background-size: initial;
  background-position: center;

  z-index: 5;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 60vh;
  }

  @media screen and (max-width: 630px) {
    width: 100%;
    height: 50vh;
  }

  @media screen and (min-width: 1600px) {
    background-size: cover
  }

`;

export const Container01 = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  width: 100%;
  height: 10%;
  padding-right: 6%;
  gap: 5em;
  z-index: 2;

  position: fixed;
  top: 0;
  transition: background-color 0.6s ease, border 0.6s ease;
  background-color: ${({ scrolled }) =>
    scrolled ? " #001B2E" : "transparent"};

  
@media screen and (max-width: 900px) {
  gap: 4em;
  }

  @media screen and (max-width: 630px) {
    gap: 3em;
  }
`;

export const NormalText = styled.p`
  background-color: transparent;

  & a {
    background-color: transparent;
    color: ${({ scrolled }) => (scrolled ? "#ffffff" : "#e3e3e3")};
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: #b14141;
      font-size: 15px;

      &::after {
        transform: scaleX(1);
        transform-origin: bottom left;
        font-size: 14px;
      }
    }
  }

  @media screen and (min-width: 1600px) {
    background-color: transparent;

  & a {
    background-color: transparent;
    color: ${({ scrolled }) => (scrolled ? "#ffffff" : "#e3e3e3")};
    text-decoration: none;
    font-size: 18px;

    &:hover {
      color: #b14141;
      font-size: 19px;

      &::after {
        transform: scaleX(1);
        transform-origin: bottom left;
        font-size: 18px;
      }
    }
  }
  }

`;

export const Icon = styled.img`
  background-color: transparent;
  color: ${({ scrolled }) => (scrolled ? "#ffffff" : "#e3e3e3")};


`;

export const Container02 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  height: 40%;

  margin-top: 8%; /* Adiciona margem superior para evitar sobreposição */
  padding-left: 8%;
  
  @media screen and (max-width: 900px) {
    margin-top: 11%;
  }

  @media screen and (max-width: 630px) {
    margin-top: 12%;
  }

  @media screen and (max-width: 500px) {
    margin-top: 19%;
  }
`;

export const TitleText = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 70px;
  background-color: transparent;
  line-height: 1.1em;
  letter-spacing: 3px;
  color: #e3e3e3;

  @media screen and (min-width: 1980px) {
    font-size: 100px;
  }
  @media screen and (max-width: 900px) {
    font-size: 55px;
  }
  @media screen and (max-width: 630px) {
    font-size: 50px;
  }
  @media screen and (max-width: 500px) {
    font-size: 45px;
  }
`;

export const Bar = styled.div`
  justify-content: center;
  width: 100%;
  height: 20px;

  background-color: #c34036;
`;

export const Container03 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;

  width: 100%;
  height: 100%;

  background-color: transparent;
`;

export const ContainerBar = styled.div`
  position: relative;
  background-color: #c34036;
  height: 25px;
  width: 100%;

  @media screen and (max-width: 900px) {
    height: 18px;
  }
  @media screen and (max-width: 500px) {
    height: 12px;
  }
`;

export const Semicircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0%; /* Posiciona o semicírculo no fundo do ContainerEnd */
  left: 50%; /* Centraliza horizontalmente no ContainerEnd */
  transform: translate(-50%, 85%);
  height: 110px; /* Metade da altura original */
  width: 220px; /* Largura total */
  border-radius: 0 0 110px 110px; /* Cria um semicírculo virado 180 graus */
  background-color: #c34036;
  z-index: 1; /* Certifique-se de que o semicírculo esteja por cima */
  

  @media screen and (max-width: 900px) {
    height: 95px;
    width: 190px;
    border-radius: 0 0 95px 95px; 
  }

  @media screen and (max-width: 500px) {
    height: 75px;
    width: 150px;
    border-radius: 0 0 75px 75px; 
  }
`;

export const MiddleCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: 4px solid white; /* Adiciona uma borda branca */
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin-bottom: 50%;
  background-color: #000914;

  @media screen and (max-width: 900px) {
    outline: 3px solid white;
    height: 160px; 
    width: 160px; 
  }

  @media screen and (max-width: 500px) {
    height: 125px; 
    width: 125px; 
  }
`;

export const Logo = styled.img`
  background-color: transparent;

  width: 70%;
  height: auto;
`;

export const AnimationLogo = styled.img`
  width: 80%;
  background-color: transparent;
`;