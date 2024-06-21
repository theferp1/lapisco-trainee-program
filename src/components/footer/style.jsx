import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 270px;
  
  border: solid 1px yellow;
`;
export const Container01 = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  height: 100%;

  background-color: #001b2e;
  border: solid 1px yellow;
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-left: 10%;
  padding-top: 4%;

  background-color: #001b2e;
  border: solid 1px yellow;
`;

export const ContainerImages = styled.div`
  width: 400px;
  height: 400px;

  background-color: transparent;
`;

export const Logos = styled.img`
  background-color: transparent;
`;

export const WhiteBarContainer = styled.div`
  display: flex;
  width: 2px;
  height: 100%;

  justify-content: center;
  align-items: center;

  background-color: #001b2e;
  border: solid 1px red;
`;

export const WhiteBar = styled.div`
  width: 100%;
  height: 80%;

  border-radius: 20px;

  background-color: white;
`;
export const ContainerMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40%;
  height: 100%;

  background-color: #001b2e;
  border: solid 1px yellow;
`;

export const NormalText = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;

  font-size: 14px;
  background-color: #001b2e;
  color: #ffffff;

  @media screen and (max-width: 875px) {
    font-size: smaller;
  }
`;
