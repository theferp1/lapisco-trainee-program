import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    width: auto;
    height: auto;

    gap: 40px;
`;

export const Ball = styled.div`
    display: flex;

    width: 70px;
    height: 70px;

    background-color: #e3e3e3; 
    border-radius: 50%;
    border: solid #001B2E 3px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1100px) {
      width: 60px;
      height: 60px;
    }
    @media screen and (max-width: 900px) {
      width: 52px;
      height: 52px;
    }
    @media screen and (max-width: 630px) {
      width: 44px;
      height: 44px;
    }
    @media screen and (max-width: 500px) {
      width: 36px;
      height: 36px;
    }
`;

export const BallRed = styled.div`
    display: flex;

    width: 68px;
    height: 68px;

    background-color:#C34036;  
    border-radius: 50%; 
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1100px) {
      width: 60px;
      height: 60px;
    }
    @media screen and (max-width: 900px) {
      width: 52px;
      height: 52px;
    }
    @media screen and (max-width: 630px) {
      width: 44px;
      height: 44px;
    }
    @media screen and (max-width: 500px) {
      width: 36px;
      height: 36px;
    }
    
`;

export const ContainerBalls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Number = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: x-large;
    background-color: transparent;

    @media screen and (max-width: 1100px) {
      font-size: 24px;
    }
    @media screen and (max-width: 900px) {
        font-size: 20px;
    }
    @media screen and (max-width: 630px) {
        font-size: 16px;
    }
    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

export const NumberRed = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: x-large;
    background-color: transparent; 
    color: #e3e3e3;

    @media screen and (max-width: 1100px) {
      font-size: 24px;
    }
    @media screen and (max-width: 900px) {
        font-size: 20px;
    }
    @media screen and (max-width: 630px) {
        font-size: 16px;
    }
    @media screen and (max-width: 500px) {
        font-size: 12px;
    }

`;


export const LabelBall = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: small;

    text-transform: uppercase;
`;

export const LabelBallRed = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: small;

    text-transform: uppercase;
    color: #C34036; 
`;
