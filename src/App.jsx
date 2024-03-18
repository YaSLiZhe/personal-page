import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Coursework from "./pages/Coursework";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./components/Projects/ProjectDetail";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter basename="/personal-page">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:projectId" element={<ProjectDetail />} />
          <Route path="coursework" element={<Coursework />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
