import Pricing0 from "../../assets/Images/pricing0.svg";
import Pricing20 from "../../assets/Images/pricing20.svg";

const Pricing = () => {
  return (
    <section className='home-pricing-section'>
      <div className="home-pricing-container">
        <div className="home-pricing-containe-detail">
          <div className="home-pricing-container-detail-left">
            <h2>Unbeatable pricing</h2>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          </div>
          <div className="home-pricing-container-detail-right">
            <div className="pricing-box">
              <img src={Pricing0} alt="pricing img" />
              <p>Free account
                <br />
                opening</p>
            </div>
            <div className="pricing-box">
              <img src={Pricing0} alt="pricingEquity img" />
              <p>Free equity delivery
                <br />
                and direct mutual funds</p>
            </div>
            <div className="pricing-box">
              <img src={Pricing20} alt="pricingMF img" />
              <p>Intraday and
                <br />
                F&O</p>
            </div>
          </div>
        </div>
        <p className="home-pricing-containe-see-pricing">
          See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </p>
      </div>
    </section>
  )
}

export default Pricing
