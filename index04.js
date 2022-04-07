/* Challenge:
Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page
*/
import React from 'react';
import ReactDOM from 'react-dom';

function Page() {
  return (
    <div>
      <h1>Miért tanulok React-et</h1>
      <ol>
        <li>Munka</li>
        <li>Elterjedt, népszerű</li>
        <li>Érdekes</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'));
