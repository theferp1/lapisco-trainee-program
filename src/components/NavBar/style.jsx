import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 70vh;

  background-image: url("../../../public/bgImage.png");

  background-size: initial;
  background-position: center;

  padding-top: 1;

  z-index: 0;
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
  z-index: 1;

  position: fixed;
  top: 0;
  transition: background-color 0.5s ease, border 0.5s ease;
  background-color: ${({ scrolled }) =>
    scrolled ? " #001B2E" : "transparent"};
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

  margin-top: 11.5%; /* Adiciona margem superior para evitar sobreposição */
  padding-left: 10px;
  fill-opacity: none;
`;

export const TitleText = styled.p`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 70px;
  background-color: transparent;

  line-height: 1em;

  padding-left: 8%;

  color: #e3e3e3;
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
  height: 21%;
  width: 100%;

`;

export const Semicircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0%; /* Posiciona o semicírculo no fundo do ContainerEnd */
  left: 50%; /* Centraliza horizontalmente no ContainerEnd */
  transform: translate(-50%, 75%);
  height: 110px; /* Metade da altura original */
  width: 220px; /* Largura total */
  border-radius: 0 0 110px 110px; /* Cria um semicírculo virado 180 graus */
  background-color: #c34036;
  z-index: 1; /* Certifique-se de que o semicírculo esteja por cima */

`;

export const MiddleCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: 3px solid white; /* Adiciona uma borda branca */
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin-bottom: 50%;
  background-color: #000914;
`;

export const Logo = styled.img`
  background-color: transparent;

  width: 80%;
  height: auto;
`;