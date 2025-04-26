import React, { useState } from "react";
import './SurveyForm.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    job: "",
    marital: "",
    education: "",
    default: "",
    balance: "",
    housing: "",
    loan: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="survey-form-container">
      <h2>Investment Opinion Survey</h2>
      <form onSubmit={handleSubmit} className="survey-form">
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>

        <div className="form-group">
          <label>Job:</label>
          <select name="job" value={formData.job} onChange={handleChange}>
            <option value="management">Management</option>
            <option value="technician">Technician</option>
            <option value="blue-collar">Blue Collar</option>
          </select>
        </div>

        <div className="form-group">
          <label>Marital Status:</label>
          <select name="marital" value={formData.marital} onChange={handleChange}>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>

        <div className="form-group">
          <label>Education:</label>
          <select name="education" value={formData.education} onChange={handleChange}>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="tertiary">Tertiary</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className="form-group">
          <label>Default Loan:</label>
          <select name="default" value={formData.default} onChange={handleChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Balance (in Euros):</label>
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            placeholder="Enter bank balance"
          />
        </div>

        <div className="form-group">
          <label>Housing Loan:</label>
          <select name="housing" value={formData.housing} onChange={handleChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Personal Loan:</label>
          <select name="loan" value={formData.loan} onChange={handleChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;
