import React from "react";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="./#">
        City Tours
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="./#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./#">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
