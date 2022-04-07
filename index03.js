import React from 'react';
import ReactDOM from 'react-dom';

function TemporaryName(){
  return(
    <div>
      <img src="https://raw.githubusercontent.com/szaszfaijulia/react-staticPage1/master/react_logo.png" width="40px"></img>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<TemporaryName />, document.getElementById('root'));
