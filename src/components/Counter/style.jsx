import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: auto;
  height: auto;

  gap: 5rem;

  @media screen and (max-width: 1100px) {
    gap: 4rem;
  }
  @media screen and (max-width: 900px) {
    gap: 3rem;
  }
  @media screen and (max-width: 630px) {
    gap: 2rem;
  }
  @media screen and (max-width: 500px) {
    gap: 1rem;
  }
`;

export const Ball = styled.div`
  display: flex;

  width: 70px;
  height: 70px;

  background-color: #e3e3e3;
  border-radius: 50%;
  border: solid #001b2e 3px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 900px) {
    width: 52px;
    height: 52px;
    border: solid #001b2e 2px;
  }
  @media screen and (max-width: 630px) {
    width: 44px;
    height: 44px;
  }
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

export const BallRed = styled.div`
  display: flex;

  width: 70px;
  height: 70px;

  border: solid #c34036 2px;
  background-color: #c34036;
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
    border: solid #c34036 2px;
  }
  @media screen and (max-width: 630px) {
    width: 44px;
    height: 44px;
  }
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 40px;
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
  font-size: 17px;

  text-transform: uppercase;

  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
  @media screen and (max-width: 630px) {
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

export const LabelBallRed = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 17px;

    text-transform: uppercase;
    color: #C34036; 

    @media screen and (max-width: 1100px) {
        
        font-size: 16px;
        }
        @media screen and (max-width: 900px) {
            
        font-size: 15px;
        }
        @media screen and (max-width: 630px) {
            
        font-size: 14px;
        }
        @media screen and (max-width: 500px) {
            
        font-size: 13px;

        }
`;
