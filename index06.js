/* Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/
/* Challenge: 
- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/
import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
  return(
    <header>
      <nav>
        <img src="https://raw.githubusercontent.com/szaszfaijulia/react-staticPage1/master/react_logo.png" width="60px" />
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