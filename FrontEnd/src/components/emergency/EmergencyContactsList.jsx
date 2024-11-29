import React, { useEffect, useState } from "react";

import "./EmergencyContactsList.css"; // External CSS
const fetchEmergencyContacts = async () => {
  return [
    {
      name: "Veterans Crisis Line",
      hotline: "988",
      location: "India",
      description: "24/7 support for people in distress.",
    },
    {
      name: "Disaster Distress Helpline",
      hotline: " 1-800-985-5990",
      location: "India",
      description: " crisis counseling.",
    },
    {
      name: "SAMHSA Helpline",
      hotline: "1-800-662-HELP",
      location: "India",
      description: "Confidential free help from public health agencies.",
    },
  ];
};

const EmergencyContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the emergency contacts on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEmergencyContacts();
        setContacts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="loading">Loading emergency contacts...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;

  return (
    <div className="emergency-contacts-list container">
      <h2>Emergency Contacts</h2>
      {contacts.length === 0 ? (
        <p>No emergency contacts available.</p>
      ) : (
        <ul className="list-group">
          {contacts.map((contact, index) => (
            <li key={index} className="list-group-item">
              <div className="contact-card">
                <h5 className="contact-name">{contact.name}</h5>
                <p>
                  <strong>Hotline:</strong> {contact.hotline}
                </p>
                <p>
                  <strong>Location:</strong> {contact.location}
                </p>
                <p>
                  <strong>Description:</strong> {contact.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmergencyContactsList;
