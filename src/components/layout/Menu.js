import React from "react";

function Menu() {
  return (
    <ul class="nav flex-column bg-dark">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
  );
}

export default Menu;
