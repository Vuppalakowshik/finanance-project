import React, { useState } from "react";
import { Card } from "react-bootstrap";

import Person from "../../../Assets/images/ssisc/person.jpeg";
import Phone from "../../../Assets/images/ssisc/poneicon.jpg";
import Lock from "../../../Assets/images/ssisc/lock.png";
import "./Style.css";

export const Loginpage = () => {
  const [action, setAction] = useState("Login");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);

  // Function to simulate sending OTP
  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      alert(`OTP sent to ${mobileNumber}`);
      setOtpSent(true);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  // Function to verify OTP (For now, assume OTP is always 1234)
  const handleVerifyOtp = () => {
    if (otp === "1234") {
      setVerified(true);
      alert("Mobile number verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={Person} width="34" height="24" alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        {/* Mobile Number Input Field */}
        <div className="input">
          <img src={Phone} width="34" height="24" alt="" />
          <input
            type="text"
            placeholder="Enter your Aadhar linked phone number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />

        </div>
        <Card className="cardbody">
          <div className="color">
            <p className="textstyle"> NOTE: Your mobile number must be linked to your Aadhaar.</p>
          </div>

        </Card>

        {/* OTP Section */}
        <div className="otp-section">
          <button className="btn btn-primary" onClick={handleSendOtp} disabled={otpSent}>
            {otpSent ? "OTP Sent" : "Send OTP"}
          </button>

          {/* OTP Input Field (Appears after clicking Send OTP) */}
          {otpSent && (
            <input
              type="text"
              className="otp-input"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}

          {/* Verify OTP Button */}
          {otpSent && (
            <button className="btn btn-secondary" onClick={handleVerifyOtp} disabled={verified}>
              {verified ? "Verified" : "Verify OTP"}
            </button>
          )}
        </div>

      {/* Password Input Field (Shown in both Login & Sign Up) */}
<div className="input">
  <img src={Lock} width="34" height="24" alt="" />
  <input type="password" placeholder="Password" />
</div>

{/* Confirm Password Field (Only for Sign Up) */}
{action === "Sign Up" && (
  <div className="input">
    <img src={Lock} width="34" height="24" alt="" />
    <input type="password" placeholder="Confirm your Password" />
  </div>
)}

      </div>
      



      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Lost Password?<span>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};
