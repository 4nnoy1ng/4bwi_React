import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/friends",
    element: <div>Hello My Friend!</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
