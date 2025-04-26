import React, { useState } from "react";
import './SurveyForm.css'; // Ensure that the CSS file is in the same directory

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
    y: "", 
  });

  const [result, setResult] = useState(null); // State to store the result

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log('Form data updated:', formData); // Log updated form data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data before submission:', formData); // Log data before submission

    // Check if all fields are filled
    if (Object.values(formData).includes("") || Object.values(formData).includes(undefined)) {
      alert("All fields must be filled!");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Response:', data); // Log the response from the server

      setResult(data); // Set the result in state to display it

    } catch (error) {
      console.error('Error:', error); // Log error if there is one
    }
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
            className="input-small"
          />
        </div>

        <div className="form-group">
          <label>Job:</label>
          <select name="job" value={formData.job} onChange={handleChange} className="input-small">
            <option value="management">Management</option>
            <option value="technician">Technician</option>
            <option value="blue-collar">Blue Collar</option>
            <option value="admin.">Admin</option>
          </select>
        </div>

        <div className="form-group">
          <label>Marital Status:</label>
          <select name="marital" value={formData.marital} onChange={handleChange} className="input-small">
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>

        <div className="form-group">
          <label>Education Level:</label>
          <select name="education" value={formData.education} onChange={handleChange} className="input-small">
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="tertiary">Tertiary</option>
            <option value="university.degree">University Degree</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className="form-group">
          <label>Default Loan:</label>
          <select name="default" value={formData.default} onChange={handleChange} className="input-small">
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
            className="input-small"
          />
        </div>

        <div className="form-group">
          <label>Housing Loan:</label>
          <select name="housing" value={formData.housing} onChange={handleChange} className="input-small">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Personal Loan:</label>
          <select name="loan" value={formData.loan} onChange={handleChange} className="input-small">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Investment Preference (y):</label>
          <select name="y" value={formData.y} onChange={handleChange} className="input-small">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {/* Display the result if available */}
      {result && (
        <div className="result-container">
          <h3>Prediction Result</h3>
          <p><strong>Recommendation:</strong> {result.recommendation}</p>
          <h4>Probabilities:</h4>
          <ul>
            {Object.entries(result.probabilities).map(([key, value]) => (
              <li key={key}>{key}: {value}</li>
            ))}
          </ul>

          <div className="output-boot">
            <h4>Additional Information:</h4>
            <p><strong>The recommendation is based on the highest probability.</strong></p>
            <p>Consider the probabilities carefully while making your decisions.</p>
            <ul>
              <li>Highest Probability: {result.probabilities[result.recommendation]}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
