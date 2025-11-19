import landingImg from "../images/landing.png";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <img src={landingImg} alt="landing image" />
      <div className="credits">
        <h1>illo credits/position</h1>
      </div>
    </div>
  );
};

export default Landing;