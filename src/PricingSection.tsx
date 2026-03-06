import './PricingSection.css';

type Lang = 'EN' | 'ES';

const content = {
  title:    { EN: 'Transparent Pricing',                         ES: 'Precios Transparentes' },
  sub:      { EN: 'No surprises. Choose the package that fits.', ES: 'Sin sorpresas. Elige el paquete que se adapte a ti.' },
  popular:  { EN: 'Most Popular',                                ES: 'Más Popular' },
  bookNow:  { EN: 'Book Now',                                    ES: 'Reservar Ahora' },
  tiers: [
    {
      name:  { EN: 'Basic Shine',         ES: 'Brillo Básico' },
      price: '$149',
      desc:  { EN: 'Essential care for everyday drivers.', ES: 'Cuidado esencial para el conductor diario.' },
      features: [
        { EN: 'Exterior Hand Wash',      ES: 'Lavado Exterior a Mano' },
        { EN: 'Wheel & Tire Cleaning',   ES: 'Limpieza de Rines y Llantas' },
        { EN: 'Interior Vacuum',         ES: 'Aspirado Interior' },
        { EN: 'Window Cleaning',         ES: 'Limpieza de Vidrios' },
        { EN: 'Spray Wax',               ES: 'Cera en Spray' },
      ],
    },
    {
      name:     { EN: 'Premium Detail',      ES: 'Detallado Premium' },
      price:    '$299',
      desc:     { EN: 'Our most popular. The complete experience.', ES: 'El más solicitado. La experiencia completa.' },
      featured: true,
      features: [
        { EN: 'Exterior Hand Wash',      ES: 'Lavado Exterior a Mano' },
        { EN: 'Wheel & Tire Cleaning',   ES: 'Limpieza de Rines y Llantas' },
        { EN: 'Interior Vacuum',         ES: 'Aspirado Interior' },
        { EN: 'Window Cleaning',         ES: 'Limpieza de Vidrios' },
        { EN: 'Spray Wax',               ES: 'Cera en Spray' },
        { EN: 'Clay Bar Treatment',      ES: 'Tratamiento Clay Bar' },
        { EN: 'Leather Conditioning',    ES: 'Acondicionamiento de Cuero' },
        { EN: 'Steam Cleaning',          ES: 'Limpieza a Vapor' },
      ],
    },
    {
      name:  { EN: 'Ultimate Protection', ES: 'Protección Absoluta' },
      price: '$499',
      desc:  { EN: 'Maximum protection for those who demand the best.', ES: 'Protección máxima para quienes exigen lo mejor.' },
      features: [
        { EN: 'Exterior Hand Wash',      ES: 'Lavado Exterior a Mano' },
        { EN: 'Wheel & Tire Cleaning',   ES: 'Limpieza de Rines y Llantas' },
        { EN: 'Interior Vacuum',         ES: 'Aspirado Interior' },
        { EN: 'Window Cleaning',         ES: 'Limpieza de Vidrios' },
        { EN: 'Spray Wax',               ES: 'Cera en Spray' },
        { EN: 'Clay Bar Treatment',      ES: 'Tratamiento Clay Bar' },
        { EN: 'Leather Conditioning',    ES: 'Acondicionamiento de Cuero' },
        { EN: 'Steam Cleaning',          ES: 'Limpieza a Vapor' },
        { EN: '1-Step Paint Polish',     ES: 'Pulido de Pintura 1 Paso' },
        { EN: 'Ceramic Sealant (6mo)',   ES: 'Sellador Cerámico (6 meses)' },
        { EN: 'Engine Bay Detail',       ES: 'Detallado de Motor' },
        { EN: 'Headlight Restoration',   ES: 'Restauración de Faros' },
      ],
    },
  ],
};

function PricingSection({ language }: { language: Lang }) {
  const l = language;
  return (
    <div className="pricing-wrapper">
    <section className="pricing-section">
      <div className="pricing-header">
        <h2 className="pricing-title">{content.title[l]}</h2>
        <p className="pricing-sub">{content.sub[l]}</p>
      </div>

      <div className="pricing-grid">
        {content.tiers.map((tier, i) => (
          <div key={i} className={`pricing-card${tier.featured ? ' pricing-card--featured' : ''}`}>
            {tier.featured && (
              <div className="pricing-popular-wrap">
                <span className="pricing-popular">{content.popular[l]}</span>
              </div>
            )}
            {tier.featured && <div className="shimmer-sweep"></div>}
            <div className="pricing-card-inner">
              <p className="pricing-tier-name">{tier.name[l]}</p>
              <div className="pricing-amount">{tier.price}</div>
              <p className="pricing-tier-desc">{tier.desc[l]}</p>
              <ul className="pricing-features">
                {tier.features.map((f, j) => (
                  <li key={j} className="pricing-feature">
                    <span className="pricing-check">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {f[l]}
                  </li>
                ))}
              </ul>
              <button className={`pricing-btn${tier.featured ? ' pricing-btn--featured' : ''}`}>
                {content.bookNow[l]}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default PricingSection;
