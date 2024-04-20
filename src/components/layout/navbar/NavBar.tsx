import { NavLink } from 'react-router-dom';
import './NavBar.tsx.css';
import { useContext } from 'react';
import { ThemeContext } from '@contexts/ThemeContext';

const links = [
  { Url: '/', Name: 'Home', Icon: 'home' },
  { Url: '/about', Name: 'About', Icon: 'user' },
  { Url: '/projects', Name: 'Projects', Icon: 'code' },
  { Url: '/contact', Name: 'Contact', Icon: 'address-card' },
];

export function NavBar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item nav-logo">
          <NavLink to={'/'} className={'nav-link nav-logo-link'}>
            <span className="link-text">Robbie Verdurme</span>
          </NavLink>
        </li>

        {links.map((link) => (
          <li className="nav-item" key={link.Name}>
            <NavLink to={link.Url} className={'nav-link'}>
              <i className={`fa-solid fa-${link.Icon}`}></i>
              <span className="link-text">{link.Name}</span>
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
