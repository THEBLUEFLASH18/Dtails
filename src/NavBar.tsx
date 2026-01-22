import { useState } from 'react';
import logo from './assets/Logo_White.jpeg';
import './NavBar.css';

function NavBar() {

    const [language, setLanguage] = useState<'EN' | 'ES'>('EN');   
    const [about, setAbout] = useState<{ EN: string; ES: string }>({
        EN: 'About',
        ES: 'Acerca de'
    });


  return (
    <nav className="navbar">
      <div className='logo-container'>
        <img src={logo} alt="Logo" className="logo"/>
      </div>
      <div className="nav-buttons">
        <button className='NavButton' onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}>{language}</button>
        <button className='NavButton' onClick={() => setAbout(about)}><a href="#">{about[language]}</a></button>
      </div>
    </nav>
  );
}

export default NavBar;