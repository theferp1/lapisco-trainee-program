import { useNavigate } from "react-router-dom";
import {
  Container,
  Container01,
  Title,
  NormalText,
  CarroselContainer,
} from "./style";
import { Carousel } from "../../components/Carousel";

function Layout03() {
  return (
    <Container>
      <Container01>
        <Title>Our Courses</Title>
        <NormalText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </NormalText>
      </Container01>
      <CarroselContainer>
        <Carousel />
      </CarroselContainer>
    </Container>
  );
}

export default Layout03;
