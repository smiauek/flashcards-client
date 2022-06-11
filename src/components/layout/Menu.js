import React from "react";

function Menu() {
  return (
    <ul class="nav flex-column bg-dark ">
      <li class="nav-item ">
        <a class="nav-link text-white" href="/">
          Sign Up
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">
          Sign In
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">
          Browse
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">
          Search
        </a>
      </li>
    </ul>
  );
}

export default Menu;
