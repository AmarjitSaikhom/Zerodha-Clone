import './home.scss';
import EcosystemImg from "../../assets/Images/ecosystem.png";
import PressLogo from "../../assets/Images/pressLogos.png"
import { WHY_US } from '../../data/WHY_US';

const Stats = () => {
  return (
    <section className='ecosystem'>
      <div className="ecosystem_container">
        <div className="ecosystem_left">
          <h2>Trust with confidence</h2>
          {
            WHY_US.map((item, index) => (
              <div className="ecosystem__why" key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>
        <div className="ecosystem__right">
          <img src={EcosystemImg} alt="Ecosystem overview" />

          <div className="ecosystem__links">
            <p>
              Explore our products
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </p>
            <p className="ecosystem__link--indent">
              Try Kite demo
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="ecosystem__press">
        <img src={PressLogo} alt="Press LogoS" />
      </div>
    </section>
  )
}

export default Stats