import React from 'react'

export default function Header() {
  return(
    <header>
      <nav className="nav">
        <img src="https://raw.githubusercontent.com/szaszfaijulia/react-staticPage1/master/react_logo.png" className="nav-logo"/>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

// export default Header