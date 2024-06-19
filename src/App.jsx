import { Home } from "./Pages/Home";
import { Aulas } from "./Pages/Aulas"
import { Cursos } from "./Pages/Cursos"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/aulas",
      element: <Aulas />
    },
    {
      path: "/Cursos",
      element: <Cursos />
    }
  ])
  return (
    <>
    <RouterProvider router = {router} />
    </>
  );
}

export default App
