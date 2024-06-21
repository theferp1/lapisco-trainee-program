import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    height: 100vh;

`
export const Container01 = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    padding-top: 5%;
    padding-left: 7.7%;
    
    
    border-top: solid 1.5px #9F9F9F;
`;

export const Title = styled.h1`
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 60px;
    
    color: #C34036;
`;

export const NormalText = styled.p`
    margin-top: 15px;
    margin-bottom: 15px;
    

    @media screen and (max-width: 875px) {
        font-size: smaller;
    }
`;

export const CarroselContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 85%;
    height: 250px;
    margin-top: 3%;

    border-left: solid 5px #C34036;
    border-right: solid 5px #C34036;
    background-color: #dbdbdb;
  
`