import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 270px;

    overflow: hidden;

`
export const Container01 = styled.div`
    display: flex;
    width: 60%;
    height: 100%;

    background-color: #001B2E;
    border: solid 1px white;
`
export const ContainerMap = styled.div`
    display: flex;

    width: 40%;
    height: 100%;

    background-color: #001B2E;
    border: solid 1px white;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: fit-content;
    padding-left: 30px;
    padding-right: 30px;

    background-color: #001B2E;
`;

export const NormalText = styled.p`
    margin-top: 8px;
    margin-bottom: 8px;

    font-size: 16px;
    background-color: #001B2E;
    color: #FFFFFF;

    @media screen and (max-width: 875px) {
        font-size: smaller;
    }
`;