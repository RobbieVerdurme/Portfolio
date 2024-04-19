import { NavBar } from '@components/layout/navbar/NavBar';
import './ContentLayout.tsx.css';
import { HeroBanner } from '@components/herobanner/HeroBanner';

export function ContentLayout({ children, title }: { children?: React.ReactNode; title?: string }) {
  return (
    <>
      <NavBar />
      <HeroBanner backgroundImageUrl="/img/background.jpg" bannerStyle="small" />
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
    </>
  );
}
