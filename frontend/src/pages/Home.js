import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import "./Home.css"; // Import CSS file

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="welcome-text">Welcome, {loggedInUser || "Guest"} 👋</h1>
        <p className="subtitle">You are successfully logged in.</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Home;
