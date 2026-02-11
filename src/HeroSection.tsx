import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">

        <div className='box call2action' style={{gridArea: "box1"}}>
          <h3>Now booking for February</h3>
          <h1>Shine with <br /> <span>Dtails.</span></h1>
          <p>Experience automotive perfection. We don't just wash cars; 
            we restore, protect, and elevate your vehicle to showroom condition with 
            obsessive attention to detail.
          </p>
          <button className="book">Book Appointment</button>
          <button className="services">Our Services</button>
        </div>

        <div className='box' style={{gridArea: "box2"}}></div>

        <div className='box' style={{gridArea: "box3"}}></div>

        <div className='box' style={{gridArea: "box4"}}></div>

        <div className='box' style={{gridArea: "box5"}}>
          <h2>Book Online</h2>
          <button className='whatsapp'>Whatsapp</button>
        </div>
        <div className='box' style={{gridArea: "box6"}}></div>
    </div>
  );
}

export default HeroSection;