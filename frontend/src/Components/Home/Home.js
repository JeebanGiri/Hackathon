import React from "react";
import "./Home.css";
import HomeImg from "../../images/abc.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    // Use the navigate function to go to the "/challenges" page
    navigate("/challenges");
  };
  return (
    <div>
      <div className="bodypart">
        <div className="text">
          <div className="bigtext">
            <div className="smalltext">
              <h2>Welcome to Urban Eco Planner</h2>
              <p className="parag">UrbanEcoPlanner is a Eco-friendly Platform for us.</p>
            </div>

            <div className="t1">
              <p>Complete the challenges</p>
            </div>

            <div className="t2" style={{ display: "flex" }}>
              <p style={{ color: "green", marginRight: "5px" }}>&</p>
              <p> GAIN THE REWARDS</p>
            </div>
          </div>

          <button
            className="challange"
            onClick={handleNavigate}
          >
            See Challenges
          </button>
        </div>

        <div className="photo">
          <div className="imge">
            <img src={HomeImg} alt="image" className="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
