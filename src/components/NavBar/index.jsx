import { Container01, ImgBg, Container02, Bar, Circle } from "./style";
import Bg from '../../../public/bgImage.png'

function NavBar () {
    return(
        <Container01>
            <ImgBg src={Bg}></ImgBg>
            <Container02>
                <Bar></Bar>
                <Circle></Circle>
                <Bar></Bar>
            </Container02>
        </Container01>
    )
}


export default NavBar;