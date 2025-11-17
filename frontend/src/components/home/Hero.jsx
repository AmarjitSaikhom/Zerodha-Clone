import './home.scss';
import homeHero from '../../assets/Images/homeHero.png';
import Button from '../button/button';

const Hero = () => {

  return (
    <section className='home-hero'>
      <div className="home-hero_container">
        <img src={homeHero} alt="Investment platform hero banner" />
        <h1>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <Button className="home-hero_btn" to="/signup">Sign up for free</Button>
      </div>
    </section>
  )
}

export default Hero
