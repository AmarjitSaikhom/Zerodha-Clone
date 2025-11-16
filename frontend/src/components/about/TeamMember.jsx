import { useState } from "react";
import "./about.scss";

const TeamMember = ({ image, name, role, bio }) => {
    const [openBio, setOpenBio] = useState(false);


    return (
        <div className="team-member-info">
            <img src={image} alt={name + "Image"} />
            <h5>{name}</h5>
            <p>{role}</p>

            <div className="bio">
                <p onClick={() => setOpenBio(!openBio)}>
                    Bio
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                </p>
                
                <p className={`bio-info ${openBio ? "bio-info-open" : ""}`}>
                    {bio}
                </p>
            </div>
        </div>
    )
}

export default TeamMember
