import { PathConstants } from '@constants/PathConstants';
import { Button } from '@elements/button/Button';
import useLocalizedText from '@hooks/useLocalizedText';
import { HeroLayout } from '@templates/heroLayout/HeroLayout';
import './HomePage.tsx.css';

export function HomePage() {
  const { translate } = useLocalizedText();
  return (
    <HeroLayout>
      <main className="container">
        <h1>{translate<string>('home.title')}</h1>
        <p>{translate<string>('home.introduction')}</p>
        <Button relativePageUrl={PathConstants.ABOUT}>
          {translate<string>('links.profile')} <i className="fa-solid fa-arrow-right" />
        </Button>
      </main>
    </HeroLayout>
  );
}
