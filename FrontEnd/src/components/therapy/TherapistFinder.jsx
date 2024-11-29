// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./TherapistFinder.css"; // Import the CSS file

const therapists = [
  {
    name: "Dr. John Doe",
    specialization: "Anxiety",
    location: "New York",
    availability: "Monday-Friday",
  },
  {
    name: "Dr. Jane Smith",
    specialization: "Depression",
    location: "Los Angeles",
    availability: "Weekends",
  },
  {
    name: "Dr. Lisa White",
    specialization: "OCD",
    location: "San Francisco",
    availability: "Monday-Thursday",
  },
  {
    name: "Dr. Michael Brown",
    specialization: "PTSD",
    location: "New York",
    availability: "Weekdays",
  },
];

const TherapistFinder = () => {
  const [location, setLocation] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [filteredTherapists, setFilteredTherapists] = useState(therapists);

  const handleSearch = () => {
    const filtered = therapists.filter((therapist) => {
      return (
        (location === "" ||
          therapist.location.toLowerCase().includes(location.toLowerCase())) &&
        (specialization === "" ||
          therapist.specialization
            .toLowerCase()
            .includes(specialization.toLowerCase()))
      );
    });
    setFilteredTherapists(filtered);
  };

  return (
    <div className="therapist-finder">
      <h2>Find a Therapist</h2>
      <div className="search-filters">
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city or region"
          />
        </div>
        <div className="form-group">
          <label>Specialization:</label>
          <select
            className="form-control"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="">Select Specialization</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Depression">Depression</option>
            <option value="OCD">OCD</option>
            <option value="PTSD">PTSD</option>
          </select>
        </div>
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="therapist-results">
        <h3>Results:</h3>
        {filteredTherapists.length > 0 ? (
          <ul className="list-group">
            {filteredTherapists.map((therapist, index) => (
              <li key={index} className="list-group-item">
                <h5>{therapist.name}</h5>
                <p>Specialization: {therapist.specialization}</p>
                <p>Location: {therapist.location}</p>
                <p>Availability: {therapist.availability}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No therapists found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default TherapistFinder;
