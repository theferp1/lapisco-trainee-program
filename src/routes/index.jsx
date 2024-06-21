import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Pages/Home";

function AppRouter () {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />
    }
  ])
}

export default AppRouter;