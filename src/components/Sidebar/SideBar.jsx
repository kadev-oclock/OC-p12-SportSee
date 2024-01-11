import React from "react";
import { NavLink } from 'react-router-dom'
import meditation from "/src/assets/image/meditation.svg";
import natation from "/src/assets/image/natation.svg";
import cycliste from "/src/assets/image/cycliste.svg";
import haltere from "/src/assets/image/haltere.svg";
import "./SideBar.scss";

function SideBar() {
  return (
    <div className="sidebar">
      <aside className="sidebar__nav"  >
        <NavLink to="#" className="aptitude">
          <img src={meditation} alt="" />
        </NavLink>
        <NavLink to="#" className="aptitude">
          <img src={natation} alt="" />
        </NavLink>
        <NavLink to="#" className="aptitude">
          <img src={cycliste} alt="" />
        </NavLink>
        <NavLink to="#" className="aptitude">
          <img src={haltere} alt="" />
        </NavLink>
      </aside>
      <p className="sidebar__text">Copiryght, SportSee 2020</p>
    </div>
  );
}
export default SideBar;
