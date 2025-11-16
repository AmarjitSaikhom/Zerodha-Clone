import './home.scss';
import EducationImg from "../../assets/Images/education.svg";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <section className='home-education-section'>
      <div className="home-education-container">
        <div className="home-education-container-left">
          <img src={EducationImg} alt="Education Image" />
        </div>
        <div className="home-education-container-right">
          <h2>Free and open market education</h2>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <Link to={"/#"}>
            Varsity
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
          <p className="tradingQA">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <Link to={"/#"}>
            TradingQ&A
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Education
