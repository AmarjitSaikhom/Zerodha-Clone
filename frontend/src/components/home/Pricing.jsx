import './home.scss';
import { Pricing_Box } from '../../data/Pricing_Box';

const Pricing = () => {
  return (
    <section className='home-pricing'>
      <div className="home-pricing_container">
        <div className="home-pricing_detail">
          <div className="home-pricing_left">
            <h2>Unbeatable pricing</h2>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          </div>
          <div className="home-pricing_right">
            {
              Pricing_Box.map((item, index) => (
                <div className="pricing_box" key={index}>
                  <img src={item.img} alt="pricing img" />
                  <p>{item.text}</p>
                </div>
              ))
            }

          </div>
        </div>
        <p className="home-pricing-cta">
          See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </p>
      </div>
    </section>
  )
}

export default Pricing


// <div className="pricing_box">
//   <img src={Pricing0} alt="pricing img" />
//   <p>Free account
//     <br />
//     opening</p>
// </div>
// <div className="pricing_box">
//   <img src={Pricing0} alt="pricingEquity img" />
//   <p>Free equity delivery
//     <br />
//     and direct mutual funds</p>
// </div>
// <div className="pricing_box">
//   <img src={Pricing20} alt="pricingMF img" />
//   <p>Intraday and
//     <br />
//     F&O</p>
// </div>