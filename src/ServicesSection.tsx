import type { ReactElement } from 'react';
import './ServicesSection.css';

type Lang = 'EN' | 'ES';

type IconKey = 'car' | 'sparkle' | 'tool' | 'shield' | 'bolt' | 'drop';

const ICONS: Record<IconKey, ReactElement> = {
  car: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V9l3-6h12l3 6v6a2 2 0 0 1-2 2h-2"/>
      <circle cx="8" cy="17" r="2"/>
      <circle cx="16" cy="17" r="2"/>
    </svg>
  ),
  sparkle: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
      <path d="M5 3l.6 1.8L7.4 5.4l-1.8.6L5 7.8l-.6-1.8L2.6 5.4l1.8-.6z"/>
      <path d="M19 16l.6 1.8 1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6z"/>
    </svg>
  ),
  tool: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
  bolt: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  drop: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  ),
};

const content = {
  title:      { EN: 'Our Premium Services',                                    ES: 'Nuestros Servicios Premium' },
  sub:        { EN: 'Meticulous care for every inch of your vehicle',          ES: 'Cuidado meticuloso para cada centímetro de tu vehículo' },
  startingAt: { EN: 'Starting at',                                             ES: 'Desde' },
  items: [
    {
      icon:  'car' as IconKey,
      name:  { EN: 'Exterior Detail',    ES: 'Detallado Exterior' },
      desc:  { EN: 'Deep clean, clay bar, and sealant application for lasting shine.',             ES: 'Limpieza profunda, clay bar y sellador para un brillo duradero.' },
      price: '$149',
    },
    {
      icon:     'sparkle' as IconKey,
      name:     { EN: 'Interior Detail',   ES: 'Detallado Interior' },
      desc:     { EN: 'Steam cleaning, leather conditioning, and carpet extraction.',              ES: 'Limpieza a vapor, acondicionamiento de cuero y extracción de alfombras.' },
      price:    '$199',
      featured: true,
    },
    {
      icon:  'tool' as IconKey,
      name:  { EN: 'Paint Correction',   ES: 'Corrección de Pintura' },
      desc:  { EN: 'Removal of swirls, scratches, and oxidation for a mirror finish.',            ES: 'Eliminación de remolinos, rayones y oxidación para acabado espejo.' },
      price: '$399',
    },
    {
      icon:  'shield' as IconKey,
      name:  { EN: 'Ceramic Coating',    ES: 'Recubrimiento Cerámico' },
      desc:  { EN: 'Long-term protection against UV, chemicals, and water spots.',                ES: 'Protección a largo plazo contra UV, químicos y manchas de agua.' },
      price: '$899',
    },
    {
      icon:  'bolt' as IconKey,
      name:  { EN: 'Engine Bay Detail',  ES: 'Detallado de Motor' },
      desc:  { EN: 'Safe degreasing and dressing of all engine components.',                      ES: 'Desengrasado seguro y acondicionamiento de todos los componentes del motor.' },
      price: '$89',
    },
    {
      icon:  'drop' as IconKey,
      name:  { EN: 'Full Restoration',   ES: 'Restauración Completa' },
      desc:  { EN: 'Complete interior and exterior overhaul for the ultimate reset.',             ES: 'Renovación completa interior y exterior para el reinicio definitivo.' },
      price: '$299',
    },
  ],
};

function ServicesSection({ language }: { language: Lang }) {
  const l = language;
  return (
    <div className="svc-wrapper">
    <section className="svc-section">
      <div className="svc-header">
        <span className="svc-eyebrow">
          <span className="pulse-dot-svc"></span>
          {l === 'EN' ? 'What We Offer' : 'Lo Que Ofrecemos'}
        </span>
        <h2 className="svc-title">{content.title[l]}</h2>
        <p className="svc-sub">{content.sub[l]}</p>
      </div>

      <div className="svc-grid">
        {content.items.map((item, i) => (
          <div key={i} className={`svc-card${item.featured ? ' svc-card--featured' : ''}`}>
            <div className="svc-card-top">
              <div className="svc-icon-wrap">
                {ICONS[item.icon]}
              </div>
              {item.featured && (
                <span className="svc-featured-tag">
                  {l === 'EN' ? 'Most Requested' : 'Más Solicitado'}
                </span>
              )}
            </div>
            <h3 className="svc-name">{item.name[l]}</h3>
            <p className="svc-desc">{item.desc[l]}</p>
            <div className="svc-price">
              <span className="svc-starting">{content.startingAt[l]}</span>
              <strong className="svc-amount">{item.price}</strong>
            </div>
            <div className="svc-scan"></div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default ServicesSection;
