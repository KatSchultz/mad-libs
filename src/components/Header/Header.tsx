import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="links">
        <h1>My Mad Libs</h1>
      </Link>
      <ul className="header__list">
        <li>
          <Link to="/stories" className="links">
            Saved Stories
          </Link>
        </li>
        <li>
          <Link to="/create-story" className="links">
            Create a New Story
          </Link>
        </li>
      </ul>
    </div>
  );
}
