import ContentLayout from '@templates/contentLayout/ContentLayout';
import './AboutPage.tsx.css';
import useLocalizedText from '@hooks/useLocalizedText';
import { Hyperlink } from '@elements/hyperlink/Hyperlink';
import { Tabs } from '@components/tabs/Tabs';
import { Tab } from '@customTypes/Tab';
import { lazy } from 'react';

const LifeTab = lazy(() => import('../../components/tabs/variants/LifeTab'));
const ProjectsTab = lazy(() => import('../../components/tabs/variants/ProjectsTab'));
const ResumeTab = lazy(() => import('../../components/tabs/variants/ResumeTab'));

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
          <img src="/img/faces/ProfilePic.jpg" loading="lazy" />
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
      <ContentLayout.Body setMaxContentBody={true}>
        <p className="profile-intro">{translate<string>('profile.intro')}</p>
        <Tabs tabs={tabs} />
      </ContentLayout.Body>
    </ContentLayout>
  );
}
