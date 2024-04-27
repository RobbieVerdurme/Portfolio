import useLocalizedText from '@hooks/useLocalizedText';
import ContentLayout from '@templates/contentLayout/ContentLayout';
import { Suspense, lazy } from 'react';
import LazyLoader from '@components/lazy-loader/lazy-loader';

const ProjectsTab = lazy(() => import('@components/tabs/variants/ProjectsTab'));
export default function ProjectsPage() {
  const { translate } = useLocalizedText();

  return (
    <ContentLayout>
      <ContentLayout.Header>
        <h2>{translate<string>('links.projects')}</h2>
      </ContentLayout.Header>
      <ContentLayout.Body>
        <Suspense fallback={<LazyLoader delay={300} />}>
          <ProjectsTab />
        </Suspense>
      </ContentLayout.Body>
    </ContentLayout>
  );
}
