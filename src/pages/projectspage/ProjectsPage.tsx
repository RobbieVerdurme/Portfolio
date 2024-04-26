import { Project } from '@customTypes/Project';
import useLocalizedText from '@hooks/useLocalizedText';
import { ProjectCard } from '@components/card/variants/ProjectCard';
import './ProjectsPage.tsx.css';
import ContentLayout from '@templates/contentLayout/ContentLayout';

export default function ProjectsPage() {
  const { translate } = useLocalizedText();
  const projects = translate<Project[]>('profile.projects');
  const readMore = translate<string>('projectdetail.readmore');

  return (
    <ContentLayout>
      <ContentLayout.Header>
        <h2>{translate<string>('links.projects')}</h2>
      </ContentLayout.Header>
      <ContentLayout.Body>
        <div className="card-list">
          {projects &&
            projects.map((project) => (
              <ProjectCard project={project} readMore={readMore} key={project.name}></ProjectCard>
            ))}
        </div>
      </ContentLayout.Body>
    </ContentLayout>
  );
}
