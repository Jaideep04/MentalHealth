import React, { useState, useEffect } from "react";
import MoodForm from "./MoodForm";
import MoodChart from "./MoodChart";
import PropTypes from "prop-types";
import axios from "axios";
import { baseUrl } from "../../consts";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import NavBar from "../Navbar";

const MoodTracker = ({ userId }) => {
  const [moodHistory, setMoodHistory] = useState([]);

  // Function to fetch mood history
  const fetchMoodHistory = async () => {
    try {
      const response = await axios.get(`${baseUrl}/mood/history/${userId}`);
      setMoodHistory(response.data);
    } catch (error) {
      console.error("Error fetching mood history:", error);
    }
  };

  // Fetch mood history when the component mounts
  useEffect(() => {
    fetchMoodHistory();
  }, [userId]);

  // Callback to refresh mood history after logging a mood
  const handleMoodLogged = () => {
    fetchMoodHistory(); // Re-fetch mood history after new mood is logged
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1 className="display-4">Happiness Tracker</h1>
          <p className="lead">
            Track your daily mood and visualize the history.
          </p>
        </div>
      </div>

      {/* Horizontal card with button linking to localhost */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-10">
          <div className="card horizontal shadow-sm">
            <div className="row no-gutters">
              <div className="col-md-8 p-3">
                <h5 className="card-title">Explore Our Anonymous Chatroom</h5>
                <p className="card-text">
                  Click here to access our anonymous chat center for
                   talking with people or volunteers.
                </p>
              </div>
              <div className="col-md-4 text-center d-flex align-items-center">
                <a
                  href="http://localhost:9194/index.html"
                  className="btn btn-primary w-75"
                >
                  Go to ChatRoom
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Pass handleMoodLogged as a callback to MoodForm */}
          <MoodForm userId={userId} onMoodLogged={handleMoodLogged} />
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          {/* Pass moodHistory as a prop to MoodChart */}
          <MoodChart userId={userId} moodHistory={moodHistory} />
        </div>
      </div>
    </div>
  );
};

// Validate that userId is passed as a prop
MoodTracker.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default MoodTracker;
