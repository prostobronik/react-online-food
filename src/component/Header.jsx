import { Link } from "react-router-dom"


function Header() {
   return (
      <nav className="#4527a0 deep-purple darken-3">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">React Movies</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">     
          <li><Link to="/contacts">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="https://github.com/prostobronik/REACT_SHOP" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </nav>
   )
}

export default Header