import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Navbar />

      <Box sx={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>

      <Footer />
    </BrowserRouter>
  );
}

export default App;