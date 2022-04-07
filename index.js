import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MainContent from './MainContent'
import Footer from './Footer'

/*
Challenge: move the Footer and MainContent components
into their own files.
*/

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'));
