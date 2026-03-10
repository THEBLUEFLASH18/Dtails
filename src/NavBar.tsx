import { useState } from 'react';
import whiteLogo from './assets/White-Logo-nav.webp';
import blackLogo from './assets/BlackLogo.webp';
import './NavBar.css';

type Lang = 'EN' | 'ES';

interface NavBarProps {
    language: Lang;
    setLanguage: (lang: Lang) => void;
    theme: 'light' | 'dark';
}

function CarMenuIcon({ open }: { open: boolean }) {
    return open ? (
        // X to close
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
    ) : (
        // Car silhouette icon
        <svg width="32" height="22" viewBox="0 0 32 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {/* Roof */}
            <path d="M10 10 L12.5 5.5 L21 5.5 L23.5 10"/>
            {/* Body */}
            <path d="M3 10 L6.5 10 L10 10 L23.5 10 L25.5 10 L29 10 L29 15 L3 15 Z"/>
            {/* Windshields */}
            <path d="M13 10 L14 6.5 L20 6.5 L21 10"/>
            {/* Wheels */}
            <circle cx="9" cy="15" r="3.2" fill="#0073CF" stroke="#0073CF"/>
            <circle cx="23" cy="15" r="3.2" fill="#0073CF" stroke="#0073CF"/>
            {/* Wheel rims */}
            <circle cx="9" cy="15" r="1.2" fill="#000" stroke="none"/>
            <circle cx="23" cy="15" r="1.2" fill="#000" stroke="none"/>
            {/* Headlight */}
            <rect x="27" y="11" width="2.5" height="1.5" rx="0.5" fill="#0073CF" stroke="none"/>
            {/* Tail light */}
            <rect x="2.5" y="11" width="2" height="1.5" rx="0.5" fill="#333" stroke="none"/>
        </svg>
    );
}

function NavBar({ language, setLanguage, theme }: NavBarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const logo = theme === 'light' ? blackLogo : whiteLogo;

    const nav = {
        about:    { EN: 'About',    ES: 'Nosotros' },
        services: { EN: 'Services', ES: 'Servicios' },
        contact:  { EN: 'Contact',  ES: 'Contacto'  },
    };

    function closeMenu() { setMenuOpen(false); }

    return (
        <>
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Dtailz" className="logo" />
            </div>

            {/* Desktop links */}
            <div className="nav-links">
                <a href="#" className="nav-link">{nav.about[language]}</a>
                <a href="#services" className="nav-link">{nav.services[language]}</a>
                <a href="#" className="nav-link">{nav.contact[language]}</a>
            </div>

            {/* Desktop actions */}
            <div className="nav-actions">
                <button
                    className="lang-toggle"
                    onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                >
                    {language === 'EN' ? 'ES' : 'EN'}
                </button>
                <a
                    href="https://wa.me/50497974295"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-wa"
                    aria-label="WhatsApp"
                >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                </a>
            </div>

            {/* Mobile right side */}
            <div className="nav-mobile-right">
                <button
                    className="lang-toggle"
                    onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                >
                    {language === 'EN' ? 'ES' : 'EN'}
                </button>
                <button
                    className="nav-car-btn"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <CarMenuIcon open={menuOpen} />
                </button>
            </div>
        </nav>

        {/* Mobile dropdown */}
        <div className={`nav-mobile-menu${menuOpen ? ' nav-mobile-menu--open' : ''}`}>
            <a href="#" className="nav-mobile-link" onClick={closeMenu}>{nav.about[language]}</a>
            <a href="#services" className="nav-mobile-link" onClick={closeMenu}>{nav.services[language]}</a>
            <a href="#" className="nav-mobile-link" onClick={closeMenu}>{nav.contact[language]}</a>
            <a
                href="https://wa.me/50497974295"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-mobile-wa"
                onClick={closeMenu}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                +504 9797-4295
            </a>
        </div>
        </>
    );
}

export default NavBar;
