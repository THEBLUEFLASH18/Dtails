import { useState } from 'react';
import './FAQSection.css';

type Lang = 'EN' | 'ES';

const content = {
  title: { EN: 'Frequently Asked Questions', ES: 'Preguntas Frecuentes' },
  sub:   { EN: 'Everything you need to know', ES: 'Todo lo que necesitas saber' },
  items: [
    {
      q: { EN: 'How long does a detail take?',              ES: '¿Cuánto tiempo toma un detallado?' },
      a: { EN: 'A standard detail takes 2–4 hours. Paint correction and ceramic coating can take 6–12 hours or more depending on the vehicle\'s condition and size.', ES: 'Un detallado estándar toma de 2 a 4 horas. La corrección de pintura y el recubrimiento cerámico pueden tomar de 6 a 12 horas o más según la condición y el tamaño del vehículo.' },
    },
    {
      q: { EN: 'Do you come to my location?',               ES: '¿Vienen a mi ubicación?' },
      a: { EN: 'Yes. We operate mobile across San Pedro Sula and surrounding areas (subject to confirmation). Just provide a flat, shaded area and we handle the rest — no water or electricity hookup needed from your side.', ES: 'Sí. Operamos de forma móvil en San Pedro Sula y zonas cercanas (sujeto a confirmación). Solo necesitamos un área plana y con sombra — no necesitas suministrar agua ni electricidad.' },
    },
    {
      q: { EN: 'What products do you use?',                 ES: '¿Qué productos utilizan?' },
      a: { EN: 'We use only professional-grade products including Menzerna polishes, Koch-Chemie dressings, and Gyeon ceramic coatings. No shortcuts, no diluted consumer products.', ES: 'Usamos solo productos de grado profesional: pulidores Menzerna, acondicionadores Koch-Chemie y recubrimientos cerámicos Gyeon. Sin atajos, sin productos diluidos.' },
    },
    {
      q: { EN: 'How often should I get my car detailed?',   ES: '¿Con qué frecuencia debo detallar mi auto?' },
      a: { EN: 'For most vehicles, a full detail every 3–4 months keeps the finish protected and looking pristine. Ceramic-coated vehicles can extend to 6–12 months for maintenance washes.', ES: 'Para la mayoría de los vehículos, un detallado completo cada 3–4 meses mantiene el acabado protegido. Los vehículos con cerámica pueden extenderse a 6–12 meses para lavados de mantenimiento.' },
    },
    {
      q: { EN: 'Do you require a deposit?',                 ES: '¿Requieren depósito?' },
      a: { EN: 'Yes, a 30% deposit is required to confirm your booking. The remainder is due on the day of service. We accept bank transfer and cash.', ES: 'Sí, se requiere un depósito del 30% para confirmar tu cita. El resto se paga el día del servicio. Aceptamos transferencia bancaria y efectivo.' },
    },
    {
      q: { EN: 'What if it rains?',                         ES: '¿Qué pasa si llueve?' },
      a: { EN: 'We monitor weather closely and will contact you 24 hours in advance if rescheduling is needed. Interior services can proceed in any weather — exterior work requires dry conditions.', ES: 'Monitoreamos el clima de cerca y te contactaremos con 24 horas de anticipación si es necesario reprogramar. Los servicios interiores pueden realizarse con cualquier clima; los exteriores requieren condiciones secas.' },
    },
  ],
};

function FAQSection({ language }: { language: Lang }) {
  const l = language;
  const [open, setOpen] = useState<number | null>(0);


  return (
    <div className="faq-wrapper">
    <section className="faq-section">
      <div className="faq-header">
        <h2 className="faq-title">{content.title[l]}</h2>
        <p className="faq-sub">{content.sub[l]}</p>
      </div>

      <div className="faq-list">
        {content.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
              <button className="faq-trigger" onClick={() => setOpen(isOpen ? null : i)}>
                <span className="faq-q">{item.q[l]}</span>
                <span className="faq-toggle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {isOpen
                      ? <line x1="5" y1="12" x2="19" y2="12"/>
                      : <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>
                    }
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <div className="faq-corner faq-corner--tl"></div>
                  <p>{item.a[l]}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
}

export default FAQSection;
