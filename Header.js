import React from 'react'

export default function Header() {
  return(
    <header>
      <nav className="nav" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <img src="https://raw.githubusercontent.com/szaszfaijulia/react-staticPage1/master/react_logo.png" style={{width: '70px'}} />
        <ul className="nav-items" style={{display: 'flex', listStyle: 'none'}}>
          <li style={{padding: '10px'}}>Pricing</li>
          <li style={{padding: '10px'}}>About</li>
          <li style={{padding: '10px'}}>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

// export default Header