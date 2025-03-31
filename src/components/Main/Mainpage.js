import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import "./Styles.css";
import Logo2 from "../../../src/Assets/images/ssisc/Logo2.jpeg"

export const Mainpage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ login state
  const navRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Handle SIP Click
  const handleSipClick = () => {
    if (isLoggedIn) {
      navigate("/sipcalculator");
    } else {
      alert("Please sign up and login to access the SIP Calculator");
      navigate("/loginpage");
    }
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar" ref={navRef}>
        <Card className="logo">
          <img src={Logo2} width="60" height="60" alt="" /> 
          <span className="spantext">Nagendra Finance</span>
        </Card>

        <div className="hamburger" onClick={toggleMenu}>☰</div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button className="signupbutton" onClick={() => navigate("/loginpage")}>Sign Up</button>
          <button className="loginbutton" onClick={() => { setIsLoggedIn(true); alert("Logged In Successfully"); }}>Log In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Grow Your Business with AI-Driven Finance Solutions</h2>
        <p>Our platform provides predictive analytics and financial insights to help professionals make smarter decisions.</p>

      
      </section>

      {/* Features */}
      <div className="features">
        <div className="feature-card">
          <h3>Predictive Analytics</h3>
          <p>Leverage AI to analyze trends and improve your financial strategies.</p>
        </div>
        <div className="feature-card">
            {/* 👉 SIP Calculator Link */}
        <h3 
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '24px',
            fontWeight: '600',
            color: '#1E88E5',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            letterSpacing: '1px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
          onClick={handleSipClick}
        >
          Click here For SIP Calculator
        </h3>
        </div>
        <div className="feature-card">
          <h3>Secure Transactions</h3>
          <p>Ensure the highest level of security for all financial operations.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 FinancePro | All Rights Reserved
      </footer>
    </div>
  );
};

export default Mainpage;
