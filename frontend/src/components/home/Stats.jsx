import './home.scss';
import EcosystemImg from "../../assets/Images/ecosystem.png";
import PressLogo from "../../assets/Images/pressLogos.png"

const Stats = () => {
  return (
    <section className='home-ecosystem-section'>
      <div className="home-ecosystem-container">
        <div className="home-ecosystem-container-left">
          <h2>Trust with confidence</h2>
          <div className="home-ecosysystem-why-us">
            <h3>Customer-first always</h3>
            <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div className="home-ecosysystem-why-us">
            <h3>No spam or gimmicks</h3>
            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
          </div>
          <div className="home-ecosysystem-why-us">
            <h3>The Zerodha universe</h3>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>
          <div className="home-ecosysystem-why-us">
            <h3>Do better with money</h3>
            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>
        <div className="home-ecosystem-container-right">
          <img src={EcosystemImg} alt="Ecosystem Image" />
          <div className="home-ecosystem-container-right-text">
            <p>Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
            <p style={{marginLeft: "24px"}}>Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
          </div>
        </div>
      </div>
      <div className="home-ecosystem-press-logo">
        <img src={PressLogo} alt="Press Logo" />
      </div>
    </section>
  )
}

export default Stats
