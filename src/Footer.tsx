import { useState } from 'react';
import logo from './assets/White-Logo-nav.webp';
import './Footer.css';

type Lang = 'EN' | 'ES';

const content = {
  tagline:    { EN: 'Obsessive precision. Showroom results.\nPanama City\'s premier detailing service.',       ES: 'Precisión obsesiva. Resultados de showroom.\nEl servicio de detallado premium de Ciudad de Panamá.' },
  servicesH:  { EN: 'Services',         ES: 'Servicios' },
  contactH:   { EN: 'Contact',          ES: 'Contacto' },
  subscribeH: { EN: 'Stay in the Loop', ES: 'Mantente Informado' },
  subscribeS: { EN: 'Get offers, tips, and behind-the-scenes updates.', ES: 'Recibe ofertas, consejos y actualizaciones exclusivas.' },
  emailPlh:   { EN: 'Email address',    ES: 'Correo electrónico' },
  subscribeB: { EN: 'Subscribe',        ES: 'Suscribirse' },
  links: [
    { EN: 'Exterior Detail',   ES: 'Detallado Exterior' },
    { EN: 'Interior Detail',   ES: 'Detallado Interior' },
    { EN: 'Paint Correction',  ES: 'Corrección de Pintura' },
    { EN: 'Ceramic Coating',   ES: 'Recubrimiento Cerámico' },
    { EN: 'Engine Bay Detail', ES: 'Detallado de Motor' },
  ],
  privacy:    { EN: 'Privacy Policy',    ES: 'Política de Privacidad' },
  terms:      { EN: 'Terms of Service',  ES: 'Términos de Servicio' },
  copy:       { EN: '© 2025 Dtails. All rights reserved.', ES: '© 2025 Dtails. Todos los derechos reservados.' },
};

function Footer({ language }: { language: Lang }) {
  const l = language;
  const [email, setEmail] = useState('');

  return (
    <footer className="footer">
      <div className="footer-top-rule"></div>

      <div className="footer-body">
        {/* Col 1 — Brand */}
        <div className="footer-brand">
          <img src={logo} alt="Dtails" className="footer-logo" />
          <p className="footer-tagline">{content.tagline[l]}</p>
          <div className="footer-socials">
            {/* Instagram */}
            <a href="#" className="footer-social" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="footer-social" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" className="footer-social" aria-label="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">{content.servicesH[l]}</h4>
          <ul className="footer-links">
            {content.links.map((link, i) => (
              <li key={i}><a href="#" className="footer-link">{link[l]}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">{content.contactH[l]}</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </span>
              WhatsApp
            </li>
            <li>
              <span className="footer-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              hola@dtails.com
            </li>
            <li>
              <span className="footer-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              Panama City, Panama
            </li>
          </ul>
        </div>

        {/* Col 4 — Subscribe */}
        <div className="footer-col">
          <h4 className="footer-col-title">{content.subscribeH[l]}</h4>
          <p className="footer-subscribe-sub">{content.subscribeS[l]}</p>
          <div className="footer-subscribe-form">
            <input
              type="email"
              className="footer-email-input"
              placeholder={content.emailPlh[l]}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="footer-subscribe-btn">{content.subscribeB[l]}</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">{content.copy[l]}</span>
        <div className="footer-legal">
          <a href="#" className="footer-legal-link">{content.privacy[l]}</a>
          <a href="#" className="footer-legal-link">{content.terms[l]}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
