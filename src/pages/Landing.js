import landingImg from "../images/landing.png";
// import rivalryLanding from "../images/rivalrylanding.png"
import "./Landing.css";

const Landing = ({data}) => {
  const creditText = data 
  ? Array.isArray(data) ? data : data.landing_credits
  : "Helen Juwon Park / Illustrations Director & Kaylen Ho / Daily Bruin Staff";
  
  const image = data 
  ? Array.isArray(data) ? data : data.landing_image
  : landingImg

  return (
    <div className="landing-container">
      <img src={image} alt="Landing illustration" />
      <div className="credits">
        <h1>{creditText}</h1>
      </div>
    </div>
  );
};

export default Landing;