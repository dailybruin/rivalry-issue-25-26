// import landingImg from "../images/landing.png";
// import rivalryLanding from "../images/rivalrylanding.png"
import "./Landing.css";

const Landing = ({data}) => {
  if (!data) return null;
  
  const creditText = data.landing_credits || "Helen Juwon Park / Illustrations Director & Kaylen Ho / Daily Bruin Staff"
  return (
    <div className="landing-container">
      {data.landing_image && <img src={data.landing_image} alt="Landing illustration" />}
      <div className="credits">
        <h1>{creditText}</h1>
      </div>
    </div>
  );
};

export default Landing;