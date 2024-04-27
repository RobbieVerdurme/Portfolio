import { HeroBanner } from '@components/herobanner/HeroBanner';
import { NavBar } from '@components/layout/navbar/NavBar';

export function HeroLayout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <HeroBanner backgroundImageUrl="/img/background.jpg" bannerStyle="large">
        {children}
      </HeroBanner>
    </>
  );
}
