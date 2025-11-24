// import landingImg from "../images/landing.png";
import rivalryLanding from "../images/rivalrylanding.png"
import "./Landing.css";

const Landing = ({landing}) => {
  return (
    <div className="landing-container">
      <img src={rivalryLanding} alt="Landing illustration" />
      <div className="credits">
        <h1>Helen Juwon Park / Illustrations Director & Kaylen Ho / Daily Bruin Staff</h1>
      </div>
    </div>
  );
};

export default Landing;