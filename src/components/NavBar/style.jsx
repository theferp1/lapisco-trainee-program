import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 60vh;

  background-image: url('../../../public/bgImage.png');
  
  background-size: initial;
  background-position: center;
  position: relative;

  z-index: 0;
`;


export const Container01 = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  width: 100%;
  height: 10%;
  padding-right: 80px;
  gap: 50px;
  z-index: 1;

  position: fixed;
  transition: background-color 0.5s ease, border 0.5s ease;

  background-color: ${({ scrolled }) => (scrolled ? ' #001B2E' : 'transparent')};
`;

export const NormalText = styled.p`
    background-color: transparent;

    & a {
        background-color: transparent;
        color: ${({ scrolled }) => (scrolled ? '#ffffff' : '#e3e3e3')};
        text-decoration: none;

        &:hover {
            color: #b14141;

            &::after {
                transform: scaleX(1);
                transform-origin: bottom left;
            }
        }
    }
`;  

export const Icon = styled.img`
    background-color: transparent;
    color: ${({ scrolled }) => (scrolled ? '#ffffff' : '#e3e3e3')};
`;

export const Container02 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    width: 100%;
    height: 40%;  
   
    margin-top: 5%;
    padding-left: 10px;
    fill-opacity: none;
`
export const TitleText = styled.p`
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 70px;
    background-color: transparent;
    
    padding-left: 100px;

    color:  #e3e3e3;
`;


export const ContainerBar = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;    
    width: 100%;
    border: solid 1px green;
    background-color: transparent;
    
`
export const Bar = styled.div`
   
    justify-content: center;
    width: 100%;
    height: 20px;

    background-color: #C34036;
    

`
export const ContainerCircle = styled.div`
    width: 150px;
    height: 150px;
    background-color: blue;
    border: solid 1px green;
    margin-bottom: 50px;
   
`

export const Circle = styled.div`
  width: 150px; 
  height: 150px;
  margin-bottom: 200px;
  background-color: #C34036;
  border-radius: 50%; 
`;

export const Container03 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;

    width: 100%;
    height: 100%;

    background-color: transparent;
`;

export const ContainerEnd = styled.div`
    position: relative;  /* Adicione esta linha */
    background-color: #C34036;
    height: 12%;
    width: 100%;
`;

export const CircleTwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0%;  /* Posiciona o semicírculo no fundo do ContainerEnd */
    left: 50%;  /* Centraliza horizontalmente no ContainerEnd */
    transform: translate(-50%, 75%);
    height: 65px;  /* Metade da altura original */
    width: 130px;  /* Largura total */
    border-radius: 0 0 65px 65px;  /* Cria um semicírculo virado 180 graus */
    background-color: #C34036;
    z-index: 1;  /* Certifique-se de que o semicírculo esteja por cima */
`;

export const CircleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid white;  /* Adiciona uma borda branca */
    height: 110px;
    width: 110px;
    border-radius: 50%;
    margin-bottom: 50%;
    background-color: #000914;
`;
