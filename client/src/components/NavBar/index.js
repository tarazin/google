import React from "react";

function NavBar() {
  return (
    <nav class="navbar navbar-lg navbar-dark bg-info">
      <p class="navbar-brand">🤖📖</p>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="/">Search</a>
          <a class="nav-item nav-link" href="/saved">Saved</a>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;
