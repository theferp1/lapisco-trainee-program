
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100vw;
    height: 100vh;

    gap: 1.5rem;

    /* */ 
    
`
export const Container01 = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
`;

export const Title = styled.h1`
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 60px;
    
    
    padding-left: 100px;

    color: #C34036; 
`;

export const Container02 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
`;

export const ContainerRedBar = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    
    width: 9%;
    height: 100%;
`

export const RedBar = styled.div`
    width: 4px;
    height: 90%;
    background-color: #C34036;
    border-radius: 20px;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: fit-content;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;;
`;

export const NormalText = styled.p`
    margin-top: 15px;
    margin-bottom: 15px;
    
    padding-right: 0px;

    @media screen and (max-width: 875px) {
        font-size: smaller;
    }
`;

export const Highlighted = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: small;

    color: #C34036;

    @media screen and (max-width: 875px) {
        font-size: smaller;
    }
`;

export const Highlighted02 = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: medium;
    letter-spacing: 2px;

    color: #C34036;

    @media screen and (max-width: 875px) {
        font-size: small;
    }
`;

export const Container03 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: fit-content;
`;



