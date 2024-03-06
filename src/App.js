import React from "react";
import Bundesliga from "./components/pages/Bundesliga";
import Table from "components/pages/Table";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Bundesliga />
      </div>
    ),
  },
  {
    path: "/table",
    element: (
      <div>
        <Table />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
