import React from "react";
// import zarf from "./Images/zarf.jpg"
// import rovc from "./Images/amurovc.jpg"
// import commerce from "./Images/finanaceweek.jpg"

function WorkSection() {
    return (
        <React.Fragment>
            <div className="work-section" id="work">
                <div className="work-info">
                    <h2>Our Work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea vel veniam laboriosam tempora. Ipsam sit ea
                        inventore aliquam aspernatur commodi totam, quae et, veritatis neque doloribus voluptatem molestiae quis
                        vitae.
                        Ratione pariatur ex officiis dicta sunt cumque, inventore incidunt neque recusandae corrupti obcaecati,</p>
                </div>
                <a href="https://www.youtube.com/watch?v=E-spd1Fnlow&t=128s" className="work-container" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/zarf.jpg" alt="Zarf After Movie" />
                    <h3>Zarf After Movie</h3>
                    <p>We proudly present to you the official After Movie of our mind-blowing College Fest! Galley Fiesta held
                        in Zakir Hussain College of Engineering and Technology</p>
                </a>
                <a href="https://www.youtube.com/watch?v=_cfhmZRtpvA&t=1s" className="work-container" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/amurovc.jpg" alt="AMUROVc After Movie" />
                    <h3>AMUROVc After Movie</h3>
                    <p>Relive the unforgettable moments of zhcet amu's AMUROVc 2.0! From the technical crew to the games
                        committee, every organizer played a vital role in making this event a grand success.</p>
                </a>
                <a href="https://www.youtube.com/watch?v=QWhs7JDfVjk" className="work-container" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/finanaceweek.jpg" alt="Commerce Club After Movie" />
                    <h3>Commerce Club After Movie</h3>
                    <p>Being a production partner of the event i.e #finance week organised by #commerce club #amu #aligarh, We
                        have made this Aftermovie of the entire event.</p>
                </a>
            </div>
        </React.Fragment>
    );
}

export default WorkSection;
