import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContentSection = () => {
  return (
    <div
      className="container-fluid py-5 text-light"
      style={{
        backgroundImage: "url('https://example.com/background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container text-center mb-5" style={{ backgroundColor: "#F8F8FF", padding: "30px", borderRadius: "15px" }}>
        <h1 className="display-4 font-weight-bold">Welcome to Your Mental Health Support Platform.</h1>
        <p className="lead">
          Your mental well-being is our priority. Explore resources, connect with therapists, and track your mental health journey.
        </p>
      </div>

      <div className="container">
        <div className="row text-center">
          {[
            {
              title: "Educational Resources",
              description: "Access articles, guides, and videos on mental health topics.",
              link: "/resource",
            },
            {
              title: "Therapist Finder",
              description: "Locate mental health professionals near you.",
              link: "/therapist-finder",
            },
            {
              title: "Mood Tracker",
              description: "Record and analyze your mood over time.",
              link: "/mood-tracker",
            },
          ].map((section, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-0 shadow-lg" style={{ height: '300px', backgroundColor: '#007bff', color: 'white' }}>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{section.title}</h5>
                    <p className="card-text">{section.description}</p>
                  </div>
                  <div className="mt-auto"> {/* This pushes the button to the bottom */}
                    <a href={section.link} className="btn btn-light">
                      Go to {section.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h3 className="text-center font-weight-bold text-white">Latest Articles</h3>
          <div className="row mt-3">
            {[
              {
                title: "How to Cope with Anxiety",
                description: "Discover techniques to manage anxiety daily.",
                link: "https://www.verywellhealth.com/how-to-deal-with-anxiety-8384822",
              },
              {
                title: "Mental Health Awareness Importance",
                description: "Understand why mental health matters for everyone.",
                link: "https://shawmind.org/why-mental-health-awareness-is-so-important/",
              },
              {
                title: "Self-Care Tips for Well-being",
                description: "Learn practices to support your mental health.",
                link: "https://www.mhanational.org/taking-time-yourself",
              },
            ].map((article, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card border-0 shadow-lg" style={{ height: '300px', backgroundColor: '#f8f9fa', color: 'black' }}>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.description}</p>
                    </div>
                    <div className="mt-auto"> {/* This pushes the button to the bottom */}
                      <a href={article.link} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
