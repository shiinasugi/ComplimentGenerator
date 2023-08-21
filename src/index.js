import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/default";
import HomePage from "./Homepage-component/Homepage";
import AboutPage from "./testComp/about";
import MissionPage from "./testComp/mission";
import NoPage from "./NoPage.js";

import "./index.css";

export default function App() {
  return (
    <Router>
      <div>
        <DefaultLayout />
        <Routes>
          <Route path="/ComplimentGenerator" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Mission" element={<MissionPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
