import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>My Mad Libs</h1>
      <ul className="header__list">
        <li>
          <Link to="/stories">Saved Stories</Link>
        </li>
        <li>
          <Link to="/create-story">Create a New Story</Link>
        </li>
      </ul>
    </div>
  );
}
