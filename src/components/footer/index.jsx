import {
  Container,
  Container01,
  ContainerMap,
  ContainerText,
  ContainerImages,
  Logos,
  NormalText,
  WhiteBarContainer,
  WhiteBar,
} from "./style";
import MyComponent from "../Map";

function Footer() {
  return (
    <Container>
      <Container01>
        <ContainerText>
          <NormalText>
            LAPISCO - Laboratory for processing image, signals and computer
            science
          </NormalText>
          <NormalText>
            Prédio de Pesquisa - Av. Treze de Maio, 2081 - 2º andar - Benfica,
            Fortaleza - CE, 60040-215
          </NormalText>
        </ContainerText>
        <ContainerImages>
          <Logos src="lapiscoLogo.png" width={"30%"}></Logos>
          <Logos src="ifceLogo.png" width= {"55%"}></Logos>
        </ContainerImages>
      </Container01>
      <WhiteBarContainer>
        <WhiteBar />
      </WhiteBarContainer>
      <ContainerMap>
        <MyComponent />
      </ContainerMap>
    </Container>
  );
}

export default Footer;
