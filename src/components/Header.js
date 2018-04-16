/* src > components > Header.js */
import React from 'react'

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Starwars</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">People</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Reservasi</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Todo</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)


export default Header;

/*
const Header = function() {
  return(
    <div></div>
  )
}
*/