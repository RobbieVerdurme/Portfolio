import { NavBarLayout } from '@templates/navbarLayout/NavBarLayout';
import './notFoundPage.tsx.css';

export function NotFoundPage() {
  return (
    <NavBarLayout>
      <div className="not-found-container">
        <img className="img" src="/img/PageNotFound.png" />
      </div>
    </NavBarLayout>
  );
}
