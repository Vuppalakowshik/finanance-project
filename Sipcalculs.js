import React, { useState } from "react";
import "./SipCalculator.css"; // Add styles here

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [futureValue, setFutureValue] = useState(0);

  const calculateSIP = () => {
    const months = years * 12;
    const rate = expectedReturn / 100 / 12;
    const sipFutureValue = (monthlyInvestment * ((Math.pow(1 + rate, months) - 1) / rate)) * (1 + rate);
    setFutureValue(sipFutureValue.toFixed(2));
  };

  return (
    <div className="sip-container">
      <h2>SIP Calculator</h2>
      <div className="input-group">
        <label>Monthly Investment (₹)</label>
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Investment Duration (Years)</label>
        <input type="number" value={years} onChange={(e) => setYears(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Expected Return (% per year)</label>
        <input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} />
      </div>
      <button onClick={calculateSIP}>Calculate</button>
      <h3>Future Value: ₹{futureValue}</h3>
    </div>
  );
};

export default SipCalculator;
