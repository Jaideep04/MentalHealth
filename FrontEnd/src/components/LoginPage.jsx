import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../consts"; // Assuming baseUrl is defined
import { Form, Button, Container, Alert } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./LoginPage.css"; // Import custom CSS for gradient background

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${baseUrl}/auth/login`, {
        username,
        password,
      });
      // Save the JWT token to local storage
      localStorage.setItem("token", response.data.jwt);
      // Navigate to the dashboard or home page
      navigate("/"); // Change this to your desired route
    } catch (error) {
      console.error("Login failed:", error);
      // Handle different error responses
      if (error.response && error.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="login-container">
      <h2 className="text-center text-white mt-5">Please Sign In</h2>
      <Form onSubmit={handleLogin} className="mt-4">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="formUsername">
          <Form.Label className="text-white">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-label="Username" // Accessibility improvement
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password" // Accessibility improvement
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={loading}
          className="mt-3 w-100"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        <div className="text-center mt-3">
          <a href="/forgot-password" className="text-white">
            Forgot Password?
          </a>
        </div>
      </Form>
    </Container>
  );
};

export default LoginPage;
