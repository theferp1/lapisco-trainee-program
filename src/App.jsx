import NavBar from "./components/NavBar"
import { GlobalStyle } from "./GlobalStyle"
import Page01 from "./pages/Page01";
import Page02 from "./pages/Page02"
import Page03 from "./pages/Page03";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <NavBar />
      <Page01/>
      <Page02/>
      <Page03/>
      <Footer />
    </div>
  );
}

export default App
