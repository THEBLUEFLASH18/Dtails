import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import HowItWorks from './HowItWorks'
import PricingSection from './PricingSection'
import GallerySection from './GallerySection'
import TestimonialsSection from './TestimonialsSection'
import FAQSection from './FAQSection'
import Footer from './Footer'

function App() {
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN')

  return (
    <>
      <NavBar language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <ServicesSection language={language} />
      <HowItWorks language={language} />
      <PricingSection language={language} />
      <GallerySection language={language} />
      <TestimonialsSection language={language} />
      <FAQSection language={language} />
      <Footer language={language} />
    </>
  )
}

export default App
