import { Link } from "react-router-dom";

import React from "react";

export function Navbar(props) {
  return (
    <nav>
      <Link to="/" className="home-Button">
        Home
      </Link>
      <Link to="/newpost" className="add-Game">
        Add a Game
      </Link>
    </nav>
  );
}