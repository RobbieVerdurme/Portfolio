import { NavLink } from "react-router-dom";
import "./NavBar.tsx.css";
import { useEffect, useState } from "react";

const links = [
  { Url: "/", Name: "home", Icon: "home" },
  { Url: "/", Name: "About", Icon: "user" },
  { Url: "/", Name: "Programs", Icon: "code" },
  { Url: "/", Name: "Contact", Icon: "address-card" },
];

const themeMap: {
  dark: "dark" | "light" | "solar";
  light: "dark" | "light" | "solar";
  solar: "dark" | "light" | "solar";
} = {
  dark: "light",
  light: "solar",
  solar: "dark",
};

export function NavBar() {
  const [theme, SetTheme] = useState<"dark" | "light" | "solar">(
    (localStorage.getItem("theme") as "dark" | "light" | "solar") || "dark"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item nav-logo">
          <NavLink to={"/"} className={"nav-link nav-logo-link"}>
            <span className="link-text">Robbie Verdurme</span>
          </NavLink>
        </li>

        {links.map((link) => (
          <li className="nav-item" key={link.Name}>
            <NavLink to={link.Url} className={"nav-link"}>
              <i className={`fa-solid fa-${link.Icon}`}></i>
              <span className="link-text">{link.Name}</span>
            </NavLink>
          </li>
        ))}

        <li
          className="nav-item"
          onClick={() => SetTheme((currentTheme) => themeMap[currentTheme])}
        >
          <NavLink to={"#"} className="nav-link">
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
