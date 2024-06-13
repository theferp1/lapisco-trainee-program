import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

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
  padding-right: 70px;
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

export const Container03 = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    margin-top: ;

    width: 100%;
    height: 50%;  

    background-color: transparent;
    
`
export const ContainerBar = styled.div`
    display: flex;
    width: 40%;
    
`
export const Bar = styled.div`
    width: 100%;
    height: 25px;

    background-color: #C34036;
    

`
export const ContainerCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20%;
    height: 100%;

    position: relative;
    background-color: transparent;
`


export const ContainerCircle2 = styled.div`
    width:100%;
    height: 100%;

    background-color: transparent;
`
export const Circle = styled.div`
  width: 100%; 
  height: 100%;

  background-color: #C34036;
  border-radius: 50%; 
`;