import { PathConstants } from '@constants/PathConstants';
import { Button } from '@elements/button/Button';
import useLocalizedText from '@hooks/useLocalizedText';
import { HeroLayout } from '@templates/heroLayout/HeroLayout';

export function HomePage() {
  const { translate } = useLocalizedText();
  return (
    <HeroLayout>
      <main>
        <h1>{translate<string>('home.title')}</h1>
        <p>{translate<string>('home.introduction')}</p>
        <Button relativePageUrl={PathConstants.ABOUT}>
          {translate<string>('links.profile')} <i className="fa-solid fa-arrow-right" />
        </Button>
      </main>
    </HeroLayout>
  );
}
