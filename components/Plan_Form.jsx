import { useState } from "react";
import "/src/assets/stylesheets/stylesheet-plan.css";

function Plan_Form(props) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Phone Number: ${formData.phone}`
    );
  };

  return (
    <>
      <div className="form-header-container">
        <h2 className="form-header">Select your plan</h2>
        <p className="form-desc">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="plan-container">
        <div className="selection-container">
          <div className="plan-selection">
            <img
              src="./src/assets/images/icon-arcade.svg"
              alt="arcade"
              className="plan-image"
            />
            <div className="plan-desc">
              <div className="plan-name">Arcade</div>
              <div className="plan-price">$9/mo</div>
            </div>
          </div>
          <div className="plan-selection">
            <img
              src="./src/assets/images/icon-advanced.svg"
              alt="advanced"
              className="plan-image"
            />
            <div className="plan-desc">
              <div className="plan-name">Advanced</div>
              <div className="plan-price">$12/mo</div>
            </div>
          </div>
          <div className="plan-selection">
            <img
              src="./src/assets/images/icon-pro.svg"
              alt="pro"
              className="plan-image"
            />
            <div className="plan-desc">
              <div className="plan-name">Pro</div>
              <div className="plan-price">$15/mo</div>
            </div>
          </div>
        </div>
        <div className="plan-rate">
          <div className="plan-rate-text">Monthly</div>
          <label className="switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>
          <div className="plan-rate-text">Yearly</div>
        </div>
      </div>
      <div className="plan-buttons">
        <button className="form-previous-step" onClick={handleSubmit}>
          Go Back
        </button>
        <button className="form-next-step" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </>
  );
}

export default Plan_Form;
