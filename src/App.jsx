import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Coursework from "./pages/Coursework";
import About from "./pages/About";
import Project from "./pages/Project";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter basename="/personal-page">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="project" element={<Project />} />
          <Route path="coursework" element={<Coursework />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
