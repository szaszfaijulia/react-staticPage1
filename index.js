/* Challenge: 
- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/
import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
  return(
    <header>
      <nav>
        <img src="https://raw.githubusercontent.com/szaszfaijulia/react-staticPage1/master/react_logo.png" width="60px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent(){
  return(
    <body>
      <h1>Miért tanulok React-et</h1>
      <ol>
        <li>Munka</li>
        <li>Elterjedt, népszerű</li>
        <li>Érdekes</li>
      </ol>
    </body>
  )
}

function Footer(){
  return(
    <footer>
      <small>© 2022 Szaszfai development. All rights reserved.</small>
    </footer>
  )
}

function Page() {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'));