import Card from "@components/card/Card";
import { ContentLayout } from "@templates/contentLayout/ContentLayout";
import "./ProjectsPage.tsx.css";

export default function ProjectsPage() {
  return (
    <ContentLayout title="Projects">
      <div className="card-list">
        <Card>
          <Card.Body>
            <Card.Title>hihi</Card.Title>
            <Card.Text>
              some longer text then i expected on such a small card on a small
              screen
            </Card.Text>
          </Card.Body>
          <Card.Img src="/img/background.jpg" />
        </Card>
      </div>
    </ContentLayout>
  );
}
