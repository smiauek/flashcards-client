import React from "react";
import "./menu.css";

function Menu({ user }) {
  return (
    <ul className="nav flex-column bg-dark menu">
      {user.userId ? (
        <>
          <li className="nav-item ">
            <a
              className="nav-link text-white"
              href="/"
              onClick={() => localStorage.clear()}
            >
              Sign Out
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white" href="/account">
              Account
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white" href="/dashboard">
              Dashboard
            </a>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item ">
            <a className="nav-link text-white" href="/sign-up">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/sign-in">
              Sign In
            </a>
          </li>
        </>
      )}

      <li className="nav-item">
        <a className="nav-link text-white" href="/">
          Browse
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/search">
          Search
        </a>
      </li>
    </ul>
  );
}

export default Menu;
