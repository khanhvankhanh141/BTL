import React from "react";
import { AiOutlineDropbox } from "react-icons/ai";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <AiOutlineDropbox size={35} />
        </div>
        <ul className="home-links">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button className="--btn --btn-primary">
              <Link to="/login">Login</Link>
            </button>
          </li>
          <li>
            <button className="--btn --btn-primary">
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
