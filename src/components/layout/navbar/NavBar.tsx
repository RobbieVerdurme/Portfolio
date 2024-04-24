import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '@contexts/ThemeContext';
import useLocalizedText from '@hooks/useLocalizedText';
import { PathConstants } from '@constants/PathConstants';
import './NavBar.tsx.css';

const links = [
  { Url: PathConstants.HOME, Name: 'links.home', Icon: 'home' },
  { Url: PathConstants.ABOUT, Name: 'links.profile', Icon: 'user' },
  { Url: PathConstants.PROJECTS, Name: 'links.projects', Icon: 'code' },
  { Url: PathConstants.CONTACT, Name: 'links.contact', Icon: 'address-card' },
];

export function NavBar() {
  const { toggleTheme } = useContext(ThemeContext);
  const { translate } = useLocalizedText();

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item nav-logo">
          <NavLink to={PathConstants.HOME} className={'nav-link nav-logo-link'}>
            <span className="link-text">Robbie Verdurme</span>
          </NavLink>
        </li>

        {links.map((link) => (
          <li className="nav-item" key={link.Name}>
            <NavLink to={link.Url} className={'nav-link'}>
              <i className={`fa-solid fa-${link.Icon}`}></i>
              <span className="link-text">{translate<string>(link.Name)}</span>
            </NavLink>
          </li>
        ))}

        <li className="nav-item" onClick={() => toggleTheme()}>
          <NavLink to={'#'} className="nav-link">
            <i id="lightIcon" className="fa-solid fa-sun theme-icon"></i>
            <i id="darkIcon" className="fa-solid fa-moon theme-icon"></i>
            <i id="solarIcon" className="fa-regular fa-sun theme-icon"></i>
            <span className="link-text">Theme</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
