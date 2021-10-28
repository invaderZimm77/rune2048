import { Link } from "react-router-dom";

import React from "react";

export function Navbar(props) {
  return (
    <div>
      <Link to="/" className="home-Button">
        Home
      </Link>
      <br />
      <Link to="/newpost" className="add-Game">
        Add a Game
      </Link>
    </div>
  );
}