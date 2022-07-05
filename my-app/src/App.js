import './App.css';
import React from "react";

import Navbar from './Components/Navbar';

import './sass/Navbar.scss';
import './sass/HomePage.scss';
import './sass/Contact.scss';
import './sass/About.scss';
import './sass/Work.scss';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
    </div>
  );
}

export default App;
