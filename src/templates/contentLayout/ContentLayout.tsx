import { NavBar } from '@components/layout/navbar/NavBar';
import { HeroBanner } from '@components/herobanner/HeroBanner';
import { Footer } from '@components/layout/footer/Footer';
import './ContentLayout.tsx.css';

function ContentLayout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <HeroBanner backgroundImageUrl="/img/background.jpg" bannerStyle="small" />
      <main className="elevated main-container">
        <div className="elevated-container">{children}</div>
      </main>
      <Footer />
    </>
  );
}

ContentLayout.Header = ({ children }: { children?: React.ReactNode }) => {
  return <div className="elevated-container-title"> {children}</div>;
};

ContentLayout.Body = ({ children }: { children?: React.ReactNode }) => {
  return <div className="elevated-container-body">{children}</div>;
};

export default ContentLayout;
