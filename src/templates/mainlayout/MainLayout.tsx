import { NavBar } from "@components/layout/navbar/NavBar";
import "./MainLayout.tsx.css";

export function MainLayout({ children }: any) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
