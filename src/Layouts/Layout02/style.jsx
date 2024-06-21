import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100vh;

    gap: 1.5rem;
    border: solid 1px yellow;
    
`
export const Container01 = styled.div`
    display: flex;
    width: 100%;

    padding-top: 5%;
    padding-left: 8%;
    
    border-top: solid 1.5px #9F9F9F;    
`;

export const Title = styled.h1`
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 60px;

    color: #C34036; 
`;

export const Container02 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 25%;
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
    
    padding-right: 250px;

    @media screen and (max-width: 875px) {
        font-size: smaller;
    }
`;