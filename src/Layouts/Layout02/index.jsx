import {
    Container,
    Container01,
    Title,
    Container02,
    ContainerRedBar,
    RedBar,
    ContainerText,
    NormalText

} from "./style";

function Layout02 () {
    return(
        <Container>
            <Container01>
                <Title>About the trainee</Title>
            </Container01>
            <Container02>
                <ContainerRedBar>
                    <RedBar/>
                </ContainerRedBar>
                <ContainerText>
                    <NormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</NormalText>
                </ContainerText>
                
            </Container02>
        </Container>
    );
}

export default Layout02;