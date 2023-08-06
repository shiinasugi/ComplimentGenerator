import React from "react";
import ReactDOM from "react-dom/client";
// import styles from './indexStyles.jsx';

import Homepage from "./Homepage-component/Homepage";
import DefaultLayout from "./layout/default";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./testComp/home";
import AboutPage from "./testComp/about";
import MissionPage from "./testComp/mission";
import ResultsPage from "./Results-component/results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  
  {
    path: "/about",
    element: <AboutPage/>,
  },
  
  {
    path: "/mission",
    element: <MissionPage/>,
  },

  {
    path: "/results/:arg1/:arg2", // Route with TWO parameters
    element: <ResultsPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DefaultLayout>
      <RouterProvider router={router}/>
    </DefaultLayout>
  </React.StrictMode>
);
