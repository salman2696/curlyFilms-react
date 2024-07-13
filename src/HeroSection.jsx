import React from "react";

function HeroSection() {
    return(
       <>
       <div className="hero-section">
        <div className="image"></div>
    </div>
    <div className="content" id="team">
        <div className="team">
            <h2>OUR TEAM</h2>
            <p>Meet the Team</p>
        </div>
        <div className="team-info">
            <div className="info">
                <div className="image1"></div>
                <h3>Mohamamd Salman</h3>
                <p> DOP</p>
            </div>
            <div className="info">
                <div className="image2"></div>
                <h3>Mohd Anas</h3>
                <p> Director</p>
            </div>
            <div className="info">
                <div className="image3"></div>
                <h3>Ayaan Azmat Khan</h3>
                <p> Producer</p>
            </div>
            <div className="info">
                <div className="image4"></div>
                <h3>Mohd Anas</h3>
                <p> Cinematographer</p>
            </div>
        </div>
    </div>
    </> 
    )
}

export default HeroSection;