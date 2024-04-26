import ContentLayout from '@templates/contentLayout/ContentLayout';
import './AboutPage.tsx.css';
import useLocalizedText from '@hooks/useLocalizedText';
import { Hyperlink } from '@elements/hyperlink/Hyperlink';
import { Tabs } from '@components/tabs/Tabs';
import { Tab } from '@customTypes/Tab';
import { ProjectCard } from '@components/card/variants/ProjectCard';
import { Project } from '@customTypes/Project';
import { IFrame } from '@elements/iframe/IFrame';

export default function AboutPage() {
  const { translate } = useLocalizedText();

  const socialIcons = [
    { Link: 'https://www.facebook.com/robbie.verdurme', Icon: 'fa-brands fa-facebook' },
    { Link: 'https://github.com/RobbieVerdurme', Icon: 'fa-brands fa-github' },
    { Link: 'https://www.linkedin.com/in/robbie-verdurme/', Icon: 'fa-brands fa-linkedin' },
  ];

  const tabs = [
    {
      label: translate<string>('profile.lifeTab'),
      icon: 'fa-solid fa-user',
      component: <LifeTab />,
    },
    {
      label: translate<string>('profile.projectsTab'),
      icon: 'fa-solid fa-code',
      component: <ProjectsTab />,
    },
    {
      label: translate<string>('profile.resumeTab'),
      icon: 'fa-solid fa-file-pdf',
      component: <ResumeTab />,
    },
  ] as Tab[];
  return (
    <ContentLayout>
      <ContentLayout.Header>
        <div className="profile">
          <img src="/img/faces/ProfilePic.jpg" />
          <div className="details">
            <h3 className="title">Robbie Verdurme</h3>
            <h6 className="sub-title">Developer</h6>
            <div className="social">
              {socialIcons.map((icon) => (
                <Hyperlink to={icon.Link} key={icon.Link}>
                  <i className={icon.Icon} />
                </Hyperlink>
              ))}
            </div>
          </div>
        </div>
      </ContentLayout.Header>
      <ContentLayout.Body>
        <p className="profile-intro">{translate<string>('profile.intro')}</p>
        <Tabs tabs={tabs} />
      </ContentLayout.Body>
    </ContentLayout>
  );
}

function LifeTab() {
  const { translate } = useLocalizedText();
  return (
    <p>
      {translate<string>('profile.primarySchool')}
      <br /> <br />
      {translate<string>('profile.highSchool')}
      <br />
      <br />
      {translate<string>('profile.future')}
    </p>
  );
}

function ProjectsTab() {
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

function ResumeTab() {
  return (
    <IFrame
      variant="large"
      src="https://drive.google.com/file/d/1VMKJFcEmAuy0DrVG4sGrPbeS-cXPtcBz/preview"
    />
  );
}
