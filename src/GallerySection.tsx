import './GallerySection.css';

type Lang = 'EN' | 'ES';

const content = {
  title:  { EN: 'Our Work',                              ES: 'Nuestro Trabajo' },
  sub:    { EN: 'See the difference precision makes',    ES: 'Descubre la diferencia que hace la precisión' },
  cta:    { EN: 'See More on Instagram',                 ES: 'Ver Más en Instagram' },
  photos: [
    { label: { EN: 'Paint Correction',     ES: 'Corrección de Pintura' },     size: 'tall'   },
    { label: { EN: 'Ceramic Coating',      ES: 'Recubrimiento Cerámico' },    size: 'normal' },
    { label: { EN: 'Full Detail',          ES: 'Detallado Completo' },         size: 'normal' },
    { label: { EN: 'Interior Restoration', ES: 'Restauración Interior' },      size: 'wide'   },
    { label: { EN: 'Engine Bay',           ES: 'Motor Detallado' },            size: 'normal' },
  ],
};

/* Replace the CSS background-image values in GallerySection.css
   with your own photo URLs — e.g.:
   .gallery-photo:nth-child(1) { background-image: url('/src/assets/work-1.jpg'); }
*/

function GallerySection({ language }: { language: Lang }) {
  const l = language;
  return (
    <div className="gallery-wrapper">
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">{content.title[l]}</h2>
        <p className="gallery-sub">{content.sub[l]}</p>
      </div>

      <div className="gallery-grid">
        {content.photos.map((photo, i) => (
          <div key={i} className={`gallery-photo gallery-photo--${photo.size} gallery-photo--${i + 1}`}>
            <div className="gallery-corner gallery-corner--tl"></div>
            <div className="gallery-corner gallery-corner--br"></div>
            <div className="gallery-overlay">
              <span className="gallery-num">0{i + 1}</span>
              <span className="gallery-label">{photo.label[l]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-footer">
        <button className="gallery-cta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          {content.cta[l]}
        </button>
      </div>
    </section>
    </div>
  );
}

export default GallerySection;
