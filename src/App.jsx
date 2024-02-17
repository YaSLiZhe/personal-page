import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Life from "./pages/Life";
import Project from "./pages/Project";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="project" element={<Project />} />
          <Route path="life" element={<Life />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
