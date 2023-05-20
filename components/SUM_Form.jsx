import { useState } from "react";
import "/src/assets/stylesheets/stylesheet-summary.css";

function AD_Form(props) {
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
        <h2 className="form-header">Finishing up</h2>
        <p className="form-desc">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="summary-container">
        <div className="summary-plan-container">
          <div className="summary-plan">
            <div className="summary-plan-desc">Arcade (Monthly)</div>
            <a href="">Change</a>
          </div>
          <div className="summary-pricing">$9/mo</div>
        </div>
        <div className="summary-line"></div>
        <div className="summary-addons">
          <div className="summary-service">
            <div className="summary-service-plan">Online storage</div>
            <div className="summary-service-price">+$1/mo</div>
          </div>
          <div className="summary-service">
            <div className="summary-service-plan">Larger storage</div>
            <div className="summary-service-price">+$2/mo</div>
          </div>
        </div>
      </div>
      <div className="summary-total-container">
        <div className="summary-total-text">Total (per month)</div>
        <div className="summary-total-price">+$12/mo</div>
      </div>

      <div className="form-buttons">
        <button className="form-previous-step" onClick={handleSubmit}>
          Go Back
        </button>
        <button className="form-confirm" onClick={handleSubmit}>
          Confirm
        </button>
      </div>
    </>
  );
}

export default AD_Form;
