import { Container, Container01, ContainerMap, ContainerText, NormalText, WhiteBarContainer, WhiteBar } from './style'
import MyComponent from '../Map';

function Footer () {
    return(
        <Container>
            <Container01>
                <ContainerText>
                    <NormalText>LAPISCO - Laboratory for processing image, signals and computer science</NormalText>
                    <NormalText>Prédio de Pesquisa - Av. Treze de Maio, 2081 - 2º andar - Benfica, Fortaleza - CE, 60040-215</NormalText>  
                </ContainerText>     
            </Container01>
            <WhiteBarContainer>
                <WhiteBar/>
            </WhiteBarContainer>
            <ContainerMap><MyComponent/></ContainerMap>
        </Container>
    );
}


export default Footer;