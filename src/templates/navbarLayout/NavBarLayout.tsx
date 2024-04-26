import { Footer } from '@components/layout/footer/Footer';
import { NavBar } from '@components/layout/navbar/NavBar';
import './NavBarLayout.tsx.css';

export function NavBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
