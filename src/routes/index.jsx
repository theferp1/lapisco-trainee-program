import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Page01 from "../pages/Page01";

function Routes() {
  return(
    <BrowserRouter>
      <RouterProvider>
        <Route path = "/Page01" element = {<Page01 />} />
      </RouterProvider>
    </BrowserRouter>
  );
}


export default Routes;