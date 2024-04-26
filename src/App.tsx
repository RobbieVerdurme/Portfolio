import LazyLoader from '@components/lazy-loader/lazy-loader';
import { PathConstants } from '@constants/PathConstants';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const AboutPage = lazy(() => import('./pages/aboutpage/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/projectspage/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/contactpage/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/notfoundpage/NotFoundPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PathConstants.HOME}
          index
          element={
            <Suspense fallback={<LazyLoader delay={300} />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={PathConstants.ABOUT}
          element={
            <Suspense fallback={<LazyLoader delay={300} />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path={PathConstants.PROJECTS}
          element={
            <Suspense fallback={<LazyLoader delay={300} />}>
              <ProjectsPage />
            </Suspense>
          }
        />
        <Route
          path={PathConstants.CONTACT}
          element={
            <Suspense fallback={<LazyLoader delay={300} />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LazyLoader delay={300} />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
