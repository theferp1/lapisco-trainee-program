import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 80vh;

  background-image: url('../../../public/bgImage.png');
  border: solid 1px black;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;  /* Added z-index for background image */
`;

export const Container01 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  width: 100%;
  height: 10%;
  gap: 50px;
  z-index: 1;
`;


export const NormalText = styled.div`
    color: black;
`
export const Icon = styled.img`

`
export const Container02 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 40%;  
   
    padding-left: 10px;
    fill-opacity: none;
    border: solid 1px black;
`
export const TitleText = styled.div`
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 70px;
    
    padding-left: 100px;

    color:  #001B2E;
`;

export const Container03 = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

    width: 100%;
    height: 50%;  

    border: solid 1px black;
`

export const Bar = styled.div`
    width: 40%;
    height: 25px;

    background-color: #C34036;
`

export const Circle = styled.div`
    width: 20%;
    height: 245px;

    border-radius: 50%;
    background-color: #001B2E;
`