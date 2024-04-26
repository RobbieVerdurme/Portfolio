import { Footer } from '@components/layout/footer/Footer';
import { NavBar } from '@components/layout/navbar/NavBar';

export function NavBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
