import { PathConstants } from '@constants/PathConstants';
import AboutPage from '@pages/aboutpage/AboutPage';
import ContactPage from '@pages/contactpage/ContactPage';
import { HomePage } from '@pages/homepage/HomePage';
import { NotFoundPage } from '@pages/notfoundpage/NotFoundPage';
import ProjectsPage from '@pages/projectspage/ProjectsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathConstants.HOME} index element={<HomePage />} />
        <Route path={PathConstants.ABOUT} element={<AboutPage />} />
        <Route path={PathConstants.PROJECTS} element={<ProjectsPage />} />
        <Route path={PathConstants.CONTACT} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
