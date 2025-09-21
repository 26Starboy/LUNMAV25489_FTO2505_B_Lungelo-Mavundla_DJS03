import React from "react";

/**
 * Header component for the landing page.
 */
const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Podcast Discovery</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#podcasts">Podcasts</a></li>
          <li><a href="#genres">Genres</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
