import landingImg from "../images/rivalrylanding.gif";
import "./Landing.css";

const Landing = ({data}) => {
  if (!data) return null;
  
  const creditText = data.landing_credits || "Helen Juwon Park / Illustrations Director & Kaylen Ho / Daily Bruin Staff"
  return (
    <div className="landing-container">
      <img src={landingImg} alt="Landing illustration" />
      <div className="credits">
        <h1>{creditText}</h1>
      </div>
    </div>
  );
};

export default Landing;