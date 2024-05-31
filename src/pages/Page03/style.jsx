import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100vw;
    height: 100vh;

`
export const Container01 = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    padding-top: 50px;
    
    
    border-top: solid 1.5px #9F9F9F;
`;

export const Title = styled.h1`
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 60px;
    
    padding-left: 100px;

    color: #C34036;
`;

export const NormalText = styled.p`
    margin-top: 15px;
    margin-bottom: 15px;
    
    padding-right: 0px;

    @media screen and (max-width: 875px) {
        font-size: smaller;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: fit-content;
    padding-left: 8rem;
    padding-right: 40px;
`;

export const CarroselContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 150px;

    border: solid 1px black;
`