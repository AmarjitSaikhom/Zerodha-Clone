import "./about.scss";
import NithinKamath from "../../assets/Images/nithin-kamath.jpg";
import { teamMembers } from "../../data/teamMembers";
import TeamMember from "./TeamMember";

const Team = () => {

  return (
    <section className='about-team-section'>
      <div className="about-team-container">
        <div className="about-people">
          <h2>People</h2>
          <div className="about-ceo">
            <div className="about-ceo-img">
              <img src={NithinKamath} alt="Nithin Kamath Image" />
              <h5>Nithin Kamath</h5>
              <p>Founder, CEO</p>
            </div>
            <div className="about-ceo-info">
              <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
              <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
              <p>Playing basketball is his zen.</p>
              <p>Connect on <span>Homepage</span> / <span>TradingQnA</span> / <span>Twitter</span></p>
            </div>
          </div>
        </div>
        <div className="about-team">
          <div className="about-team-info">
            {teamMembers.map((member, index) => {
              return (
                <TeamMember key={index} image={member.img} name={member.name} role={member.role} bio={member.bio} />
              )

            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team