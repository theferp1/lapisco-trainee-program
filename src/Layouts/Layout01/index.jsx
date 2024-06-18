import { Container, Container01, Title, Container02, ContainerRedBar, RedBar, ContainerText, NormalText, Highlighted, Highlighted02, Container03} from "./style";
import Counter from "../../components/Counter";

function Layout01() {
  return (
    <Container>
      <Container01>
        <Title>Welcome to our lab!</Title>
      </Container01>
      <Container02>
        <ContainerRedBar>
          <RedBar/>
        </ContainerRedBar>
        <ContainerText>
          <NormalText>In this lab, we are <Highlighted>happy,</Highlighted> we are <Highlighted>helpful,</Highlighted> we respect each other, we do <Highlighted>teamwork,</Highlighted> we are friends, we <Highlighted>have fun.</Highlighted></NormalText>
          <NormalText>We make <Highlighted>coffee, cake, popcorn</Highlighted> and a lot of <Highlighted>projects and papers.</Highlighted></NormalText>
          <NormalText><Highlighted>We celebrate</Highlighted> each achievement, each step and each individual improvement as <Highlighted>a team.</Highlighted> We do it with food (a lot of it), <Highlighted>pride and friendship.</Highlighted></NormalText>
          <NormalText>We are a team. We are like a <Highlighted>brotherhood.</Highlighted> We are <Highlighted02>LAPISCO.</Highlighted02></NormalText>
          <NormalText><Highlighted>Nice to meet you!</Highlighted></NormalText>
        </ContainerText>
      </Container02>
      <Container03><Counter/></Container03>
    </Container>
  );
}

export default Layout01;
