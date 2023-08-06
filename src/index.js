import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./layout/default";
import HomePage from "./Homepage-component/Homepage";
import AboutPage from "./testComp/about";
import MissionPage from "./testComp/mission";
import ResultsPage from "./Results-component/results";

const router = createBrowserRouter([
  {
    path: "/ComplimentGenerator",
    element: <HomePage />,
  },
  {
    path: "/ComplimentGenerator/about",
    element: <AboutPage />,
  },
  {
    path: "/ComplimentGenerator/mission",
    element: <MissionPage />,
  },
  {
    element: <ResultsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  </React.StrictMode>
);
