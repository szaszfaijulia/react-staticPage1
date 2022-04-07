/* Challenge: 
- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/
import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
  return(
    <header>
      <nav className="nav">
        <img src="https://raw.githubusercontent.com/szaszfaijulia/react-staticPage1/master/react_logo.png" className="nav-logo" />
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
    <div>
      <h1>Miért tanulok React-et</h1>
      <ol>
        <li>Munka</li>
        <li>Elterjedt, népszerű</li>
        <li>Érdekes</li>
      </ol>
    </div>
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