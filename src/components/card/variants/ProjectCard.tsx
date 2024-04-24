import Card from '@components/card/Card';
import { PathConstants } from '@constants/PathConstants';
import { Project } from '@customTypes/Project';
import { Button } from '@elements/button/Button';

export function ProjectCard({ project, readMore }: { project: Project; readMore: string }) {
  return (
    <Card>
      <Card.Body className={project.img && 'md-layout-60'}>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Button relativePageUrl={`${PathConstants.PROJECTS}/${project.id}`}>
          {readMore.toUpperCase()}
        </Button>
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
