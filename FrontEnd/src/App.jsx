import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoodTracker from "./components/Mood/MoodTracker";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage"; // Example NavBar component
import ContentSection from "./components/ContentSection";
import TherapistFinder from "./components/therapy/TherapistFinder";
import EmergencyContactsList from "./components/emergency/EmergencyContactsList";
import Resource from "./components/resource/Resource";
import Footer from "./components/resource/Footer";
function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<ContentSection />} />
          <Route path="/mood-tracker" element={<MoodTracker userId="123" />} />
          <Route path="/therapist-finder" element={<TherapistFinder />} />
          <Route
            path="/emergency-contact"
            element={<EmergencyContactsList />}
          />
          <Route path="/resource" element={<Resource />} />
          <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
