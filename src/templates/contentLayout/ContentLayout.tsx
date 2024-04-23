import { NavBar } from '@components/layout/navbar/NavBar';
import './ContentLayout.tsx.css';
import { HeroBanner } from '@components/herobanner/HeroBanner';
import { Footer } from '@components/layout/footer/Footer';

export function ContentLayout({ children, title }: { children?: React.ReactNode; title?: string }) {
  return (
    <>
      <NavBar />
      <HeroBanner backgroundImageUrl="/img/background.jpg" bannerStyle="small">
        {title && <h1>{title}</h1>}
      </HeroBanner>
      <main className="elevated">
        <div className="elevated-container">
          {title && (
            <div className="elevated-container-title">
              <h2>{title}</h2>
            </div>
          )}
          <div className="elevated-container-body">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
