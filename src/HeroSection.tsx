import { useState, useRef, useEffect } from 'react';
import dirtyCar from './assets/DirtyCar.webp';
import cleanCar from './assets/CleanCar.webp';
import './HeroSection.css';

type Lang = 'EN' | 'ES';

const t = {
  eyebrow: { EN: 'About Us', ES: 'Sobre Nosotros' },
  line1: { EN: 'Shine', ES: 'Brilla' },
  line2: { EN: 'with', ES: 'con' },
  desc: {
    EN: "We don't just wash cars — we restore, protect, and elevate your vehicle to showroom condition with obsessive attention to detail.",
    ES: 'No solo lavamos carros — restauramos, protegemos y elevamos tu vehículo a condición de showroom con atención obsesiva al detalle.',
  },
  bullets: {
    EN: [
      'Specialized treatments: wax, ceramic coating & more',
      'Mobile service — we come to your location',
      'Results that build lasting trust and confidence',
    ],
    ES: [
      'Tratamientos especializados: cera, cerámica y más',
      'Servicio móvil — vamos a tu ubicación',
      'Resultados que generan confianza y satisfacción duradera',
    ],
  },
  services: { EN: 'Our Services', ES: 'Ver Servicios' },
  callLabel: { EN: 'Contact for inquiry', ES: 'Consultas por WhatsApp' },
  before: { EN: 'BEFORE', ES: 'ANTES' },
  after: { EN: 'AFTER', ES: 'DESPUÉS' },
  badge: { EN: 'Limited Slots Available', ES: 'Cupos Limitados' },
};

function HeroSection({ language }: { language: Lang }) {
  const l = language;
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function calcPos(clientX: number) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  }

  useEffect(() => {
    function onMove(e: MouseEvent) { if (dragging) calcPos(e.clientX); }
    function onUp() { setDragging(false); }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging]);

  return (
    <section className="hero" id="about">

      {/* ── LEFT: Before / After Slider ── */}
      <div
        className="hero-slider"
        ref={containerRef}
        onMouseDown={e => { setDragging(true); calcPos(e.clientX); }}
        onTouchMove={e => calcPos(e.touches[0].clientX)}
        style={{ '--pos': `${sliderPos}%` } as React.CSSProperties}
      >
        {/* Clean car — full base layer */}
        <img src={cleanCar} className="slider-img slider-img--clean" alt="" draggable={false} />

        {/* Dirty car — clipped to left of handle */}
        <div className="slider-dirty-wrap">
          <img src={dirtyCar} className="slider-img slider-img--dirty" alt="" draggable={false} />
        </div>

        {/* Handle */}
        <div
          className="slider-handle"
          onMouseDown={e => { e.stopPropagation(); setDragging(true); }}
          onTouchStart={e => { calcPos(e.touches[0].clientX); }}
        >
          <div className="slider-line" />
          <div className="slider-knob">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Before / After labels */}
        <span className="slider-label slider-label--before">{t.before[l]}</span>
        <span className="slider-label slider-label--after">{t.after[l]}</span>

        {/* Edge vignette */}
        <div className="slider-vignette" />
      </div>

      {/* ── RIGHT: Content ── */}
      <div className="hero-content">

        <span className="hero-eyebrow">
          <span className="hero-eyebrow-bar" />
          {t.eyebrow[l]}
        </span>

        <h1 className="hero-title">
          <span className="ht-top">
            <span className="ht-brilla">{t.line1[l]}</span>
            <span className="ht-con">{t.line2[l]}</span>
          </span>
          <span className="ht-brand">D.Tailz</span>
        </h1>

        <p className="hero-desc">{t.desc[l]}</p>

        <ul className="hero-bullets">
          {t.bullets[l].map((b, i) => (
            <li key={i} className="hero-bullet">
              <span className="hero-bullet-dot" />
              {b}
            </li>
          ))}
        </ul>

        <div className="hero-actions">
          <a href="#services" className="hero-btn-primary">{t.services[l]}</a>

          <a
            href="https://wa.me/50497974295"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-wa"
          >
            <div className="hero-btn-wa-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="hero-btn-wa-text">
              <span className="hero-btn-wa-label">{t.callLabel[l]}</span>
              <span className="hero-btn-wa-number">+504 9797-4295</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
