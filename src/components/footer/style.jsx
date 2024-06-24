import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 300px;

  margin-top: 500px;
  
`;
export const Container01 = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  height: 100%;

  background-color: #001b2e;
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-left: 12%;
  padding-top: %;

  background-color: #001b2e;
`;

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;

  padding-left: 12%;
  
  padding-top: 5%;
  gap: 50px;

  width: 100%;
  height: auto;

  background-color: transparent;
`;

export const Logos = styled.img`
  height: auto;
  background-color: transparent;
`;

export const WhiteBarContainer = styled.div`
  display: flex;
  width: 2px;
  height: 100%;

  justify-content: center;
  align-items: center;

  background-color: #001b2e;
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
