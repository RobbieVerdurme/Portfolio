import { NavBarLayout } from '@templates/navbarLayout/NavBarLayout';
import './notFoundPage.tsx.css';

export default function NotFoundPage() {
  return (
    <NavBarLayout>
      <div className="not-found-container">
        <img className="img" src="/img/PageNotFound.png" loading="lazy" />
      </div>
    </NavBarLayout>
  );
}
