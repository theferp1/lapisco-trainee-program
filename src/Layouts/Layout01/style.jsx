import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  gap: 1.5rem;
  margin-bottom: 4%;

  @media screen and (max-width: 1100px) {
    margin-bottom: 7%;
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 8%;
  }
  @media screen and (max-width: 630px) {
    margin-bottom: 9%;
  }
`;
export const Container01 = styled.div`
  display: flex;
  width: 100%;

  padding-top: 5%;
  padding-left: 8.8%;

  @media screen and (max-width: 1100px) {
    margin-top: 8%;
  }
  @media screen and (max-width: 900px) {
    margin-top: 10%;
  }
  @media screen and (max-width: 630px) {
    margin-top: 13%;
  }
`;

export const Title = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 60px;

  color: #c34036;
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
  height: fit-content;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 1%;
`;

export const NormalText = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;

  @media screen and (max-width: 875px) {
    font-size: smaller;
  }
`;

export const Highlighted = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: small;

  color: #c34036;

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

  color: #c34036;

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

  margin-bottom: 30%;
`;
