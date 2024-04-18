import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  return (
    <nav>
      {location.pathname !== "/" ? (
        <NavLink to="/">Portfolio</NavLink>
      ) : (
        <NavLink to="/about">About</NavLink>
      )}
    </nav>
  );
}
