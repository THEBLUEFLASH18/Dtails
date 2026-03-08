import './HeroSection.css';

type Lang = 'EN' | 'ES';

const t = {
  badge:          { EN: 'Limited Slots Available',                                  ES: 'Cupos Limitados' },
  headline:       { EN: ['Shine', 'with'],                                           ES: ['Brilla', 'con'] },
  desc:           { EN: "We don't just wash cars — we restore, protect, and elevate your vehicle to showroom condition with obsessive attention to detail.", ES: 'No solo lavamos carros — restauramos, protegemos y elevamos tu vehículo a condición de showroom con atención obsesiva al detalle.' },
  bookAppt:       { EN: 'Book Appointment',                                          ES: 'Reservar Cita' },
  ourServices:    { EN: 'Our Services',                                              ES: 'Nuestros Servicios' },
  statTag:        { EN: 'Vehicles Perfected',                                        ES: 'Vehículos Perfeccionados' },
  service1Name:   { EN: 'Hand Wash & Detail',                                        ES: 'Lavado a Mano y Detallado' },
  service1Desc:   { EN: 'Premium clay bar treatment with a hand-applied show finish', ES: 'Tratamiento premium con clay bar y acabado de exhibición aplicado a mano' },
  service2Name:   { EN: 'Paint Correction',                                          ES: 'Corrección de Pintura' },
  service2Desc:   { EN: 'Multi-stage machine polish — swirls and scratches eliminated', ES: 'Pulido mecánico en múltiples etapas — espirales y rayones eliminados' },
  service3Name:   { EN: 'Ceramic Coating',                                           ES: 'Recubrimiento Cerámico' },
  service3Desc:   { EN: 'Professional nano-ceramic protection lasting up to 5 years', ES: 'Protección nano-cerámica profesional de hasta 5 años de duración' },
  ratingLabel:    { EN: 'Average Rating',                                            ES: 'Calificación Promedio' },
  bookHeadline:   { EN: ['Ready', 'to Shine?'],                                      ES: ['¿Listo', 'para Brillar?'] },
  bookSub:        { EN: 'We reply within minutes',                                   ES: 'Respondemos en minutos' },
  bookWA:         { EN: 'Book via WhatsApp',                                         ES: 'Reservar por WhatsApp' },
  promise:        { EN: 'Our Promise',                                               ES: 'Nuestra Promesa' },
  statement:      { EN: ['Obsessive attention', 'to every detail.'],                 ES: ['Atención obsesiva', 'a cada detalle.'] },
  brandBody:      { EN: 'No shortcuts. No compromises. Every vehicle that leaves our hands is a testament to craft — perfected one panel at a time.', ES: 'Sin atajos. Sin compromisos. Cada vehículo que sale de nuestras manos es un testimonio de artesanía — perfeccionado panel a panel.' },
  badge2:         { EN: 'CERTIFIED DETAILERS',                                       ES: 'DETAILERS CERTIFICADOS' },
};

function HeroSection({ language }: { language: Lang }) {
  const l = language;
  return (
    <div className="hero-section">

      {/* Box 1 — Main CTA */}
      <div className='box box-1' style={{gridArea: "box1"}}>
        <div className="corner tl"></div>
        <div className="corner tr"></div>
        <span className="booking-badge">
          <span className="pulse-dot"></span>
          {t.badge[l]}
        </span>
        <h1 className="hero-headline">
          <span className="hl-top">
            <span className="hl-brilla">{t.headline[l][0]}</span>
            <span className="hl-con">{t.headline[l][1]}</span>
          </span>
          <span className="hl-brand">Dtailz.</span>
        </h1>
        <p className="hero-desc">{t.desc[l]}</p>
        <div className="button-group">
          <a href="#services" className="btn-primary">{t.ourServices[l]}</a>
        </div>
      </div>

      {/* Box 2 — Key Stat */}
      <div className='box box-2' style={{gridArea: "box2"}}>
        <div className="shimmer-sweep"></div>
        <div className="corner tl"></div>
        <div className="corner br"></div>
        <div className="stat-vertical">
          <span className="stat-tag">{t.statTag[l]}</span>
          <span className="stat-mega">500<span className="stat-plus">+</span></span>
          <div className="stat-divider"></div>
          <span className="stat-sub">Est. 2019 · San Pedro Sula</span>
        </div>
      </div>

      {/* Box 3 — Services Strip */}
      <div className='box box-3' style={{gridArea: "box3"}}>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h4>{t.service1Name[l]}</h4>
            <p>{t.service1Desc[l]}</p>
          </div>
          <div className="service-sep"></div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <h4>{t.service2Name[l]}</h4>
            <p>{t.service2Desc[l]}</p>
          </div>
          <div className="service-sep"></div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h4>{t.service3Name[l]}</h4>
            <p>{t.service3Desc[l]}</p>
          </div>
        </div>
      </div>

      {/* Box 4 — Rating */}
      <div className='box box-4' style={{gridArea: "box4"}}>
        <div className="rating-inner">
          <div className="stars">★★★★★</div>
          <span className="rating-number">5.0</span>
          <span className="rating-label">{t.ratingLabel[l]}</span>
          <div className="rating-sources">
            <span>Google</span>
            <span className="rating-dot">·</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>

      {/* Box 5 — Book via WhatsApp */}
      <div className='box box-5' style={{gridArea: "box5"}}>
        <h2 className="book-headline">{t.bookHeadline[l][0]}<br />{t.bookHeadline[l][1]}</h2>
        <p className="book-sub">{t.bookSub[l]}</p>
        <a href="https://wa.me/50497974295" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          {t.bookWA[l]}
        </a>
      </div>

      {/* Box 6 — Brand Statement */}
      <div className='box box-6' style={{gridArea: "box6"}}>
        <div className="brand-inner">
          <p className="brand-eyebrow">{t.promise[l]}</p>
          <p className="brand-statement">
            {t.statement[l][0]}<br />{t.statement[l][1]}
          </p>
          <p className="brand-body">{t.brandBody[l]}</p>
        </div>
        <div className="brand-badge">{t.badge2[l]}</div>
      </div>

    </div>
  );
}

export default HeroSection;
