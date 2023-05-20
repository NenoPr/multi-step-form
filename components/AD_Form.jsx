import { useState } from "react";
import "/src/assets/stylesheets/stylesheet-addon.css";

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
        <h2 className="form-header">Pick add-ons</h2>
        <p className="form-desc">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="addon-container">
        <div className="addon-selection">
          <input
            type="checkbox"
            name="online-service"
            id="online-service"
            className="addon-checkbox"
          />
          <div className="addon-desc-container">
            <div className="addon-name">Online service</div>
            <div className="addon-desc">Access to multiplayer games</div>
          </div>
          <div className="addon-price">+$1/mo</div>
        </div>
        <div className="addon-selection">
          <input
            type="checkbox"
            name="larger-storage"
            id="larger-storage"
            className="addon-checkbox"
          />
          <div className="addon-desc-container">
            <div className="addon-name">Larger storage</div>
            <div className="addon-desc">Extra 1TB of cloud save</div>
          </div>
          <div className="addon-price">+$2/mo</div>
        </div>
        <div className="addon-selection">
          <input
            type="checkbox"
            name="customizable-profile"
            id="customizable-profile"
            className="addon-checkbox"
          />
          <div className="addon-desc-container">
            <div className="addon-name">Customizable Profile</div>
            <div className="addon-desc">Custom theme on your profile</div>
          </div>
          <div className="addon-price">+$2/mo</div>
        </div>
      </div>

      <div className="form-buttons">
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

export default AD_Form;
