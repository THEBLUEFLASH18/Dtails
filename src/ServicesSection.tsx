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
      icon:     'car' as IconKey,
      name:     { EN: 'Basic Interior & Exterior Detail (Compact Vehicle)',    ES: 'Detallado Interior y Exterior Básico (Vehículo Compacto)' },
      desc:     { EN: 'Give your compact car the care it deserves with a thorough interior and exterior basic detail.', ES: 'Dale a tu auto compacto el cuidado que merece con un detallado básico completo interior y exterior.' },
      price:    'L 250',
      duration: { EN: '2 hours 30 minutes', ES: '2 horas 30 minutos' },
      featured: true,
    },
    {
      icon:  'sparkle' as IconKey,
      name:  { EN: 'Basic Interior & Exterior Detail (Mid-size Vehicle)',      ES: 'Detallado Interior y Exterior Básico (Vehículo Mediano)' },
      desc:  { EN: 'Give your mid-size vehicle the care it deserves with a thorough interior and exterior basic detail.', ES: 'Dale a tu vehículo mediano el cuidado que merece con un detallado básico completo interior y exterior.' },
      price: 'L 300',
      duration: { EN: '3 hours', ES: '3 horas' },
    },
    {
      icon:  'car' as IconKey,
      name:  { EN: 'Basic Interior & Exterior Detail (XL Vehicle)',            ES: 'Detallado Interior y Exterior Básico (Vehículo XL)' },
      desc:  { EN: 'Give your XL vehicle the care it deserves with a thorough interior and exterior basic detail.', ES: 'Dale a tu vehículo XL el cuidado que merece con un detallado básico completo interior y exterior.' },
      price: 'L 350',
      duration: { EN: '3 hours 30 minutes', ES: '3 horas 30 minutos' },
    },
    {
      icon:  'shield' as IconKey,
      name:  { EN: 'Paint Wax Treatment (Turtle Wax)',                         ES: 'Tratamiento de Cera para Pintura (Turtle Wax)' },
      desc:  { EN: 'Protect and enhance the shine of your car with our professional Turtle Wax paint wax treatment.', ES: 'Protege y resalta el brillo de tu auto con nuestro tratamiento de cera Turtle Wax para pintura.' },
      price: { EN: 'Variable price', ES: 'Precio variable' } as unknown as string,
      duration: { EN: '2 hours', ES: '2 horas' },
    },
    {
      icon:  'bolt' as IconKey,
      name:  { EN: 'Engine Decontamination',                                   ES: 'Descontaminación de Motor' },
      desc:  { EN: 'Keep the heart of your car in perfect condition with our professional engine decontamination service.', ES: 'Mantén el corazón de tu auto en perfectas condiciones con nuestro servicio de descontaminación de motor.' },
      price: 'L 400',
      duration: { EN: '2 hours', ES: '2 horas' },
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
              <strong className="svc-amount">
                {typeof item.price === 'object' ? (item.price as { EN: string; ES: string })[l] : item.price}
              </strong>
            </div>
            <div className="svc-duration">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {item.duration[l]}
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
