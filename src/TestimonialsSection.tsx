import './TestimonialsSection.css';

type Lang = 'EN' | 'ES';

const content = {
  title: { EN: 'Client Stories',              ES: 'Historias de Clientes' },
  sub:   { EN: "Don't just take our word for it", ES: 'No solo lo decimos nosotros' },
  reviews: [
    {
      stars: 5,
      quote: {
        EN: '"Absolutely incredible attention to detail. The paint correction brought my 911 back to showroom condition. Worth every penny."',
        ES: '"Atención al detalle absolutamente increíble. La corrección de pintura devolvió mi 911 a condición de showroom. Valió cada centavo."',
      },
      name:    'Michael R.',
      vehicle: { EN: 'Porsche 911 Owner', ES: 'Dueño de Porsche 911' },
      initials: 'MR',
      color:    '#1a3a5c',
    },
    {
      stars: 5,
      quote: {
        EN: '"They came to my office and did a fantastic job while I worked. Having that level of convenience without sacrificing quality is rare."',
        ES: '"Vinieron a mi oficina e hicieron un trabajo fantástico mientras yo trabajaba. Esa comodidad sin sacrificar calidad es difícil de encontrar."',
      },
      name:    'Sarah L.',
      vehicle: { EN: 'Tesla Model X Owner', ES: 'Dueña de Tesla Model X' },
      initials: 'SL',
      color:    '#1a3550',
    },
    {
      stars: 5,
      quote: {
        EN: '"I\'ve used many detailers over the years, but the ceramic coating application here is on another level. Highly recommended."',
        ES: '"He usado muchos detailers a lo largo de los años, pero la aplicación de recubrimiento cerámico aquí es otro nivel. Muy recomendado."',
      },
      name:    'David K.',
      vehicle: { EN: 'BMW M3 Owner', ES: 'Dueño de BMW M3' },
      initials: 'DK',
      color:    '#0d2a42',
    },
  ],
};

function TestimonialsSection({ language }: { language: Lang }) {
  const l = language;
  return (
    <div className="testi-wrapper">
    <section className="testi-section">
      <div className="testi-header">
        <h2 className="testi-title">{content.title[l]}</h2>
        <p className="testi-sub">{content.sub[l]}</p>
      </div>

      <div className="testi-grid">
        {content.reviews.map((r, i) => (
          <div key={i} className="testi-card">
            <div className="testi-quote-mark">"</div>
            <div className="testi-stars">
              {'★'.repeat(r.stars)}
            </div>
            <p className="testi-quote">{r.quote[l]}</p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: r.color }}>
                {r.initials}
              </div>
              <div className="testi-author-info">
                <strong className="testi-name">{r.name}</strong>
                <span className="testi-vehicle">{r.vehicle[l]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default TestimonialsSection;
