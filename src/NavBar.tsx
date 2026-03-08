import logo from './assets/White-Logo-nav.webp';
import './NavBar.css';

type Lang = 'EN' | 'ES';

interface NavBarProps {
    language: Lang;
    setLanguage: (lang: Lang) => void;
}

function NavBar({ language, setLanguage }: NavBarProps) {
    const nav = {
        about:    { EN: 'About',    ES: 'Nosotros' },
        services: { EN: 'Services', ES: 'Servicios' },
        contact:  { EN: 'Contact',  ES: 'Contacto'  },
        book:     { EN: 'Book Now', ES: 'Reservar'  },
    };

    return (
        <nav className="navbar">
            <div className='logo-container'>
                <img src={logo} alt="Dtailz" className="logo" />
            </div>
            <div className="nav-links">
                <a href="#" className="nav-link">{nav.about[language]}</a>
                <a href="#" className="nav-link">{nav.services[language]}</a>
                <a href="#" className="nav-link">{nav.contact[language]}</a>
            </div>
            <div className="nav-actions">
                <button
                    className="lang-toggle"
                    onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                >
                    {language === 'EN' ? 'ES' : 'EN'}
                </button>
                <button className="nav-cta">{nav.book[language]}</button>
            </div>
        </nav>
    );
}

export default NavBar;
