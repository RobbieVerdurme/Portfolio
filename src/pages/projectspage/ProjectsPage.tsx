import { ContentLayout } from '@templates/contentLayout/ContentLayout';
import { Project } from '@customTypes/Project';
import useLocalizedText from '@hooks/useLocalizedText';
import { ProjectCard } from '@components/card/variants/ProjectCard';
import './ProjectsPage.tsx.css';

export default function ProjectsPage() {
  const { translate } = useLocalizedText();
  const projects = translate<Project[]>('profile.projects');
  const readMore = translate<string>('projectdetail.readmore');

  return (
    <ContentLayout title="Projects">
      <div className="card-list">
        {projects &&
          projects.map((project) => (
            <ProjectCard project={project} readMore={readMore} key={project.name}></ProjectCard>
          ))}
      </div>
    </ContentLayout>
  );
}
