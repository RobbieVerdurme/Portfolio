import { Tabs } from '@components/tabs/Tabs';
import { Project } from '@customTypes/Project';
import { Tab } from '@customTypes/Tab';
import useLocalizedText from '@hooks/useLocalizedText';
import NotFoundPage from '@pages/notfoundpage/NotFoundPage';
import ContentLayout from '@templates/contentLayout/ContentLayout';
import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.tsx.css';

const Info = lazy(() => import('./tabs/Info'));
const Photos = lazy(() => import('./tabs/Photos'));

export default function ProjectPage() {
  const { projectId } = useParams();
  const { translate } = useLocalizedText();
  const project = translate<Project[]>('profile.projects').find((x) => x.id === projectId);

  if (!project) return <NotFoundPage />;

  const tabs = [
    {
      label: translate<string>('projectdetail.info'),
      icon: 'fa-solid fa-circle-info',
      component: (
        <Info
          creators={project.creators}
          inventors={project.inventors}
          githubLink={project.githubLink}
          programmingLanguage={project.ProgrammingLanguage}
          IDE={project.IDE}
        />
      ),
    },
  ] as Tab[];
  project.img &&
    tabs.push({
      label: translate<string>('projectdetail.photos'),
      icon: 'fa-solid fa-image',
      component: <Photos images={project.img} />,
    });

  return (
    <ContentLayout>
      <ContentLayout.Header>
        <h1>{project.name}</h1>
      </ContentLayout.Header>
      <ContentLayout.Body>
        <div className="projectpage-content-container">
          <p>{project.description}</p>
          <Tabs tabs={tabs} />
        </div>
      </ContentLayout.Body>
    </ContentLayout>
  );
}
