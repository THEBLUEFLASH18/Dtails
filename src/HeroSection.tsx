import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
        <div className='box' style={{gridArea: "box1"}}></div>
        <div className='box' style={{gridArea: "box2"}}></div>
        <div className='box' style={{gridArea: "box3"}}></div>
        <div className='box' style={{gridArea: "box4"}}></div>
        <div className='box' style={{gridArea: "box5"}}></div>
        <div className='box' style={{gridArea: "box6"}}></div>
    </div>
  );
}

export default HeroSection;