import { Container01, Container02, Bar, Circle } from "./style";
import Bg from "../assets/bgimage.png"

function NavBar () {
    return(
        <Container01>
            <Container02>
                <img src={Bg}></img>
                <Bar></Bar>
                <Circle></Circle>
                <Bar></Bar>
            </Container02>
        </Container01>
    )
}


export default NavBar;