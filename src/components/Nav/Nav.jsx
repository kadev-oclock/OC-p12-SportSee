import logo from "/src/assets/image/logo.png";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <nav className="nav">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="#">Profil</NavLink>
          <NavLink to="#">Réglage</NavLink>
          <NavLink to="#">Communauté</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Nav;
