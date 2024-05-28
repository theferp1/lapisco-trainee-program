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

    width: 65px;
    height: 65px;

    background-color: #e3e3e3; /* Cor de fundo da div */
    border-radius: 50%; /* Faz a div ficar redonda */
    border: solid #001B2E 3px;
    align-items: center;
    justify-content: center;
`;

export const BallRed = styled.div`
    display: flex;

    width: 65px;
    height: 65px;

    background-color:#C34036;  /* Cor de fundo da div */
    border-radius: 50%; /* Faz a div ficar redonda */
    border: solid #C34036  3px;
    align-items: center;
    justify-content: center;
`;


export const ContainerYears = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerMembers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerPapers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerCoffes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Number = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: x-large;
`;

export const NumberRed = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: x-large;
    background-color: #C34036; 
    color: #e3e3e3;

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
