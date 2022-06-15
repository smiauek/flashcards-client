import React from "react";
import "./menu.css";

function Menu() {
  return (
    <ul className="nav flex-column bg-dark menu">
      <li className="nav-item ">
        <a className="nav-link text-white" href="/sign-up">
          Sign Up
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Sign In
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/">
          Browse
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">
          Search
        </a>
      </li>
    </ul>
  );
}

export default Menu;
