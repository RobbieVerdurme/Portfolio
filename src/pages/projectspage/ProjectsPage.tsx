import { ContentLayout } from '@templates/contentLayout/ContentLayout';
import { Project } from '@customTypes/Project';
import { Button } from '@elements/button/Button';
import useLocalizedText from '@hooks/useLocalizedText';
import Card from '@components/card/Card';
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

function ProjectCard({ project, readMore }: { project: Project; readMore: string }) {
  return (
    <Card>
      <Card.Body className={project.img && 'md-layout-60'}>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button>{readMore.toUpperCase()}</Button>
      </Card.Body>
      {project.img && (
        <div className="project-img-container md-layout-40">
          {project.img.map((img) => (
            <Card.Img src={img} key={img} />
          ))}
        </div>
      )}
    </Card>
  );
}
