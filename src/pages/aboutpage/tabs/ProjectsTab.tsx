import { ProjectCard } from '@components/card/variants/ProjectCard';
import { Project } from '@customTypes/Project';
import useLocalizedText from '@hooks/useLocalizedText';

export default function ProjectsTab() {
  const { translate } = useLocalizedText();
  const projects = translate<Project[]>('profile.projects');
  const readMore = translate<string>('projectdetail.readmore');

  return (
    <div className="card-list">
      {projects &&
        projects.map((project) => (
          <ProjectCard project={project} readMore={readMore} key={project.name}></ProjectCard>
        ))}
    </div>
  );
}
