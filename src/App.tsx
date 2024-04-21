import AboutPage from '@pages/aboutpage/AboutPage';
import ContactPage from '@pages/contactpage/ContactPage';
import { HomePage } from '@pages/homepage/HomePage';
import ProjectsPage from '@pages/projectspage/ProjectsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
