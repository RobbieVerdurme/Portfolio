import { NavBar } from '@components/layout/navbar/NavBar';
import './MainLayout.tsx.css';
import { HeroBanner } from '@components/herobanner/HeroBanner';

export function MainLayout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <HeroBanner
        title="Welcome"
        subtitle="The goal of this portfolio is to give you an overview of my competences and skills."
        backgroundImageUrl="/img/background.jpg"
        fullScreen={true}
      />
      <main className="">{children}</main>
    </>
  );
}
