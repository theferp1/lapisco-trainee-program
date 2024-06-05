import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 80vh;

  background-image: url('../../../public/bgImage.png');
  border: solid 1px #29C61B;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
`;

export const Container01 = styled.ul`
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

  background-color: transparent;
  border: solid 1px #29C61B;
`;

export const NormalText = styled.li`

    text-decoration: none;
    list-style: none;
    font-size: larger;
    color: #e3e3e3;
    background-color: transparent;
`

export const Icon = styled.img`
    background-color: transparent;
    color: #e3e3e3;
`

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
    border: solid 1px #29C61B;
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

    width: 100%;
    height: 50%;  

    background-color: transparent;
    border: solid 1px #29C61B;
`
export const ContainerBar = styled.div`
    display: flex;
    width: 40%;
    border: solid 1px #29C61B;

    flex: 1;
`
export const Bar = styled.div`
    width: 100%;
    height: 25px;

    background-color: #C34036;

    &::nt
`
export const ContainerCircle = styled.div`
    display: flex;
    justify-content: center;

    width: 20%;
    height: 100%;

    position: relative;
    background-color: transparent;
    border: solid 1px #29C61B;

    flex: 0px 0px 250px;
`
export const Circle = styled.div`
  width: 100%; 
  height: 100%;

  background-color: #C34036;; /* Cor do círculo */
  border-radius: 50%; /* Torna o elemento um círculo */
`