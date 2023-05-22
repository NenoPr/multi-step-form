import { useState, useEffect } from "react";
import "/src/assets/stylesheets/stylesheet-addon.css";

function AD_Form(data) {
  console.log(data.props.form.addons);
  const [addonsData, setAddonsData] = useState(data.props.form.addons);

  useEffect(() => {});

  const handleChange = (event) => {
    const addon = event.target.getAttribute("addon");
    setAddonsData((prevAddonsData) => ({
      ...prevAddonsData,
      [addon]: !addonsData[addon],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Online: ${addonsData.onlineService}, Storage: ${addonsData.largerStorage}, Profile: ${addonsData.customizableProfile}`
    );
    console.log(addonsData.onlineService);
    data.props.setForm((prevFormData) => ({
      ...prevFormData,
      ["addons"]: addonsData,
    }));
    console.log("Data form", data.props.form);
  };

  return (
    <>
      <div className="form-header-container">
        <h2 className="form-header">Pick add-ons</h2>
        <p className="form-desc">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      {
        <div className="addon-container">
          <div
            className="addon-selection"
            addon="onlineService"
            selection={addonsData.onlineService}
            onClick={handleChange}
          >
            <input
              type="checkbox"
              name="online-service"
              id="online-service"
              className="addon-checkbox onlineService-check"
              checked={addonsData.onlineService}
            />
            <div className="addon-desc-container">
              <div className="addon-name">Online service</div>
              <div className="addon-desc">Access to multiplayer games</div>
            </div>
            <div className="addon-price">+$1/mo</div>
          </div>

          <div
            className="addon-selection"
            addon="largerStorage"
            selection={addonsData.largerStorage}
            onClick={handleChange}
          >
            <input
              type="checkbox"
              name="larger-storage"
              id="larger-storage"
              className="addon-checkbox largerStorage-check"
              checked={addonsData.largerStorage}
            />
            <div className="addon-desc-container">
              <div className="addon-name">Larger storage</div>
              <div className="addon-desc">Extra 1TB of cloud save</div>
            </div>
            <div className="addon-price">+$2/mo</div>
          </div>
          <div
            className="addon-selection"
            addon="customizableProfile"
            selection={addonsData.customizableProfile}
            onClick={handleChange}
          >
            <input
              type="checkbox"
              name="customizable-profile"
              id="customizable-profile"
              className="addon-checkbox customizableProfile-check"
              checked={addonsData.customizableProfile}
            />
            <div className="addon-desc-container">
              <div className="addon-name">Customizable Profile</div>
              <div className="addon-desc">Custom theme on your profile</div>
            </div>
            <div className="addon-price">+$2/mo</div>
          </div>
        </div>
      }

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
