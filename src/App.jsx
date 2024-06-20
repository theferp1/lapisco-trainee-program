import { Home } from "./Pages/Home";
import { Aulas } from "./Pages/Aulas"
import { Cursos } from "./Pages/Cursos"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
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
