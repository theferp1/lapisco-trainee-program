import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  gap: 1.5rem;

  margin-top: 8%;

  @media screen and (max-width: 1100px) {
    margin-top: 17%;
  }
  @media screen and (max-width: 900px) {
    margin-top: 14%;
  }
  @media screen and (max-width: 630px) {
    margin-top: 12%;
  }
  @media screen and (max-width: 500px) {
    margin-top: 8%;
  }
`;
export const Container01 = styled.div`
  display: flex;
  width: 100%;

  padding-top: 5%;
  padding-left: 8.5%;

  border-top: solid 1.5px #9f9f9f;
`;

export const Title = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 60px;

  color: #c34036;

  @media screen and (max-width: 1100px) {
    font-size: 55px;
  }
  @media screen and (max-width: 900px) {
    font-size: 50px;
  }
  @media screen and (max-width: 630px) {
    font-size: 45px;
  }
`;

export const Container02 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
`;

export const ContainerRedBar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  width: 9%;
  height: 100%;
  padding-left: 8%;
`;

export const RedBar = styled.div`
  width: 4px;
  height: 90%;
  background-color: #c34036;
  border-radius: 20px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding-left: 3%;
  margin-right: 9%;
`;

export const NormalText = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;

  @media screen and (max-width: 875px) {
    font-size: smaller;
  }
`;

export const Logos = styled.img`
  background-color: transparent;
`;
