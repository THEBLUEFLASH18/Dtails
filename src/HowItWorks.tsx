import './HowItWorks.css';

type Lang = 'EN' | 'ES';

const content = {
  title: { EN: 'How It Works',                       ES: 'Cómo Funciona' },
  sub:   { EN: 'Four steps to a flawless finish',    ES: 'Cuatro pasos hacia un acabado impecable' },
  steps: [
    {
      num: '01',
      title: { EN: 'Book Online',          ES: 'Reserva en Línea' },
      desc:  { EN: 'Choose your package and preferred time slot — takes under a minute.', ES: 'Elige tu paquete y horario preferido en menos de un minuto.' },
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
    {
      num: '02',
      title: { EN: 'We Come to You',       ES: 'Llegamos a Ti' },
      desc:  { EN: 'Our fully-equipped team arrives at your location, on time, ready to work.', ES: 'Nuestro equipo llega a tu ubicación, puntual y listo para trabajar.' },
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2"/>
          <path d="M16 8h4l3 5v3h-7V8z"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
    },
    {
      num: '03',
      title: { EN: 'Expert Detailing',     ES: 'Detallado Experto' },
      desc:  { EN: 'We obsess over every panel, seam, and surface using only professional-grade products.', ES: 'Nos obsesionamos con cada panel y superficie usando solo productos de grado profesional.' },
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
          <path d="M5 3l.6 1.8L7.4 5.4l-1.8.6L5 7.8l-.6-1.8L2.6 5.4l1.8-.6z"/>
        </svg>
      ),
    },
    {
      num: '04',
      title: { EN: 'Enjoy Your Ride',      ES: 'Disfruta tu Auto' },
      desc:  { EN: 'Drive away in a vehicle that looks — and feels — brand new again.', ES: 'Maneja un vehículo que luce y se siente completamente nuevo.' },
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
    },
  ],
};

function HowItWorks({ language }: { language: Lang }) {
  const l = language;
  return (
    <section className="hiw-section">
      <div className="hiw-header">
        <h2 className="hiw-title">{content.title[l]}</h2>
        <p className="hiw-sub">{content.sub[l]}</p>
      </div>

      <div className="hiw-track">
        <div className="hiw-line"></div>
        {content.steps.map((step, i) => (
          <div key={i} className="hiw-step">
            <div className="hiw-node">
              <span className="hiw-num">{step.num}</span>
              <div className="hiw-icon-ring">
                <div className="hiw-icon">{step.icon}</div>
              </div>
            </div>
            <h3 className="hiw-step-title">{step.title[l]}</h3>
            <p className="hiw-step-desc">{step.desc[l]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
