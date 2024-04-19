import { Link, NavLink, useLocation } from "react-router-dom";
import darkLogoImg from "../../img/dark-logo.png";
import css from "./Navigation.module.css";

export default function Navigation() {
  const location = useLocation();
  return (
    <nav className={css.nav}>
      <Link to="/">
        <img
          className={css.logo}
          src={darkLogoImg}
          width="48"
          height="48"
          alt="page logo"
        />
      </Link>
      {location.pathname !== "/" ? (
        <NavLink to="/">Portfolio</NavLink>
      ) : (
        <NavLink to="/about">About</NavLink>
      )}
    </nav>
  );
}
