import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import HowItWorks from './HowItWorks'
import GallerySection from './GallerySection'
import TestimonialsSection from './TestimonialsSection'
import FAQSection from './FAQSection'
import Footer from './Footer'

const locationNotice = {
  title: { EN: 'Service Location Notice', ES: 'Aviso de Ubicación del Servicio' },
  body: {
    EN: 'Our services are mobile and subject to approval based on your requested location. Before booking, the business owner will review and confirm availability to travel to your area.',
    ES: 'Nuestros servicios son a domicilio y están sujetos a aprobación según la ubicación solicitada. Antes de reservar, el dueño del negocio revisará y confirmará la disponibilidad para desplazarse a tu zona.',
  },
  cta: { EN: 'I Understand', ES: 'Entendido' },
}

function App() {
  const [language, setLanguage] = useState<'EN' | 'ES'>('ES')
  const [showNotice, setShowNotice] = useState(false)
  const l = language

  useEffect(() => {
    const dismissed = sessionStorage.getItem('location-notice-dismissed')
    if (!dismissed) setShowNotice(true)
  }, [])

  function dismissNotice() {
    sessionStorage.setItem('location-notice-dismissed', '1')
    setShowNotice(false)
  }

  return (
    <>
      {showNotice && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.65)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px',
        }}>
          <div style={{
            background: '#FFD700',
            borderRadius: '14px',
            padding: '32px 28px',
            maxWidth: '440px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            color: '#111',
            position: 'relative',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <strong style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '0.01em' }}>
                {locationNotice.title[l]}
              </strong>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.6, margin: '0 0 22px 0', color: '#222' }}>
              {locationNotice.body[l]}
            </p>
            <button
              onClick={dismissNotice}
              style={{
                background: '#111', color: '#FFD700',
                border: 'none', borderRadius: '8px',
                padding: '10px 24px', fontWeight: 700,
                fontSize: '13px', cursor: 'pointer',
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}
            >
              {locationNotice.cta[l]}
            </button>
          </div>
        </div>
      )}
      <NavBar language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <ServicesSection language={language} />
      <HowItWorks language={language} />
      <GallerySection language={language} />
      <TestimonialsSection language={language} />
      <FAQSection language={language} />
      <Footer language={language} />
    </>
  )
}

export default App
