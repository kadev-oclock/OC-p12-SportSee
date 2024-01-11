///deux liens pour aller sur les dashboard
import React from "react";
import logo from "/src/assets/image/logo.png";
import { Link } from 'react-router-dom';
import "./Home.scss";


function Home() {
  const users = [12, 18];
  return (
    <div className="home">
      <img className="home__logo" src={logo} alt="" />
      <h1>Connexion</h1>
      <div className="home__contain">
      {users.map((userId) => (
        <button className="home__button" key={userId}>
          <Link className="home__user" to={`/dashboard/${userId}`}>User {userId}</Link>
        </button>
      ))}
      </div>
    </div>
  );
}
export default Home;
