import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { baseUrl } from "../../consts";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const MoodForm = ({ userId, onMoodLogged }) => {
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    if (mood) {
      try {
        await axios.post(`${baseUrl}/mood/log`, { userId, mood });
        setMood("");
        setMessage("Mood logged successfully!");
        onMoodLogged(); // Notify parent component to refresh the chart
      } catch (error) {
        console.error("Error logging mood:", error);
        setMessage("Failed to log mood. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mt-10">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Rate Your Mood</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="moodInput" className="form-label">
              How do you feel today?
            </label>
            <input
              type="text"
              className="form-control"
              id="moodInput"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="Enter your mood"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging..." : "Log Mood"}
          </button>
        </form>
        {message && (
          <div
            className={`alert mt-4 ${
              message.includes("successfully")
                ? "alert-success"
                : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

MoodForm.propTypes = {
  userId: PropTypes.string.isRequired,
  onMoodLogged: PropTypes.func.isRequired, // Expect the callback to be passed
};

export default MoodForm;
