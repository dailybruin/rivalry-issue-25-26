// import landingImg from "../images/landing.png";
import rivalryLanding from "../images/rivalry_landing.gif"
import "./Landing.css";

const Landing = ({data}) => {
  if (!data) return null;
  
  const creditText = data.landing_credits || "Helen Juwon Park / Illustrations Director & Kaylen Ho / Daily Bruin Staff"
  return (
    <div className="landing-container">
      <img src={rivalryLanding} alt="Landing illustration" />
      <div className="credits">
        <h1>{creditText}</h1>
      </div>
    </div>
  );
};

export default Landing;